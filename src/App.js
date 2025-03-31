import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './Store'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
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
import Login from './components/login';
export let MyContext = React.createContext();


function App() {
  const Brand = ["./img/Mercedes-Logo.svg.png","./img/suuu.png","./img/toyota-logo.png","./img/Dodge-logo.png","./img/ford-.png",
    "./img/mitsu.png","./img/lesxus1.png","./img/Volkswagen_logo.png","./img/koenigsegg-logo-brandlogos.net_-1.png","./img/audi.jpg",
    "./img/porsche_logo_PNG1.png","./img/Nissan_2020_logo.svg","./img/Mercedes-Logo.svg.png","./img/suuu.png","./img/toyota-logo.png","./img/Dodge-logo.png","./img/ford-.png",
    "./img/mitsu.png","./img/lesxus1.png","./img/Volkswagen_logo.png","./img/koenigsegg-logo-brandlogos.net_-1.png","./img/audi.jpg",
    "./img/porsche_logo_PNG1.png","./img/Nissan_2020_logo.svg"
  ]
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

  const [products,setProducts] = useState([]);
  const fetchP = async () => {
    fetch("http://localhost:3004/recommendations2").then(data=>data.json()).then
      (res=>setProducts(res)).catch((err)=>console.log(err))
  }
  useEffect(()=>{
    fetchP()
  })

  
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/login/back" element={<Navigate replace to="/" />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={ <>
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
                <MyContext.Provider value={Brand}>
                <Brands/>
                </MyContext.Provider>
                <SmallPosters3/>
                <Recomended recommendations={recommendations1}/>
                <MostSeller mostSell={mostSell} title={'پرفروش‌ترین کالا‌ها'}/>
                <Recomended recommendations={products}/>
                <SmallPosters4/>
                <Discounts/>
                <HotSell mostSell={hotSell} title={'داغ ترین چند ساعت گذشته'}/>
                <Reading/>
              </div>
              <Footer/>
            </>}/>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;