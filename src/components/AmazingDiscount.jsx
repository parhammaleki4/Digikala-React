import React from 'react';
import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const AmazingDiscount = () => {

  let discount = [
    {title: 'ساعت هوشمند ورنا مدل فیک دوغوز آبادی W49 Ultra ساعت هوشمند ورنا مدل' , img: './img/watch1.jpg' , lprice: '۹۹,۰۰۰,۰۰۰' , fprice: '۱۰۰,۰۰۰,۰۰۰'},
    {title: 'ساعت هوشمند ورنا مدل  W49 Ultra ساعت هوشمند ورنا مدل' , img: './img/watch2.jpg' , lprice: '۹۹,۰۰۰,۰۰۰' , fprice: '۱۰۰,۰۰۰,۰۰۰'},
    {title: 'ساعت هوشمند ورنا مدل  W49 Ultra ساعت هوشمند ورنا مدل' , img: './img/watch3.jpg' , lprice: '۹۹,۰۰۰,۰۰۰' , fprice: '۱۰۰,۰۰۰,۰۰۰'},
    {title: 'ساعت هوشمند ورنا مدل  W49 Ultra ساعت هوشمند ورنا مدل' , img: './img/watch2.jpg' , lprice: '۹۹,۰۰۰,۰۰۰' , fprice: '۱۰۰,۰۰۰,۰۰۰'},
    {title: 'ساعت هوشمند ورنا مدل  W49 Ultra ساعت هوشمند ورنا مدل' , img: './img/watch3.jpg' , lprice: '۹۹,۰۰۰,۰۰۰' , fprice: '۱۰۰,۰۰۰,۰۰۰'},
    {title: 'ساعت هوشمند ورنا مدل  W49 Ultra ساعت هوشمند ورنا مدل' , img: './img/watch1.jpg' , lprice: '۹۹,۰۰۰,۰۰۰' , fprice: '۱۰۰,۰۰۰,۰۰۰'},
    {title: 'W49 Ultra ساعت هوشمند' , img: './img/watch1.jpg' , lprice: '۹۹,۰۰۰,۰۰۰' , fprice: '۱۰۰,۰۰۰,۰۰۰'},
    {title: 'ساعت هوشمند ورنا مدل  W49 Ultra ساعت هوشمند ورنا مدل' , img: './img/watch3.jpg' , lprice: '۹۹,۰۰۰,۰۰۰' , fprice: '۱۰۰,۰۰۰,۰۰۰'},
    {title: 'ساعت هوشمند ورنا مدل  W49 Ultra ساعت هوشمند ورنا مدل' , img: './img/watch2.jpg' , lprice: '۹۹,۰۰۰,۰۰۰' , fprice: '۱۰۰,۰۰۰,۰۰۰'},
    {title: 'ساعت هوشمند ورنا مدل  W49 Ultra ساعت هوشمند ورنا مدل' , img: './img/watch3.jpg' , lprice: '۹۹,۰۰۰,۰۰۰' , fprice: '۱۰۰,۰۰۰,۰۰۰'},
    {title: 'ساعت هوشمند ورنا مدل  W49 Ultra ساعت هوشمند ورنا مدل' , img: './img/watch1.jpg' , lprice: '۹۹,۰۰۰,۰۰۰' , fprice: '۱۰۰,۰۰۰,۰۰۰'},
    {title: 'ساعت هوشمند ورنا مدل  W49 Ultra ساعت هوشمند ورنا مدل' , img: './img/watch1.jpg' , lprice: '۹۹,۰۰۰,۰۰۰' , fprice: '۱۰۰,۰۰۰,۰۰۰'},
    {title: 'ساعت هوشمند ورنا مدل  W49 Ultra ساعت هوشمند ورنا مدل' , img: './img/watch3.jpg' , lprice: '۹۹,۰۰۰,۰۰۰' , fprice: '۱۰۰,۰۰۰,۰۰۰'},
    {title: 'ساعت هوشمند ورنا مدل  W49 Ultra ساعت هوشمند ورنا مدل' , img: './img/watch2.jpg' , lprice: '۹۹,۰۰۰,۰۰۰' , fprice: '۱۰۰,۰۰۰,۰۰۰'},
    {title: 'ساعت هوشمند ورنا مدل  W49 Ultra ساعت هوشمند ورنا مدل' , img: './img/watch3.jpg' , lprice: '۹۹,۰۰۰,۰۰۰' , fprice: '۱۰۰,۰۰۰,۰۰۰'},
    {title: 'ساعت هوشمند ورنا مدل  W49 Ultra ساعت هوشمند ورنا مدل' , img: './img/watch1.jpg' , lprice: '۹۹,۰۰۰,۰۰۰' , fprice: '۱۰۰,۰۰۰,۰۰۰'},
    {title: 'ساعت هوشمند ورنا مدل  W49 Ultra ساعت هوشمند ورنا مدل' , img: './img/watch1.jpg' , lprice: '۹۹,۰۰۰,۰۰۰' , fprice: '۱۰۰,۰۰۰,۰۰۰'},
  ]

  return ( <div style={{maxWidth:'1336px',margin:'auto'}}>
  
    <div style={{width:'100%',height:'254px',borderRadius:'15px',backgroundColor:'rgb(214, 53, 53)',padding:'20px 0px',position:'relative'}}>
      <div style={{position:'absolute',left:'60px',top:'50%'}}>
        <img id='swiper-button-next3' className="swiper-button-next" src="./img/arrowleft.jpeg" style={{width: '40px',borderRadius: '100%'}}/>
      </div>
      <div style={{position:'absolute',right:'60px',top:'50%'}}>
        <img id='swiper-button-prev3' className="swiper-button-prev" src="./img/arrowleft.jpeg" style={{width: '40px',borderRadius: '100%',transform: 'rotate(180deg)'}}/>
      </div>
      <Swiper style={{height:'254px'}}
          dir="rtl"
          slidesPerView={'auto'}
          navigation={{
            nextEl: '#swiper-button-next3',
            prevEl: '#swiper-button-prev3',
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide style={{width:'auto',height:'254px'}}>
              <a style={{backgroundColor: 'rgb(214, 53, 53)',marginLeft:'2px',flexDirection:'column',display:'flex',height:'254px',width:'166px',justifyContent:'center'}}>
                <div><img src="./img/Amazings.svg" alt="Amazings" width='88px;'/></div>
                <div><img src="./img/Amazing1.svg" alt="Amazing1" width='88px;'/></div>
                <p style={{color: '#ffffff'}}>&lt; مشاهده همه</p>
              </a>
          </SwiperSlide >
          {discount.map((rec, index) => (
            <SwiperSlide style={{width:'164px',height:'254px'}}>
              <div style={{width:'160px',height:'254px',backgroundColor:'white',marginLeft:'4px',padding:'0px'
                ,borderTopRightRadius: index === 0 ? '15px' : '0px', borderBottomRightRadius: index === 0 ? '15px' : '0px'
              }}>
                <div style={{padding:'8px'}}>
                  <div style={{margin:'0px 6px'}}>
                    <img src={rec.img} width={'132px'}/>
                  </div>
                  <div style={{fontSize:'12px'}}>
                    <div className="text-clamped">{rec.title}</div>
                  </div>
                  <div style={{flexDirection:'column-reverse',display:'flex',marginTop:'20px'}}>
                    <div style={{color: 'rgb(192, 194, 197)', paddingLeft: '20px', alignItems:'left' , textAlign:'left',justifyContent:'left'}}><s>{rec.fprice}</s></div>
                    <div width='100%' style={{display: 'flex', alignItems: 'center',justifyContent:'space-between'}}>
                      <a id="darsadtakhfif3">۷۸٪</a>
                      <div>
                        <b>{rec.lprice}</b>
                        <img src="./img/toman.png" alt="toman" width="15px"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide style={{width:'184px',height:'254px'}}>
            <a style={{borderTopLeftRadius: '15px', borderBottomLeftRadius:'15px',backgroundColor:'white',width:'164px',height:'254px',
              display:'flex',flexDirection:'column',justifyContent:'center',marginLeft:'20px'
            }}>
              <div>
                <img src="./img/moshahedeshegeft.png" style={{width: '54px'}}/>
                <span style={{textAlign: 'center', display: 'flex', justifyContent: 'center', marginTop: '12px'}}>مشاهده همه</span>
              </div>
            </a>
          </SwiperSlide>
      </Swiper>
    </div>

  </div> );
}
 
export default AmazingDiscount;