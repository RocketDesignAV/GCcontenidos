import '../../public/css/banner.css'
import { Carousel } from 'flowbite-react';

function Banner() {
  return (
    <div className="banner">
      <Carousel>
        <img src="/img/MESSI.png" alt="..." />
        <img src="/img/coldplay-river.png" alt="..." />
        <img src="/img/riverport4.webp" alt="..." />
      </Carousel>
    </div>
  );
}

export default Banner;
