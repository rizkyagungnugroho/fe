"use client"
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", revenue: 1000000 },
  { month: "Feb", revenue: 6000000 },
  { month: "Mar", revenue: 3000000 },
  { month: "Apr", revenue: 2000000 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-zinc-900 p-4 text-sm">
        <h1 className="text-lg font-bold mb-6">Platform</h1>
        <nav className="space-y-2">
          <div>📊 Dashboard</div>
          <div>$ Orders</div>
          <div className="ml-4">Manual Payments</div>
          <div>🎫 All Events</div>
          <div className="ml-4">Tickets</div>
          <div>% Vouchers</div>
          <div>⚙️ Settings</div>
          <div className="ml-4">Bank Details</div>
          <div className="ml-4">Change Password</div>
        </nav>
      </aside>

      <main className="flex-1 p-4 sm:p-6 space-y-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="bg-zinc-800">
            <CardContent className="p-4">
              <div className="text-sm text-zinc-400">Total Revenue</div>
              <div className="text-2xl font-semibold mt-2">**** **** *** ***</div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-800">
            <CardContent className="p-4">
              <div className="text-sm text-zinc-400">Total Events</div>
              <div className="text-2xl font-semibold mt-2">+5</div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-800">
            <CardContent className="p-4">
              <div className="text-sm text-zinc-400">Total Tickets</div>
              <div className="text-2xl font-semibold mt-2">+8</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-zinc-800">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
              <div className="text-lg font-bold">Overview</div>
              <select className="bg-zinc-700 text-white text-sm rounded mt-2 sm:mt-0 px-2 py-1">
                <option value="2025">2025</option>
              </select>
            </div>
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="month" stroke="#ffffff" />
                  <YAxis stroke="#ffffff" tickFormatter={(value) => value.toLocaleString()} />
                  <Tooltip formatter={(value: number) => value.toLocaleString()} />
                  <Bar dataKey="revenue" fill="#f97316" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
