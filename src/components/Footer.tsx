'use client';

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#e8461b] to-[#dd3c0f] text-white py-12 text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Your Event Connection</h2>
        <p className="mb-6 text-sm">Join our list for exclusive event updates and insider tips.</p>

        <form className="flex items-center justify-center gap-2 flex-wrap mb-6">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-3 rounded-full w-72 max-w-full text-black outline-none"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            JOIN
          </button>
        </form>

        <div className="flex justify-center gap-6 text-xl mb-6">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
          <FaPinterestP />
        </div>

        <hr className="border-white/30 mb-4" />

        <p className="text-xs text-white/80">
          Copyright © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
