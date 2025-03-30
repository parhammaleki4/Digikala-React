import { configureStore , createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user' , 
  initialState: {userName : '' , loggin : 0} ,
  reducers: {
    login : (state , action) => {
      state.userName = action.payload.userName;
      state.loggin = 1;
    } ,
    logout : (state) => {
      state.userName = '';
      state.loggin = 0;
    }
  }
})
export const {login , logout} = userSlice.actions;

const locationSlice = createSlice({
  name: 'location' ,
  initialState: {province : 'تهران' , city : 'تهران'}
})

const amazingDiscountSlice = createSlice({
  name: 'ADiscount' ,
  initialState: { discount : [
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
  ]}
})

const categorySlice = createSlice({
  name: 'categorys' ,
  initialState: {categ : [
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
  ]}
})

const discountSlice = createSlice({
  name: 'discount' ,
  initialState: {diss : [
    {img:'./img/tblt1.jpg' , fprice: '۱۰۰,۰۰۰,۰۰۰' , lprice: '۹۹,۰۰۰,۰۰۰'},
    {img:'./img/tblt1.jpg' , fprice: '۱۰۰,۰۰۰,۰۰۰' , lprice: '۹۹,۰۰۰,۰۰۰'},
    {img:'./img/tblt1.jpg' , fprice: '۱۰۰,۰۰۰,۰۰۰' , lprice: '۹۹,۰۰۰,۰۰۰'},
    {img:'./img/tblt1.jpg' , fprice: '۱۰۰,۰۰۰,۰۰۰' , lprice: '۹۹,۰۰۰,۰۰۰'},
    {img:'./img/tblt1.jpg' , fprice: '۱۰۰,۰۰۰,۰۰۰' , lprice: '۹۹,۰۰۰,۰۰۰'},
    {img:'./img/tblt1.jpg' , fprice: '۱۰۰,۰۰۰,۰۰۰' , lprice: '۹۹,۰۰۰,۰۰۰'},
    {img:'./img/tblt1.jpg' , fprice: '۱۰۰,۰۰۰,۰۰۰' , lprice: '۹۹,۰۰۰,۰۰۰'},
    {img:'./img/tblt1.jpg' , fprice: '۱۰۰,۰۰۰,۰۰۰' , lprice: '۹۹,۰۰۰,۰۰۰'},
    {img:'./img/tblt1.jpg' , fprice: '۱۰۰,۰۰۰,۰۰۰' , lprice: '۹۹,۰۰۰,۰۰۰'},
    {img:'./img/tblt1.jpg' , fprice: '۱۰۰,۰۰۰,۰۰۰' , lprice: '۹۹,۰۰۰,۰۰۰'},
    {img:'./img/tblt1.jpg' , fprice: '۱۰۰,۰۰۰,۰۰۰' , lprice: '۹۹,۰۰۰,۰۰۰'},
    {img:'./img/tblt1.jpg' , fprice: '۱۰۰,۰۰۰,۰۰۰' , lprice: '۹۹,۰۰۰,۰۰۰'},
    {img:'./img/tblt1.jpg' , fprice: '۱۰۰,۰۰۰,۰۰۰' , lprice: '۹۹,۰۰۰,۰۰۰'},
    {img:'./img/tblt1.jpg' , fprice: '۱۰۰,۰۰۰,۰۰۰' , lprice: '۹۹,۰۰۰,۰۰۰'},
    {img:'./img/tblt1.jpg' , fprice: '۱۰۰,۰۰۰,۰۰۰' , lprice: '۹۹,۰۰۰,۰۰۰'},
    {img:'./img/tblt1.jpg' , fprice: '۱۰۰,۰۰۰,۰۰۰' , lprice: '۹۹,۰۰۰,۰۰۰'},
    {img:'./img/tblt1.jpg' , fprice: '۱۰۰,۰۰۰,۰۰۰' , lprice: '۹۹,۰۰۰,۰۰۰'},
    {img:'./img/tblt1.jpg' , fprice: '۱۰۰,۰۰۰,۰۰۰' , lprice: '۹۹,۰۰۰,۰۰۰'},
  ]}
})

const storySlice = createSlice({
  name: 'storys' ,
  initialState: {newStory : [
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
    {title: "تاس و اینا سبز" , images: "./img/story/6b7291cfebd8483dae414a3c97f99a34.webp"},
    {title: "کلمن تاشو سفری" , images: "./img/story/70ac36f67648ab779d702250fe79e14c07b64b7d_1736534121.jpg"},
    {title: "بهترینای انکر" , images: "./img/story/759f862ecc62e8ef56e33dea4e70048e61bff6f1_1736179672.jpg"},
    {title: "بهترین انتخاب شکارچیان هیولا کریپتد نردی" , images: "./img/story/a28c2d983a6083b050227749e10c2a897561ea4f_1736430376.jpg"},
    {title: "بهترین موس گیمینگ‌های دنیا" , images: "./img/story/a2ff2e1f7a95d96719405d225625dd716b6b3a17_1736315641.jpg"},
    {title: "دلقکای بنفش" , images: "./img/story/bc2ba23a1a044817b33b757bab9c265e.webp"},
    {title: "دوتا بخر یکی ببر سامسونگ آشغال" , images: "./img/story/c9e1510fe340493e997df690ede78e7b.webp"},
    {title: "دزد کت شلواری" , images: "./img/story/e818ef9ec70e471ab4909f174b88e1fe.webp"},
    {title: "ساعت احمقانه" , images: "./img/story/e874f1e0689b63838bd4493ef2c28f614447b0de_1736249196.jpg"},
    {title: "وای داداش کدوم بهتر" , images: "./img/story/ef94f83914c6a2e20eb4a6d9f0fd2f656d79f5fa_1736279465.jpg"},
  ]}
})

const sectionSlice = createSlice({
  name: 'section' ,
  initialState: {sections : [
    {title1: 'موبایل', c1:[{title2:'گوشی چینی',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}], c2:[{title2:'گوشی ارزان',title3:[['آیفون','https://github.com/'],['شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['آیفون','https://google.com']]},{title2:'گوشی آشغال',title3:[['سامسونگ','https://github.com/'],['آیفون','https://google.com'],['آیفون','https://github.com/'],['شیاومی','https://google.com']]}], c3:[{title2:'گوشی خوب',title3:[['سامسونگ','https://github.com/'],['آیفون','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]},{title2:'گوشی ازران',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}], c4:[{title2:'گوشی خیلی گران',title3:[['سامسونگ','google.com'],['آنر','google.com'],['آنر','google.com'],['آیفون','google.com'],['آنر','google.com'],['ناتینگ فون','google.com'],['آنر','google.com'],['آنر','google.com']]},{title2:'گوشی بوقی',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}]},
    {title1: 'کالای دیجیتال',c1:[{title2:'گوشی ارزان',title3:[['1سامسونگ','https://github.com/'],['111شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]},{title2:'گوشی چینی',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}], c2:[{title2:'گوشی ارزان',title3:[['سامسونگ','https://github.com/'],['آیفون','https://google.com'],['آیفون','https://github.com/'],['شیاومی','https://google.com']]},{title2:'گوشی آشغال',title3:[['آیفون','https://github.com/'],['شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['آیفون','https://google.com']]}], c3:[{title2:'گوشی خوب',title3:[['آیفون','https://github.com/'],['شیاومی','https://google.com'],['آیفون','https://github.com/'],['آیفون','https://google.com']]},{title2:'گوشی ازران',title3:[['۱۲','https://github.com/'],['شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}], c4:[{title2:'گوشی خیلی گران',title3:[['آنر','google.com'],['آنر','google.com'],['آنر','google.com'],['سامسونگ','google.com'],['آنر','google.com']]},{title2:'گوشی بوقی',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}]},
    {title1: 'خانه و آشپزخانه',c1:[], c2:[{title2:'گوشی ارزان',title3:[['2سامسونگ','https://github.com/'],['222شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]},{title2:'گوشی آشغال',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}], c3:[{title2:'گوشی خوب',title3:[['آیفون','https://github.com/'],['شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['آیفون','https://google.com']]},{title2:'گوشی ازران',title3:[['سامسونگ','https://github.com/'],['آیفون','https://google.com'],['آیفون','https://github.com/'],['شیاومی','https://google.com']]}], c4:[{title2:'گوشی خیلی گران',title3:[['آیفون','google.com'],['آنر','google.com']]},{title2:'گوشی بوقی',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}]},
    {title1: 'خودرو و موتورسیکلت',c1:[{title2:'گوشی ارزان',title3:[['3سامسونگ','https://github.com/'],['333شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]},{title2:'گوشی چینی',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}], c2:[{title2:'گوشی ارزان',title3:[['سامسونگ','https://github.com/'],['آیفون','https://google.com'],['آیفون','https://github.com/'],['شیاومی','https://google.com']]},{title2:'گوشی آشغال',title3:[['آیفون','https://github.com/'],['شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['آیفون','https://google.com']]}], c3:[{title2:'گوشی خوب',title3:[['آیفون','https://github.com/'],['آیفون','https://google.com'],['آیفون','https://github.com/'],['شیاومی','https://google.com']]},{title2:'گوشی ازران',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}], c4:[{title2:'گوشی خیلی گران',title3:[['سامسونگ','google.com'],['آنر','google.com']]},{title2:'گوشی بوقی',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}]},
    {title1: 'آرایشی بهداشتی',c1:[{title2:'گوشی ارزان',title3:[['4سامسونگ','https://github.com/'],['444شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]},{title2:'گوشی چینی',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}], c2:[{title2:'گوشی ارزان',title3:[['آیفون','https://github.com/'],['شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['آیفون','https://google.com']]},{title2:'گوشی آشغال',title3:[['سامسونگ','https://github.com/'],['آیفون','https://google.com'],['آیفون','https://github.com/'],['شیاومی','https://google.com']]}], c3:[{title2:'گوشی خوب',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['آیفون ۱۵','https://google.com']]},{title2:'گوشی ازران',title3:[['۱۴','https://github.com/'],['شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}], c4:[{title2:'گوشی خیلی گران',title3:[['سامسونگ','google.com'],['آنر','google.com']]},{title2:'گوشی بوقی',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}]},

    {title1: 'لوازم برقی خانگی',c1:[{title2:'گوشی ارزان',title3:[['5سامسونگ','https://github.com/'],['شیاوم555ی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]},{title2:'گوشی چینی',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}], c2:[{title2:'گوشی ارزان',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com'],['آیفون','https://github.com/'],['شیاومی','https://google.com']]},{title2:'گوشی آشغال',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}], c3:[{title2:'گوشی خوب',title3:[['آیفون','https://github.com/'],['شیاومی','https://google.com'],['آیفون','https://github.com/'],['شیاومی','https://google.com']]},{title2:'گوشی ازران',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}], c4:[{title2:'گوشی خیلی گران',title3:[['سامسونگ','google.com'],['آنر','google.com']]},{title2:'گوشی بوقی',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}]},
    {title1: 'ابزار آلات و تجهیزات',c1:[{title2:'گوشی ارزان',title3:[['6سامسونگ','https://github.com/'],['6666شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]},{title2:'گوشی چینی',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}], c2:[{title2:'گوشی ارزان',title3:[['آیفون','https://github.com/'],['آیفون','https://google.com'],['سامسونگ','https://github.com/'],['آیفون','https://google.com']]},{title2:'گوشی آشغال',title3:[['آیفون','https://github.com/'],['آیفون','https://google.com'],['آیفون','https://github.com/'],['آیفون','https://google.com']]}], c3:[{title2:'گوشی خوب',title3:[['سامسونگ','https://github.com/'],['آیفون','https://google.com'],['سامسونگ','https://github.com/'],['آیفون','https://google.com']]},{title2:'گوشی ازران',title3:[['۱۵','https://github.com/'],['شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}], c4:[{title2:'گوشی خیلی گران',title3:[['سامسونگ','google.com'],['آنر','google.com']]},{title2:'گوشی بوقی',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}]},
    {title1: 'مد و پوشاک',c1:[{title2:'گوشی ارزان',title3:[['7سامسونگ','https://github.com/'],['7777شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]},{title2:'گوشی چینی',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}], c2:[{title2:'گوشی ارزان',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com'],['آیفون','https://github.com/'],['شیاومی','https://google.com']]}], c3:[{title2:'گوشی خوب',title3:[['آیفون','https://github.com/'],['شیاومی','https://google.com'],['آیفون','https://github.com/'],['شیاومی','https://google.com']]},{title2:'گوشی ازران',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}], c4:[{title2:'گوشی خیلی گران',title3:[['سامسونگ','google.com'],['آنر','google.com']]},{title2:'گوشی بوقی',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}]},
    {title1: 'طلا و نقره',c1:[{title2:'گوشی ارزان',title3:[['8سامسونگ','https://github.com/'],['888888شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]},{title2:'گوشی چینی',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}], c2:[{title2:'گوشی ارزان',title3:[['آیفون','https://github.com/'],['آیفون','https://google.com'],['سامسونگ','https://github.com/'],['آیفون','https://google.com']]},{title2:'گوشی آشغال',title3:[['آیفون','https://github.com/'],['آیفون','https://google.com'],['آیفون','https://github.com/'],['شیاومی','https://google.com']]}], c3:[{title2:'گوشی خوب',title3:[['سامسونگ','https://github.com/'],['آیفون','https://google.com'],['سامسونگ','https://github.com/'],['آیفون ۱۲','https://google.com']]},{title2:'گوشی ازران',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}], c4:[{title2:'گوشی خیلی گران',title3:[['سامسونگ','google.com'],['آنر','google.com']]},{title2:'گوشی بوقی',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}]},
    {title1: 'تجهیزات پزشکی و سلامت',c1:[{title2:'گوشی ارزان',title3:[['9سامسونگ','https://github.com/'],['99شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]},{title2:'گوشی چینی',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}], c2:[{title2:'گوشی ارزان',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com'],['آیفون','https://github.com/'],['شیاومی','https://google.com']]},{title2:'گوشی آشغال',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['آیفون','https://google.com']]}], c3:[{title2:'گوشی خوب',title3:[['آیفون','https://github.com/'],['شیاومی','https://google.com'],['آیفون','https://github.com/'],['شیاومی','https://google.com']]},{title2:'گوشی ازران',title3:[['سامسونگ','https://github.com/'],['شیاومی','https://google.com'],['سامسونگ','https://github.com/'],['شیاومی','https://google.com']]}], c4:[]},
  ]}
})

export const store = configureStore({reducer: {
  user : userSlice.reducer,
  location : locationSlice.reducer,
  ADiscount : amazingDiscountSlice.reducer,
  categorys : categorySlice.reducer,
  discount : discountSlice.reducer,
  storys : storySlice.reducer,
  section : sectionSlice.reducer,
}})