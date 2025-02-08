import React from 'react';
import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import { Grid , Navigation } from 'swiper/modules';

const MostSeller = ({mostSell,title}) => {

  return ( <div style={{maxWidth:'1336px',margin:'auto'}}>
    <div style={{padding:'16px 0px',border: '1px solid rgb(214, 214, 214)',borderRadius:'15px',marginBottom:'16px',position:'relative'}}> 
      <a id="moshahedeHaame" href='google.com'>مشاهده همه</a>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h3 style={{margin: '0px'}}>{title}</h3>
          <img src="./img/fire.png" style={{width: '20px', marginLeft: '8px'}}/>
      </div>
      <div style={{marginTop: '28px', padding: '0px 8px', display: 'flex',height: '298px',position:'relative'}}>
        <div style={{position:'absolute',left:'60px',top:'50%'}}>
          <img  className="swiper-button-next" src="./img/arrowleft.jpeg" style={{width: '40px',borderRadius: '100%'}}/>
        </div>
        <div style={{position:'absolute',right:'60px',top:'50%'}}>
          <img className="swiper-button-prev" src="./img/arrowleft.jpeg" style={{width: '40px',borderRadius: '100%',transform: 'rotate(180deg)'}}/>
        </div>
        <Swiper
          dir="rtl"
          slidesPerView={4}
          grid={{
            rows: 3,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[Grid , Navigation]}
        >
          {mostSell.map((rec, index) => (
            <SwiperSlide style={{height:'86px'}}>
                <a id='sotoneporfrosh' > 
                  <div style={{display:'flex',alignItems:'center'}}>
                    <div><img src={rec.img} width="86px"/></div>
                    <div><h3>{index+1}</h3></div>
                    <div style={{borderBottom: (index%3) === 2 ? '0px' : '0.5px solid rgb(214, 214, 214)',padding:'30px 0px',minHeight:'42px',alignItems:'center',display:'flex'}}>
                      <div className="text-clamped1" >{rec.title}</div>
                    </div>
                  </div>
                </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </div> );
}
 
export default MostSeller;