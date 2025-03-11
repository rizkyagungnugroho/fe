import CarouselComponent from "@/components/Carousel";

import Brand from "@/components/Brand"; // Sesuaikan dengan nama file

import MediaCard from "@/components/MediaCard";

import Resize from "@/components/Resize";
import Layanan from "@/components/Layanan";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div>
      <CarouselComponent />
      <Brand />
      <MediaCard />
      <Resize />
      <Layanan />
     
    </div>
  );
}
