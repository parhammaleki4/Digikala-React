import React, { useContext } from 'react';
import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { MyContext } from '../App';

const Brands = () => {
  
  let Brand = useContext(MyContext)
  
  return ( <div style={{maxWidth:'1336px',margin:'auto'}}>
    <div style={{padding: '24px 0px', border: '1px solid rgb(214, 214, 214)', borderRadius: '15px', marginBottom: '16px'}}>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h3 style={{margin: '0px'}}>محبوب‌ترین برند‌ها</h3>
        <img src="./img/star.png" style={{width: '20px', marginLeft: '8px'}}/>
      </div>
      <div style={{display: 'flex', justifyContent: 'end', alignItems: 'center', marginTop: '12px',position:'relative'}}>
        <div style={{position:'absolute',left:'60px'}}>
          <img id='swiper-button-next4' className="swiper-button-next" src="./img/arrowleft.jpeg" style={{width: '40px',borderRadius: '100%'}}/>
        </div>
        <div style={{position:'absolute',right:'60px'}}>
          <img id='swiper-button-prev4' className="swiper-button-prev" src="./img/arrowleft.jpeg" style={{width: '40px',borderRadius: '100%',transform: 'rotate(180deg)'}}/>
        </div>
        <Swiper
          dir="rtl"
          slidesPerView={'auto'}
          navigation={{
            nextEl: '#swiper-button-next4',
            prevEl: '#swiper-button-prev4',
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {Brand.map((rec, index) => (
            <SwiperSlide style={{width:'144px'}}>
              <a style={{padding: '4px 16px', display:'block', borderRight: index === 0 ? '0px' : 'hsl(0, 0%, 91%) 1px solid'}}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <img src={rec} width='110px' height='110px'/>
                </div>
              </a>
            </SwiperSlide>
          ))}
          
        </Swiper>
      </div>
    </div>
  </div> );
}
 
export default Brands;