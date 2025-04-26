'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CalendarDays, MapPin } from 'lucide-react';
const events = [
  {
    id: 1,
    image: '/assets/upcoming/img/food/1-lg.png',
    title: 'Rock Legends Live Concert',
    date: 'Wed, Jan 15',
    time: '20:00',
    category: 'MUSIC',
    location: 'Square Garden, New York',
  },
  {
    id: 2,
    image: '/assets/upcoming/img/food/2-lg.png',
    title: 'Jazz Night Live',
    date: 'Wed, Feb 5',
    time: '19:00',
    category: 'MUSIC',
    location: 'Blue Note, New York',
  },
  {
    id: 3,
    image: '/assets/upcoming/img/food/3-lg.png',
    title: 'Street Art Festival',
    date: 'Thu, Feb 20',
    time: '10:00',
    category: 'ART',
    location: 'Art District, Berlin',
  },
  {
    id: 4,
    image: '/assets/upcoming/img/food/4-lg.png',
    title: 'Impressionist Art Exhibition',
    date: 'Sat, Feb 1',
    time: '11:00',
    category: 'ART',
    location: 'Louvre Museum, Paris',
  },
  {
    id: 5 ,
    image: '/assets/upcoming/img/food/4-lg.png',
    title: 'Impressionist Art Exhibition',
    date: 'Sat, Feb 1',
    time: '11:00',
    category: 'ART',
    location: 'Louvre Museum, Paris',
  },
];

const PopularEvents = () => {
  return (
      <section className=" bg-[#0f0f1b] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <p className="text-orange-400 font-semibold">Upcoming</p>
              <h2 className="text-3xl md:text-4xl font-bold">Popular Events</h2>
            </div>
            <a href="#" className="text-orange-400 text-sm hover:underline">
              SEE ALL EVENTS
            </a>
          </div>
  
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {events.map((event) => (
              <SwiperSlide key={event.id}>
                <div className="bg-[#1c1c2e] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={600}
                    height={400}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-4 space-y-2">
                    <span className="bg-orange-500 text-xs font-semibold px-3 py-1 rounded-full inline-block">
                      {event.category}
                    </span>
                    <div className="text-sm text-gray-400 flex items-center gap-2">
                      <CalendarDays size={14} />
                      {event.date} · {event.time}
                    </div>
                    <h3 className="text-white font-semibold">{event.title}</h3>
                    <div className="text-sm text-gray-400 flex items-center gap-2">
                      <MapPin size={14} />
                      {event.location}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  };

export default PopularEvents;
