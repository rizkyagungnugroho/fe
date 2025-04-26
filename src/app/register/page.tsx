'use client';

import { useState } from 'react';

export default function RegisterPage() {
  const [showReferral, setShowReferral] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [referralCode, setReferralCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Untuk testing, bisa console log dulu
    console.log({ username, password, referralCode });
    // Bisa lanjut kirim ke backend di sini
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
        {/* Gambar Kiri */}
        <div className="md:w-1/2 hidden md:flex items-center justify-center">
          <img
            src="/assets/hero/hero-bg1.png"
            alt="Register Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Kanan */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Create Your Account
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="button"
              onClick={() => setShowReferral(!showReferral)}
              className="text-sm text-blue-600 hover:underline"
            >
              {showReferral ? 'Hide Referral Code' : 'Have a Referral Code?'}
            </button>

            {showReferral && (
              <input
                type="text"
                placeholder="Referral Code"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-gray-700 transition"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}    