import '../../public/css/banner.css'
import { Carousel } from 'flowbite-react';

function Banner() {
  return (
    <div className="banner">
      <Carousel>
        <img src="/img/MESSI.png" alt="..." />
        <img src="/img/river-header.webp" alt="..." />
        <img src="/img/cai-header.jpg" alt="..." />
        <img src="/img/coldplay-river.png" alt="..." />
        <img src="/img/taylor-header.jpg" alt="..." />
      </Carousel>
    </div>
  );
}

export default Banner;
