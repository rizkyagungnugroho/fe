"use client";

import { useState } from "react";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const brands = [
  {
    name: "Macbook Pro M4",
    image: "/brandlogo1.jpg",
    desc: "Bertenaga super berkat M4. Mulai dari Rp 59.999.000",
  },
  {
    name: "Iphone 15",
    image: "/brandlogo2.jpg",
    desc: "Keseruan baru Mulai dari Rp15.749.000",
  },
  {
    name: "iPad mini A17 Pro",
    image: "/brandlogo3.jpg",
    desc: "Genggam kehebatannya. Mulai dari Rp 9.349.000",
  },
  {
    name: "Mac Mini M4",
    image: "/macmini.jpg",
    desc: "Genggam kehebatannya. Mulai dari Rp 9.349.000",
  },
];

const Brand = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 1; // Ubah sesuai jumlah item yang ingin ditampilkan per slide
  const totalSlides = Math.ceil(brands.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden ">
      <h2 className="text-center text-2xl font-bold mb-5 mt-6 text-gray-500 ">Brand Kami</h2>
      <div className="flex items-center justify-center space-x-5 ">
        <Button variant="outline" onClick={prevSlide}>
          <ChevronLeft />
        </Button>

        <div className="w-full overflow-hidden">
          <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {brands.map((brand, index) => (
              <div key={index} className="w-full flex justify-center mb-5">
                <Card className="w-64 flex-shrink-0 p-7 md:mx-2">
                  <CardContent className="flex flex-col items-center">
                    <img src={brand.image} alt={brand.name} className="w-24 h-24 object-contain mb-5" />
                    <CardTitle className="mb-4 container items-center">{brand.name}</CardTitle>
                    <CardDescription>{brand.desc}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        

        <Button variant="outline" onClick={nextSlide}>
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default Brand;
