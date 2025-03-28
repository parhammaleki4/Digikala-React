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

export const store = configureStore({reducer: {
  user : userSlice.reducer,
  location : locationSlice.reducer,
  ADiscount : amazingDiscountSlice.reducer,
  categorys : categorySlice.reducer,
  discount : discountSlice.reducer,
}})