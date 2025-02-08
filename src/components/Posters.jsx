import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Posters = ({isLoading}) => {
  let poster = ["./img/sibilbaba.gif","./img/slider1.webp","./img/slider2.webp","./img/slider4.webp","./img/slider5.webp"];
  return (
    <div style={{maxWidth:'1920px',margin:'auto'}}>
    {
      isLoading ? (
        <Skeleton style={{width:'100%',height:'400px'}}/>
      ) : (
      <div style={{position:'relative'}}>
        <div style={{position:'absolute',right:'30px',bottom:'50px'}}>
          <img id='swiper-button-next2' className="swiper-button-next" src="./img/arrowleft.jpeg" style={{width: '40px',borderRadius: '100%',transform: 'rotate(180deg)'}}/>
        </div>
        <div style={{position:'absolute',right:'140px',bottom:'50px'}}>
          <img id='swiper-button-prev2' className="swiper-button-prev" src="./img/arrowleft.jpeg" style={{width: '40px',borderRadius: '100%'}}/>
        </div>
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={true}
          navigation={{
            nextEl: '#swiper-button-next2',
            prevEl: '#swiper-button-prev2',
            clickable: true,
          }}
          modules={[Autoplay,Pagination,Navigation]}
          className="mySwiper"
        >
          {poster.map((rec, index) => (
          <div style={{width: '100%' , height:'100%'}}>
            <SwiperSlide>
              <div id="swiper-slide1">
                <img src={rec}/>
              </div>
            </SwiperSlide>
          </div>
          ))}
        </Swiper>
      </div>
      )}
    </div>
  );
}
export default Posters;