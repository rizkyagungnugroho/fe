"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Ticket } from "lucide-react";

const TicketDetail = () => {
  const ticketPrice = 100;
  const stock = 25;
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if (quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left: Event Image */}
        <div className="w-full h-96 relative rounded-xl overflow-hidden">
          <Image
            src="/assets/upcoming/img/music/2-lg.png"
            alt="Event"
            fill
            className="object-cover"
          />
        </div>

        {/* Right: Event Info */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold">Photography Exhibition</h1>
          <div className="flex items-center gap-4 text-sm text-zinc-400">
            <span>📅 Tue, Apr 1 • 11:00</span>
            <span>📍 National Gallery, London</span>
          </div>

          {/* Countdown */}
          <div className="flex gap-4 text-center">
            {[
              { label: "DAYS", value: 98 },
              { label: "HOURS", value: 1 },
              { label: "MINUTES", value: 24 },
              { label: "SECONDS", value: 35 },
            ].map((item, idx) => (
              <div key={idx} className="border-2 border-orange-500 px-4 py-2 rounded">
                <div className="text-2xl font-bold">{item.value}</div>
                <div className="text-xs text-orange-500">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Ticket Info */}
          <div className="flex justify-between items-center bg-zinc-800 rounded p-4">
            <div className="flex flex-col gap-1 text-sm">
              <div className="flex items-center gap-2">
                <Ticket size={16} /> Frontseat
              </div>     
              <Button
                variant="secondary"
                className="w-fit bg-zinc-700 text-xs text-white cursor-default px-3 py-1"
              >
                {stock} tickets left
              </Button>
            </div>
            <div className="font-bold">${ticketPrice} <span className="text-sm font-normal">each</span></div>
          </div>

          {/* Quantity Selector & Button */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 bg-zinc-800 p-2 rounded">
                <Button size="icon" variant="ghost" onClick={handleDecrease}>
                  <Minus size={16} />
                </Button>
                <span className="px-2">{quantity}</span>
                <Button size="icon" variant="ghost" onClick={handleIncrease}>
                  <Plus size={16} />
                </Button>
              </div>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full">
                🎫 {quantity} x ticket - ${quantity * ticketPrice}
              </Button>
            </div>

            {/* Total Price & Checkout */}
            <div className="flex justify-between items-center bg-zinc-900 p-4 rounded">
              <div className="text-lg font-semibold">Total Price</div>
              <div className="text-xl font-bold text-orange-500">${quantity * ticketPrice}</div>
            </div>
            <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-full text-lg font-semibold">
              Checkout
            </Button>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-sm text-zinc-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
          In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
        </p>
      </div>
    </div>
  );
};

export default TicketDetail;
