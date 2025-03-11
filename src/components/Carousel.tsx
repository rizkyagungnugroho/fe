"use client";

import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

const images = ["/banner.jpg", "/banner1.png", "/banner2.png", "/banner3.png"];

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval); // Membersihkan interval saat unmount
  }, []);

  return (
    <nav className="container mx-auto">
      <div className="flex items-center justify-center py-4">
        <Carousel className="w-full max-w-4xl relative">
          <CarouselContent
            className="w-full whitespace-nowrap transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Pindah slide otomatis
          >
            {images.map((src, index) => (
              <CarouselItem key={index} className="w-full flex justify-center">
                <Image src={src} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover" width={1400} height={700} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)} />
          <CarouselNext onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)} />
        </Carousel>
      </div>
    </nav>
  );
};

export default CarouselComponent;
