import React, { Component } from 'react';

const Category = () => {

  let category = [
    { title: 'طلا و نقره' , img: './img/talanoghre.png' },
    { title: 'مد و پوشاک' , img: './img/kifkafsh.png' },
    { title: 'لوازم خانگی برقی' , img: './img/barghi.png' },
    { title: 'خودرو و موتورسیکلت' , img: './img/car.png' },
    { title: 'آرایشی بهداشتی' , img: './img/beauty.png' },
    { title: 'خانه و آشپزخانه' , img: './img/home.png' },
    { title: 'کالای دیجیتال' , img: './img/digital.png' },
    { title: 'موبایل' , img: './img/mobile.png' },
    { title: 'محصولات بومی و محلی' , img: './img/boomi.png' },
    { title: 'اسباب بازی کودک و نوزاد' , img: './img/toy.png' },
    { title: 'کالای خوراکی اساسی' , img: './img/khoraki.png' },
    { title: 'کارت هدیه و گیفت کارت' , img: './img/giftcard.png' },
    { title: 'ورزش و سفر' , img: './img/sport.png' },
    { title: 'کتاب، لوازم تحریر و هنر' , img: './img/ketab.png' },
    { title: 'ابزار آلات و تجهیزات' , img: './img/drel.png' },
    { title: 'تجهیزات پزشکی و سلامت' , img: './img/pezeshki.png' },
  ]

  return ( <div style={{maxWidth:'1336px',margin:'auto'}}>

<div>
      <h3 style={{textAlign: 'center', marginBottom: '36px'}}>خرید براساس دسته بندی</h3>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', rowGap:'40px' , justifyContent: 'space-around', alignItems: 'center', margin: '0px 44px', padding: '16px', paddingBottom: '40px'}}>
        {category.map((rec , index)=>(
          <div id="circlediv1">
            <img src={rec.img} alt={rec.title} id="circleimg1"/>
            <a id="circletext1">{rec.title}</a>
          </div>
        ))}
      </div>
      
    </div>

  </div> );
}
 
export default Category;