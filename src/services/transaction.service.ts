import { prisma } from '@/lib/prisma'
import { isOverdue, isOverdueInDays } from '@/utils/time'

export const checkAndUpdateTransactionStatuses = async () => {
  const transactions = await prisma.transaction.findMany({
    where: {
      status: {
        in: ['waiting_for_payment', 'waiting_for_admin_confirmation']
      }
    },
    include: {
      ticket: true,
      voucher: true,
      user: true
    }
  })

  for (const trx of transactions) {
    if (trx.status === 'waiting_for_payment' && isOverdue(trx.createdAt, 2)) {
      await expireTransaction(trx.id)
    }

    if (trx.status === 'waiting_for_admin_confirmation' && isOverdueInDays(trx.paymentProofUploadedAt!, 3)) {
      await cancelTransaction(trx.id)
    }
  }
}

const expireTransaction = async (id: string) => {
  await prisma.transaction.update({
    where: { id },
    data: { status: 'expired' }
  })

  await rollbackTransaction(id)
}

const cancelTransaction = async (id: string) => {
  await prisma.transaction.update({
    where: { id },
    data: { status: 'canceled' }
  })

  await rollbackTransaction(id)
}

const rollbackTransaction = async (transactionId: string) => {
  const trx = await prisma.transaction.findUnique({
    where: { id: transactionId },
    include: { ticket: true, user: true, voucher: true }
  })

  if (!trx) return

  // Restore seats
  await prisma.ticket.update({
    where: { id: trx.ticketId },
    data: { availableSeats: { increment: trx.quantity } }
  })

  // Restore points
  if (trx.usedPoints) {
    await prisma.user.update({
      where: { id: trx.userId },
      data: { points: { increment: trx.usedPoints } }
    })
  }

  // Reactivate voucher
  if (trx.voucherId) {
    await prisma.voucher.update({
      where: { id: trx.voucherId },
      data: { isUsed: false }
    })
  }
}
