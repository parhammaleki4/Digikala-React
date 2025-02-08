import React from 'react';
import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import LoadingStory from './loading/LoadingStory';

const Story = ({isLoading}) => {
  const story = [
    {title: "تریلی ضربه موبایل‌ها" , images: "./img/story/0041082f7a79cdc77b46c19f19026baaef0b7476_1736358230.jpg"},
    {title: "گوشی مردان آهنین" , images: "./img/story/1334035054f14e719326332a28c603b0.webp"},
    {title: "دوربین آبپاش احمقا" , images: "./img/story/2ca87e536ff5bf8686c392e40deb481f7a9faccb_1736278223.jpg"},
    {title: "دلقک احتمالا لباس فروش" , images: "./img/story/4aff2ce8cd2496380a41a0944d3b0701ab0431c2_1736299908.jpg"},
    {title: "تاس و اینا" , images: "./img/story/6b7291cfebd8483dae414a3c97f99a34.webp"},
    {title: "کلمن تاشو سفری" , images: "./img/story/70ac36f67648ab779d702250fe79e14c07b64b7d_1736534121.jpg"},
    {title: "بهترینای انکر" , images: "./img/story/759f862ecc62e8ef56e33dea4e70048e61bff6f1_1736179672.jpg"},
    {title: "بهترین انتخاب شکارچیان هیولا کریپتد نردی" , images: "./img/story/a28c2d983a6083b050227749e10c2a897561ea4f_1736430376.jpg"},
    {title: "بهترین موس گیمینگ‌های دنیا" , images: "./img/story/a2ff2e1f7a95d96719405d225625dd716b6b3a17_1736315641.jpg"},
    {title: "دلقکای بنفش" , images: "./img/story/bc2ba23a1a044817b33b757bab9c265e.webp"},
    {title: "دوتا بخر یکی ببر سامسونگ آشغال" , images: "./img/story/c9e1510fe340493e997df690ede78e7b.webp"},
    {title: "دزد کت شلواری" , images: "./img/story/e818ef9ec70e471ab4909f174b88e1fe.webp"},
    {title: "ساعت احمقانه" , images: "./img/story/e874f1e0689b63838bd4493ef2c28f614447b0de_1736249196.jpg"},
    {title: "وای داداش کدوم بهتر" , images: "./img/story/ef94f83914c6a2e20eb4a6d9f0fd2f656d79f5fa_1736279465.jpg"},
    {title: "تریلی ضربه موبایل‌ها" , images: "./img/story/0041082f7a79cdc77b46c19f19026baaef0b7476_1736358230.jpg"},
    {title: "گوشی مردان آهنین" , images: "./img/story/1334035054f14e719326332a28c603b0.webp"},
    {title: "دوربین آبپاش احمقا" , images: "./img/story/2ca87e536ff5bf8686c392e40deb481f7a9faccb_1736278223.jpg"},
    {title: "دلقک احتمالا لباس فروش" , images: "./img/story/4aff2ce8cd2496380a41a0944d3b0701ab0431c2_1736299908.jpg"},
    {title: "تاس و اینا" , images: "./img/story/6b7291cfebd8483dae414a3c97f99a34.webp"},
    {title: "کلمن تاشو سفری" , images: "./img/story/70ac36f67648ab779d702250fe79e14c07b64b7d_1736534121.jpg"},
    {title: "بهترینای انکر" , images: "./img/story/759f862ecc62e8ef56e33dea4e70048e61bff6f1_1736179672.jpg"},
    {title: "بهترین انتخاب شکارچیان هیولا کریپتد نردی" , images: "./img/story/a28c2d983a6083b050227749e10c2a897561ea4f_1736430376.jpg"},
    {title: "بهترین موس گیمینگ‌های دنیا" , images: "./img/story/a2ff2e1f7a95d96719405d225625dd716b6b3a17_1736315641.jpg"},
    {title: "دلقکای بنفش" , images: "./img/story/bc2ba23a1a044817b33b757bab9c265e.webp"},
    {title: "دوتا بخر یکی ببر سامسونگ آشغال" , images: "./img/story/c9e1510fe340493e997df690ede78e7b.webp"},
    {title: "دزد کت شلواری" , images: "./img/story/e818ef9ec70e471ab4909f174b88e1fe.webp"},
    {title: "ساعت احمقانه" , images: "./img/story/e874f1e0689b63838bd4493ef2c28f614447b0de_1736249196.jpg"},
    {title: "وای داداش کدوم بهتر" , images: "./img/story/ef94f83914c6a2e20eb4a6d9f0fd2f656d79f5fa_1736279465.jpg"},
  ]

  return (
    <div style={{maxWidth:'1336px',margin:'auto', padding: '16px 0px'}}>
      {
      isLoading ? (
        <div style={{display: 'flex', alignItems: 'center' , justifyContent: 'space-between'}}>
          <LoadingStory/>
        </div>
      ) : (
      <div style={{display: 'flex', alignItems: 'center' ,justifyContent: 'space-between',position:'relative'}}>
        <div style={{position:'absolute',left:'60px'}}>
          <img id='swiper-button-next1' className="swiper-button-next" src="./img/arrowleft.jpeg" style={{width: '40px',borderRadius: '100%'}}/>
        </div>
        <div style={{position:'absolute',right:'60px'}}>
          <img id='swiper-button-prev1' className="swiper-button-prev" src="./img/arrowleft.jpeg" style={{width: '40px',borderRadius: '100%',transform: 'rotate(180deg)'}}/>
        </div>
        <Swiper
          dir="rtl"
          slidesPerView={'auto'}
          navigation={{
            nextEl: '#swiper-button-next1',
            prevEl: '#swiper-button-prev1',
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {story.map((rec, index) => (
            <SwiperSlide style={{width:'108px'}}>
              <a id="storyaa" style={{marginRight: index === 0 ? '8px' : '0px'}}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <img src={rec.images} id="storyimg"/>
                </div>
                <span id="storytext">{rec.title}</span>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      )}
    </div>
  );
}
 
export default Story;