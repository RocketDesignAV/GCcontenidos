import '../../public/css/instagram.css'
import { useEffect, useState } from 'react';

const Instagram = () => {
 const [instagramData, setInstagramData] = useState([]);

  useEffect(() => {
    const url = `https://graph.instagram.com/me/media?fields=media_type,media_url,thumbnail_url,permalink&&limit=6&access_token=IGQWRNQTBaSW9IZAllTYS1vaWtLLUpYczNiZAE85eTlkN0c1a25KR0t5RzZAPM0wwTkNqU3pQV195NjRHVFF0WktFcUI4NHFIc1dXZA3RYaDF6N2l3akt0QVdwVEN0RW11Vjk5b3JrNUlOb0hmdzJCSnBibFFKRWZAVVm8ZD`;

    fetch(url)
      .then(res => res.json())
      .then(res => {
        setInstagramData(res.data);
      })
      .catch(error => {
        console.error('Error fetching Instagram data:', error);
      });
  }, []); 


  

  return (
    <div className="p-5 portfolioContenedor" id="portfolioId">
      <h1>PORTFOLIO</h1>
      <div className='hr'>
        <p>d</p>
      </div>
      <div className="container mx-auto py-2 lg:pt-12 portfolioContent">
        <div className="-m-1 flex flex-wrap md:-m-2 justify-center">
         {instagramData.map((element, index) => (
          <div key={index} className="w-full md:w-1/3 p-1 md:p-2 cardInstagram">
             <a href={element.permalink} target="_blank" rel="noopener noreferrer">
                {element.media_type === "IMAGE" ? (
                    <img className="block h-full w-full rounded-lg object-cover object-center hover:scale-110 transition-transform duration-300" src={element.media_url} alt='img instagram'/>
                ) : element.media_type === "VIDEO" ? (
                    <video controls poster={element.thumbnail_url} className='block h-full w-full rounded-lg object-cover object-center hover:scale-110 transition-transform duration-300'>
                        <source src={element.media_url} type="video/mp4" />
                    </video>
                ) : null}
              </a>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instagram