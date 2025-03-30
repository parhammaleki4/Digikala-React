import React from 'react';
import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import LoadingStory from './loading/LoadingStory';

import { useSelector} from 'react-redux';

const Story = ({isLoading}) => {

  const selector = useSelector((state)=> state.storys)
  let story = selector.newStory;
  

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