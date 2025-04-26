'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

const CheckoutPage = () => {
  const searchParams = useSearchParams();
  const quantity = parseInt(searchParams.get('quantity') || '0');
  const total = parseInt(searchParams.get('total') || '0');

  const [paymentMethod, setPaymentMethod] = useState('Transfer Bank');

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <div className="max-w-xl mx-auto bg-[#141414] border border-gray-700 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">Checkout</h2>

        <div className="text-sm space-y-4">
          <div className="flex justify-between">
            <span>Tickets</span>
            <span>{quantity} pcs</span>
          </div>
          <div className="flex justify-between">
            <span>Total Price</span>
            <span className="font-semibold">Rp {total.toLocaleString()}</span>
          </div>
          <div>
            <label className="block mb-1">Payment Method</label>
            <select
              className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option>Transfer Bank</option>
              <option>QRIS</option>
              <option>E-Wallet</option>
            </select>
          </div>
        </div>

        <button
          className="mt-6 w-full py-2 rounded bg-orange-500 hover:bg-orange-600 font-semibold"
          onClick={() => alert('Pembayaran berhasil!')}
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
