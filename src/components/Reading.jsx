import React, { Component } from 'react';
const Reading = () => {
  return ( <div style={{maxWidth:'1336px',margin:'auto'}}>

    <div>
      <div style={{padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <a style={{color: 'rgb(25, 191, 211)'}}>&lt; مطالب بیشتر در دیجی‌کالا مگ</a>
        <b>خواندنی‌ها</b>
      </div>
      <div id="read" dir='rtl'>
        <div id="readvid">
          <img src="./img/mozhe.jpg" alt="mozhe" id="readimg"/>
          <a id="readtext">تکنیک‌ استفاده از صابون ابرو برای حالت‌دهی عالی ابرو های کچل شما که نیاز به موکت شدن داره</a>
        </div>
        <div id="readvid">
          <img src="./img/frogh.jpg" alt="frogh" id="readimg"/>
          <a id="readtext">بهترین اشعار فروغ فرخزاد درباره‌ی عشق</a>
        </div>
        <div id="readvid">
          <img src="./img/filmaction.jpg" alt="filmaction" id="readimg"/>
          <a id="readtext">فیلم اکشن «کمینگاه دزدان ۲»، اولین اکران موفق سال ۲۰۲۵ (باکس آفیس هفته)</a>
        </div>
        <div id="readvid">
          <img src="./img/tobtala.jpg" alt="tobtala" id="readimg"/>
          <a id="readtext">نتایج گلدن گلوب ۲۰۲۵ چه تاثیری بر جوایز اسکار و امی خواهد داشت؟</a>
        </div>
      </div>
    </div>

  </div> );
}
 
export default Reading;