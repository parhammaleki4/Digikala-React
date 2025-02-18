import React, { useState, useEffect } from 'react';
import './App.css';
import AmazingDiscount from './components/AmazingDiscount';
import Brands from './components/Brands';
import Category from './components/Category';
import Discounts from './components/Discounts';
import Footer from './components/footer';
import HotSell from './components/HotSell';
import MostSeller from './components/MostSell';
import Navbar from './components/Navbar';
import Posters from './components/Posters';
import Reading from './components/Reading';
import Recomended from './components/Recomended';
import Shortcuts from './components/Shortcuts';
import SmallPosters from './components/SmallPosters';
import SmallPosters1 from './components/SmallPosters1';
import SmallPosters2 from './components/SmallPosters2';
import SmallPosters3 from './components/SmallPosters3';
import SmallPosters4 from './components/SmallPosters4';
import Story from './components/Story';
import SuperMarket from './components/SuperMarket';

function App() {
  const recommendations1 = [
    {
      title: "گوشی موبایل",
      images: ["./img/iphone1.webp", "./img/iphone2.webp", "./img/iphone3.webp", "./img/iphone4.webp"],
    },
    {
      title: "کیف و کاور گوشی",
      images: ["./img/ghb1.webp", "./img/ghb2.webp", "./img/ghb3.webp", "./img/ghb4.webp"],
    },
    {
      title: "هدفون، هدست و هندزفری",
      images: ["./img/hnz1.jpg", "./img/hnz6.jpg", "./img/hnz7.jpg", "./img/hnz2.jpg"],
    },
    {
      title: "ساعت هوشمند",
      images: ["./img/watch1.jpg", "./img/watch2.jpg", "./img/watch3.jpg", "./img/wantch4.jpg"],
    },
  ];
  const recommendations2 = [
    {
      title: "کنسول خانگی",
      images: ["./img/konsol1.jpg", "./img/konsol2.jpg", "./img/konsol3.jpg", "./img/konsol4.jpg"],
    },
    {
      title: "سایر لوازم خودرو",
      images: ["/img/carp1.jpg", "/img/carp2.jpg", "/img/carp3.jpg", "/img/carp4.jpg"],
    },
    {
      title: "ابزار آلات و تجهیزات",
      images: ["./img/drl1.webp", "./img/drl2.webp", "./img/drl3.webp", "./img/drl4.webp"],
    },
    {
      title: "ساعت هوشمند",
      images: ["./img/tblt1.jpg", "./img/tblt2.jpg", "./img/tblt3.jpg", "./img/tblt4.jpg"],
    },
  ];
  let mostSell = [
    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},
    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال' , img: './img/watch1.jpg'},
    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},

    {title: 'گوشی موبایل نوکیا' , img: './img/watch1.jpg'},
    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},
    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},

    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},
    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},
    {title: 'گوشی موبایل نوکیا با ساعت هوشمند' , img: './img/watch1.jpg'},

    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},
    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},
    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},

    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},
    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},
    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},

    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},
    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},
    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},
  ];
  let hotSell = [
    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},
    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال' , img: './img/watch1.jpg'},
    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},

    {title: 'گوشی موبایل نوکیا' , img: './img/watch1.jpg'},
    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},
    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},

    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},
    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},
    {title: 'گوشی موبایل نوکیا با ساعت هوشمند' , img: './img/watch1.jpg'},

    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},
    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},
    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},

    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},
    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},
    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},

    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},
    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},
    {title: 'گوشی موبایل نوکیا با ساعت هوشمند اشغال خیلی خریدن توسیشو برا داداششون' , img: './img/watch1.jpg'},
  ];
  const [isLoading , setIsLoading] = useState(1);
  useEffect(() => {
    setTimeout(() => {
        setIsLoading(0);
    }, 1000);})


  return (
    <div className="App">
      <Navbar/>
      <div style={{margin:'0px 20px'}}>
        <Story isLoading={isLoading}/>
      </div>
      <Posters isLoading={isLoading}/>
      <div style={{margin:'0px 20px'}}>
        <Shortcuts isLoading={isLoading}/>
        <AmazingDiscount/>
        <SmallPosters/>
        <SuperMarket/>
        <SmallPosters1/>
        <Category/>
        <SmallPosters2/>
        <Brands/>
        <SmallPosters3/>
        <Recomended recommendations={recommendations1}/>
        <MostSeller mostSell={mostSell} title={'پرفروش‌ترین کالا‌ها'}/>
        <Recomended recommendations={recommendations2}/>
        <SmallPosters4/>
        <Discounts/>
        <HotSell mostSell={hotSell} title={'داغ ترین چند ساعت گذشته'}/>
        <Reading/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;