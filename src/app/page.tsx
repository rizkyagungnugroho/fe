import CarouselComponent from "@/components/Carousel";
import Jumbotron from "@/components/Jumbotron";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <div>
      <Jumbotron />
      <CarouselComponent/>
      <Footer/>
     
    </div>
  );
}
