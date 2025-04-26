import React from "react";
import { Calendar, MapPin, Search, Tag } from "lucide-react";

const Jumbotron = () => {
  return (
    <section
      className="relative bg-[url('/assets/hero/hero-bg2.png')] bg-no-repeat bg-cover bg-center h-screen"
    >
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Container utama (responsive) */}
      <div className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center px-4 text-white text-center">
        <p className="text-orange-400 font-semibold text-xl mb-2">
          Uncover New Moments
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          DISCOVER EVENTS <br /> & EXPERIENCES
        </h1>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl">
          Join a vibrant community where you can explore global happenings and
          share memorable moments with friends and family.
        </p>

        {/* Search Filters */}
        <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-3 flex flex-wrap items-center justify-center gap-3 text-white shadow-md w-full max-w-4xl">
          <div className="flex items-center gap-2">
            <Search size={16} />
            <input
              type="text"
              placeholder="Event name or artist"
              className="bg-transparent outline-none text-white placeholder:text-white/70"
            />
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <select className="bg-transparent outline-none text-white">
              <option>Event location</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <input
              type="date"
              className="bg-transparent outline-none text-white"
            />
          </div>
          <div className="flex items-center gap-2">
            <Tag size={16} />
            <select className="bg-transparent outline-none text-white">
              <option>Event Type</option>
            </select>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full">
            <Search />
          </button>
        </div>

        <p className="text-sm text-orange-400 mt-4">
          Please select at least one field or leave them empty to see all
          events.{" "}
          <span className="underline cursor-pointer">clear search</span>
        </p>
      </div>
    </section>
  );
};

export default Jumbotron;
