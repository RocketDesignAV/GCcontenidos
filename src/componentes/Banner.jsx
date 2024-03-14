import '../../public/css/banner.css'
import { Carousel } from 'flowbite-react';

function Banner() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 banner">
      <Carousel>
        <img src="/img/night-festival.jpg" alt="..." />
        <img src="/img/coldplay-river.png" alt="..." />
        <img src="/img/riverport4.webp" alt="..." />
      </Carousel>
    </div>
  );
}

export default Banner;
