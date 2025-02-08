import React, { useState } from 'react';
import LoadingShortcuts from './loading/LoadingShortcuts';
const Shortcuts = ({isLoading}) => {

  let shortcut = [
    {img: "./img/Screenshot 2025-01-13 at 22.22.04.png" , title: 'بیشتر' },
    {img: "./img/plus.png" , title: 'پلاس' },
    {img: "./img/kifpul.png" ,  title: 'خرید چکی' },
    {img: "./img/maghaze.png" ,  title: 'تبلیغات فروشندگاه+جوایز' },
    {img: "./img/goshi.png" ,  title: 'تخفیف موبایل‌کارکرده' },
    {title: 'خرید طلای دیجیتال' , img: './img/taladigi.png' },
    {title: 'ارسال‌امروز زیورآلات طلا' , img: './img/tala.jpg' },
    {title: 'وام فوری' , img: './img/vam.png' },
    {title: 'برای بابا' , img: './img/sibil.png' },
    {title: 'سوپرمارکت دیجی‌کالا' , img: './img/super.png' },
  ]
  return ( <div style={{maxWidth:'1336px',margin:'auto'}}>

    <div>
    {
    isLoading ? (

      <div style={{display: 'flex', justifyContent:'space-between', alignItems: 'center', margin: '17px', padding: '8px 0px'}}>
      <LoadingShortcuts/>
      </div>
    ) : (
      <div style={{display: 'flex', justifyContent:'space-between', alignItems: 'center', margin: '17px', padding: '8px 0px'}}>
        {shortcut.map((rec , index)=>(
          <div id="circlediv">
            <img src={rec.img} alt={rec.title} id="circleimg"/>
            <a id="circletext">{rec.title}</a>
          </div>
        ))}
      </div>
    )}
  </div>

  </div> );
}
 
export default Shortcuts;