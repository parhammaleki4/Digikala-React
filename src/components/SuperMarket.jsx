import React, { Component } from 'react';
const SuperMarket = () => {
  let stuff = [
    {img:'./img/zafek.webp',drsd:'۴۰٪'},
    {img:'./img/zaferon.webp',drsd:'۴۰٪'},
    {img:'./img/skach.webp',drsd:'۴۴٪'},
    {img:'./img/gandom.webp',drsd:'۴۵٪'},
    {img:'./img/pushak.webp',drsd:'۵۰٪'},
    {img:'./img/assal.webp',drsd:'۶۵٪'}
  ]
  return ( <div style={{maxWidth:'1336px',margin:'auto'}}>

    <div id="supermarketdiss">
      <div id="contaner5">
        <div id="contaner4" style={{backgroundColor: 'hsl(0, 0%, 100%)', padding: '1px', borderRadius: '50px', padding: '13px 20px'}}>
          <span style={{marginRight: '8px', color: 'green'}}>&larr;</span>
          <span style={{color: 'green', borderRadius: '50%'}}>بیش از ۱۰۰ کالا</span>
        </div>
        {stuff.map((rec, index)=>(
          <div id='divtakh'>
            <img src={rec.img} id="imgTakhfif"/>
            <a id="darsadtakhfif2">{rec.drsd}</a>
          </div>
        ))}
      </div>
      <div id="contaner5">
        <span style={{backgroundColor: 'green', color: 'whitesmoke', textAlign: 'center', padding: '0px 12px', borderRadius: '50px'}}>تا ۶۵٪ تخفیف</span>
        <span style={{color: 'green', margin: '0px 20px', textAlign: 'center', fontSize:'x-large'}}>شگفت‌انگیز سوپرمارکتی</span>
        <img src="./img/fresh.webp" alt="fresh"/>
      </div>
    </div>

  </div> );
}
 
export default SuperMarket;