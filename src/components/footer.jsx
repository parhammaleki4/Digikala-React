import React, { Component, useState } from 'react';
const Footer = () => {

  const [isHidden , sethidden] = useState(1);
  const more = () => {sethidden(0)};
  const less = () => {sethidden(1)};

  return ( <>
  <footer id="footer">
    <div style={{padding: '0px 20px'}}>
      <div id="footer1">
        <button id="bazgasht">
          <img src="./img/uparrow.png" alt="up" width="15px"/>
          <a href="#" style={{color: 'rgb(161, 163, 168)', fontSize: '12px', marginLeft: '8px', textDecoration: 'none'}}>
            بازگشت به بالا
          </a>
        </button>
        <img src="./img/logoDigikala.jpg" style={{marginLeft: '16px', width: '195px', height: '30px'}}/>
      </div>
      <div id="footer2">
        <p>هفت روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
        <div style={{padding: '0px 20px', color: 'rgb(161, 163, 168)'}}>|</div>
        <p>۰۲۱-۹۱۰۰۰۱۰۰</p>
        <div style={{padding: '0px 20px', color: 'rgb(161, 163, 168)'}}>|</div>
        <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
      </div>
      <div id="footer3">
        <a style={{padding: '12px 0px', display: 'flex', flexDirection: 'column'}}>
          <div style={{textAlign: 'center'}}><img src="./img/original-products.svg" alt="original-products"/></div>
          <p style={{textAlign: 'center', color: 'rgb(63, 64, 100)'}}>ضمانت اصل بودن کالا</p>
        </a>
        <a style={{padding: '12px 0px', display: 'flex', flexDirection: 'column'}}>
          <div style={{textAlign: 'center'}}><img src="./img/days-return.svg" alt="days-return."/></div>
          <p style={{textAlign: 'center', color: 'rgb(63, 64, 100)'}}>هفت روز ضمانت بازگشت کالا</p>
        </a>
        <a style={{padding: '12px 0px', display: 'flex', flexDirection: 'column'}}>
          <div style={{textAlign: 'center'}}><img src="./img/support.svg" alt="support"/></div>
          <p style={{textAlign: 'center', color: 'rgb(63, 64, 100)'}}>هفت روز هفته، ۲۴ ساعته</p>
        </a>
        <a style={{padding: '12px 0px', display: 'flex', flexDirection: 'column'}}>
          <div style={{textAlign: 'center'}}><img src="./img/cash-on-delivery.svg" alt="cash-on-delivery"/></div>
          <p style={{textAlign: 'center', color: 'rgb(63, 64, 100)'}}>امکان پرداخت در محل</p>
        </a>
        <a style={{padding: '12px 0px', display: 'flex', flexDirection: 'column'}}>
          <div style={{textAlign: 'center'}}><img src="./img/express-delivery.svg" alt="express-delivery"/></div>
          <p style={{textAlign: 'center', color: 'rgb(63, 64, 100)'}}>امکان تحویل اکسپرس</p>
        </a>
      </div>
      <div id="footer4">
        <div id="divfooter">
          <h4 style={{marginBottom: '12x', marginTop: '0px', color: 'rgb(63, 64, 100)', display: 'block'}}>همراه ما باشید!</h4>
          <div style={{display: 'flex', justifyContent: 'end', alignItems: 'center'}}>
            <a>
              <img src="./img/aparat.png" alt="aparat" style={{marginLeft: '32px', width: '40px'}}/>
            </a>
            <a>
              <img src="./img/linkdin.png" alt="linkdin" style={{marginLeft: '32px', width: '40px'}}/>
            </a>
            <a>
              <img src="./img/x.png" alt="x" style={{marginLeft: '32px', width: '40px'}}/>
            </a>
            <a>
              <img src="./img/insta.png" alt="instagram" style={{marginLeft: '32px', width: '40px'}}/>
            </a>
          </div>
          <div style={{marginTop: '32px'}}>
            <h4 style={{marginBottom: '12x', marginTop: '0px', color: 'rgb(63, 64, 100)', display: 'block'}}>با ثبت ایمیل، از جدیدترین تخفیف‌ها باخبر شوید</h4>
            <div>
              <form style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <button id="sabt">
                  <div style={{color: 'white'}}>
                    ثبت
                  </div>
                </button>
                <input type="email" id="emailbar" placeholder="ایمیل شما"/>
              </form>
            </div>
          </div>
        </div>
        <div id="divfooter">
          <b id="titelfooter">راهنمای خرید از دیجی‌کالا</b>
          <a id="textfooter">نحوه ثبت سفارش</a>
          <a id="textfooter">رویه ارسال سفارش</a>
          <a id="textfooter">شیوه‌های پرداخت</a>
        </div>
        <div id="divfooter">
          <b id="titelfooter">خدمات مشتریان</b>
          <a id="textfooter">پاسخ به پرسش‌های متداول</a>
          <a id="textfooter">رویه‌های بازگرداندن کالا</a>
          <a id="textfooter">شرایط استفاده</a>
          <a id="textfooter">حریم خصوصی</a>
          <a id="textfooter">گزارش باگ</a>
        </div>
        <div id="divfooter">
          <b id="titelfooter">با دیجی‌کالا</b>
          <a id="textfooter">اتاق خبر دیجی‌کالا</a>
          <a id="textfooter">فروش در دیجی‌کالا</a>
          <a id="textfooter">فرصت‌های شفلی</a>
          <a id="textfooter">گزارش تخلف در دیجی‌کالا</a>
          <a id="textfooter">تماس با دیجی‌کالا</a>
          <a id="textfooter">درباره دیجی‌کالا</a>
        </div>
      </div>
      <div id="footer5">
        <div>
          <img src="./img/moreee.svg" alt="moreee.svg" style={{height: '44px', margin: '8px 16px 8px 0px', backgroundColor: 'rgb(255, 255, 255)'}}/>
          <img src="./img/sipapp.svg" alt="sipapp.svg" style={{height: '44px', margin: '8px'}}/>
          <img src="./img/miket.svg" alt="miket.svg" style={{height: '44px', margin: '8px'}}/>
          <img src="./img/coffe-bazzar.svg" alt="coffe-bazzar.svg" style={{height: '44px', margin: '8px'}}/>
        </div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <h3 style={{color: 'rgb(255, 255, 255)', marginRight: '16px'}}>دانلود اپلیکیشن دیجی‌کالا</h3>
          <img src="./img/digikalaicon.webp" alt="digikala-icon" style={{width: '44px', height: '44px', display: 'block'}}/>
        </div>
      </div>
      <div id="footer6">
        <div style={{display:'flex'}}>
          <div><img src="./img/rezi.webp" style={{width: '75px', height: '75px', marginRight: '8px', border: '1px solid rgb(224, 224, 226)', borderRadius: '10px', padding: '16px'}}/></div>
          <div><img src="./img/kasbokar.webp" style={{width: '75px', height: '75px', marginRight: '8px', border: '1px solid rgb(224, 224, 226)', borderRadius: '10px', padding: '16px'}}/></div>
          <div><img src="./img/namad.png" style={{width: '75px', height: '75px', marginRight: '8px', border: '1px solid rgb(224, 224, 226)', borderRadius: '10px', padding: '16px'}}/></div>
        </div>
        <div id='footerDiscription' dir='rtl'>
          <h1 style={{color: 'rgb(98, 102, 109)', textAlign: 'right',fontSize:'21px'}}>فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین</h1>
          <div style={isHidden ? 
            {textAlign:'right',color:'rgb(129, 133, 139)',fontSize:'12px',maxWidth:'1000px',lineClamp:'3',WebkitLineClamp:'3',overflow:'hidden',display:'-webkit-box',WebkitBoxOrient:'vertical'} : 
            {textAlign:'right',color:'rgb(129, 133, 139)',fontSize:'12px',maxWidth:'1000px'}}>
            <p>یک<strong> خرید</strong> اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.<br></br>
            یکی از مهم‌ترین دغدغه‌های کاربران دیجی‌کالا یا هر فروشگاه‌ اینترنتی دیگری، این است که کالای خریداری شده چه زمانی به دستشان می‌رسد. دیجی‌کالا شیوه‌های مختلفی از ارسال را متناسب با فروشنده کالا،‌ مقصد کالا و همچنین نوع کالا در اختیار کاربران خود قرار می‌دهد. هر یک&nbsp;از روش های ارسال دیجی کالا شرایط و ویژگی‌های خاص خود را دارند که ممکن است گاهی برای کاربران جدید، مبهم و پیچیده به نظر برسند. برای آگاهی بیشتر مشتریان از خدمات دیجی‌کالا، این فروشگاه اینترنتی در بخشی از وب‌سایت خود راهنمای کاملی از شیوه‌‌های ارسال را به صورت ساده و به دور از پیچیدگی، قرار داده است که شامل 8 نوع ارسال کالا به روش‌های زیر است: ارسال امروز، دریافت حضوری، دریافت از گنجه، ارسال توسط فروشنده، ارسال عادی، ارسال کالاهای بزرگ، سنگین و فوق سنگین، ارسال سریع سوپرمارکتی، ارسال با پست</p>
            <p>کدام محصولات در دیجی‌کالا قابل سفارش هستند؟</p>
            <p>تقریبا می‌توان گفت محصولی وجود ندارد که دیجی‌کالا برای مشتریان خود در سراسر کشور فراهم نکرده باشد. شما می‌توانید در تمامی روزهای هفته و تمامی شبانه روز&nbsp;دیجی‌کالا که محصولات دارای تخفیف عالی می‌شوند، سفارش خود را به سادگی ثبت کرده و در روز و محدوده زمانی مناسب خود، درب منزل تحویل بگیرید. بعضی از گروه‌های اصلی و زیر مجموعه‌های پرطرفدار محصولات دیجی‌کالا شامل مواردی می‌شود که در ادامه به معرفی آن‌ها می‌پردازیم که&nbsp;امکان <strong>ارسال امروز</strong> برای آن ها وجود دارد.&nbsp;</p>
            <p>دیجی کالا در جشنواره‌های سالیانه خود به طور معمول روی تمام دسته بندی‌های کالایی تخفیف‌های عالی قرار‌می‌دهد. به عنوان مثال در زمان <a href="https://www.digikala.com/landing/black-friday/">بلک فرایدی</a> یا حراج جمعه سیاه، در این سال‌ها بیشترین درصد تخفیف در اختیار مشتریان دیجی‌کالا قرار گرفته‌است و شامل دسته بندی های مختلف از موبایل و لپ تاپ تا عطر و لباس و حتی غذای حیوانات خانگی بوده‌است.&nbsp;</p>
            <p>کالای دیجیتال</p>
            <p>انواع گوشی موبایل از برندهای مختلفی مثل آیفون، &nbsp;<a href="https://www.digikala.com/search/category-mobile-phone/samsung/" target="_blank">گوشی سامسونگ</a>،&nbsp;<a href="https://www.digikala.com/search/category-mobile-phone/nokia/" target="_blank">گوشی نوکیا</a>،&nbsp;<a href="https://www.digikala.com/search/category-mobile-phone/xiaomi/" target="_blank">گوشی شیائومی</a>،&nbsp;<a href="https://www.digikala.com/search/category-mobile-phone/huawei/" target="_blank">گوشی هواوی</a>، و...، انواع کنسول بازی ps4 و ps5، انواع تبلت‌های پرطرفدار مثل&nbsp;<a href="https://www.digikala.com/search/category-tablet/samsung/" target="_blank">تبلت سامسونگ</a>&nbsp;نوت 10، انواع هندزفری مثل&nbsp;<a href="https://www.digikala.com/search/category-headphone/" target="_blank">هندزفری بی سیم</a>،&nbsp;<a href="https://www.digikala.com/search/category-tv2/" target="_blank">تلوزیون</a>&nbsp;از برندهای مختلف مثل تلویزیون سامسونگ، سونی و...، انواع مانیتور، کیس، کیبورد، مودم از برندهای مختلف مثل&nbsp;مودم ایرانسل،&nbsp;آنتن&nbsp;و ... تنها بخشی از محصولاتی هستند که زیر مجموعه کالای دیجیتال در دیجی‌کالا قرار دارند.</p>
            <p>خودرو، ابزار و تجهیزات صنعتی</p>
            <p>انواع خودروهای ایرانی و خارجی از برندهای مطرحی مثل هوندا، کیا و...، موتور سیکلت از برندهایی مثل کویر موتور و...، لوازم جانبی خودرو مثل سیستم صوتی تصویر، ضبط و...، لوازم یدکی مثل دیسک و صفحه کلاج و... و لوازم مصرفی خودرو مثل&nbsp;کفپوش سانا&nbsp;در این گروه قرار می‌گیرند.</p>
            <p>مد و پوشاک</p>
            <p>محصولاتی مثل انواع لباس مثل لباس مجلسی زنانه و مردانه، لباس راحتی، لباس ورزشی، اکسسوری، کیف، کفش، عینک آفتابی، لباس زیر، شال و روسری و... جزو مواردی هستند که می‌توانید آن‌ها را از برندهای مطرح ایرانی و خارجی موجود در دیجی کالا مثل آدیداس، نایکی، دبنهامز، آلدو، درسا و... خریداری کنید.</p>
            <p>اسباب بازی کودک و نوزاد</p>
            <p>در این دسته از کالاهای دیجی‌کالا، انواع لوازم بهداشتی و حمام کودک و نوزاد، انواع پوشاک و کفش،&nbsp;<a href="https://www.digikala.com/search/category-tablet/" target="_blank">تبلت</a>،&nbsp;<a href="https://www.digikala.com/search/category-toys/" target="_blank">اسباب‌بازی</a>، لوازم اتاق خواب کودک، لوازم ایمنی، لوازم شخصی و غذا خوری و ... قرار می‌گیرد تا خرید را برای پدر و مادرها به کاری سریع و آسان تبدیل کند.</p>
            <p>کالاهای سوپر مارکتی</p>
            <p>هر چیزی از مواد خوراکی که به آن نیاز دارید، در&nbsp;<a href="https://www.digikala.com/main/food-beverage/" target="_blank">سوپرمارکت</a>&nbsp;دیجی‌کالا پیدا می‌شود، محصولات پرطرفداری مثل&nbsp;کره بادام‌زمینی،&nbsp;عسل،&nbsp;سس،&nbsp;قهوه،&nbsp;زعفران، شکلات، انواع نان و ... از برندهای معتبر و معروفی مثل&nbsp;نستله، نوتلا، استارباکس، مزمز، چی توز و ... همگی در اختیار شما هستند و تا رسیدن به آشپزخانه شما تنها چند کلیک فاصله دارند.</p>
            <p>زیبایی و سلامت</p>
            <p>انواع لوازم آرایش مثل لاک، رنگ مو، لوازم آرایش لب، چشم، صورت و... همگی در دیجی‌کالا موجود هستند. همچنین محصولات بهداشتی مثل انواع شامپو، <a href="https://www.digikala.com/search/category-sunscreen-cream/">کرم ضد آفتاب</a>،&nbsp;ماسک صورت، ضد تعریق،&nbsp;ماسک مو&nbsp; و...، انواع لوازم شخصی برقی، ست هدیه، بهترین انواع عطر و اسپری، <a href="https://www.digikala.com/search/category-foundation/">کرم پودر</a>، ریمل و رژلب وانواع زیورآلات طلا و نقره مثل&nbsp;سرویس طلا، سرویس نقره و... به همراه وسایل مراقبت شخصی طبی در گروه زیبایی و سلامت دیجی‌کالا قرار می‌گیرد. در این بخش برندهای مطرحی مثل اسنس، پنبه ریز، سینره و... حضور دارند.همچنین میتوانید انواع مکمل غذایی و دارویی مثل داروی مناسب <a href="https://www.digikala.com/landing/common-cold/">سرماخوردگی</a> را در دیجی کالا تهیه کنید.</p>
            <p>خانه و آشپزخانه</p>
            <p>یکی از متنوع‌ترین بخش‌های دیجی‌کالا، بخش لوازم خانه و آشپزخانه است که از محصولاتی مثل صندلی گیمینگ در بخش صندلی‌ها گرفته تا انواع&nbsp;مبل راحتی، انواع آبگرمکن مثل&nbsp;آبگرمکن بوتان، لباسشویی‌های متنوع مثل انواع&nbsp;لباسشویی اسنوا، شیرآلات مختلف مثل شیرآلات قهرمان و...، ظروف و همچنین لوازم برقی آشپزخانه مثل توستر و... را شامل می‌شود و امکان خریدی عالی را برای مشتریان فراهم کرده است. در بخش لوازم خانگی دیجی‌کالا، برندهای معتبری مثل تفال، اخوان، فیلیپس، ال جی، اسنوا، جی پلاس و... حضور دارند.</p>
            <p>کتاب، لوازم تحریر و هنر</p>
            <p>بخش هنر، کتاب، رمان و لوازم تحریر دیجی‌کالا نیز یکی از متنوع‌ترین بخش‌های این فروشگاه اینترنتی است. انواع کتاب و مجله، کتاب زبان، بازی، لوازم تحریر با طرح‌های مختلف مانند دختر کفشدوزکی، سازهایی مثل&nbsp;پیانو،&nbsp;سنتور،&nbsp;هنگ درام&nbsp; و... با بهترین قیمت‌ها و از بهترین برندها در دسترس شما قرار دارند.</p>
            <p>ورزش و سفر</p>
            <p>هر نوع وسیله و لباس ورزشی که فکرش را کنید، انواع وسایل کمپینگ و کوهنوردی، ساک و قمقمه ورزشی و وسایل سفر اربعین و... در این بخش قرار می‌گیرند. همچنین شما می‌توانید وسایل مد نظر خود را بر اساس نوع ورزش (آبی، هوازی، بدنسازی و...) در دسته‌بندی‌های دیجی‌کالا پیدا کنید.</p>
            <p>محصولات بومی و محلی</p>
            <p>و در آخر دیجی‌کالا از طریق به فروش رساندن محصولات بومی و سنتی متفاوتی مثل انواع خوراکی، گلیم و گبه، ابزار و ... تلاش کرده تا بین هنر ایرانی و متقاضیان آن کوتاه‌ترین راه را پیدا کند. در این بخش شما می‌توانید انواع محصولات از جمله ظروف زیبای مخصوص به&nbsp;سفره هفت‌سین&nbsp; و پذیرایی از مهمانان در روزهای&nbsp;نوروز، انواع آیینه و شمعدان و هر آن چیزی را که برای خلق زیبایی در روزهای بهاری به آن نیاز دارید، با قیمت مناسب و تنوع بسیار بالا انتخاب کنید. همچنین در صفحه <strong>برچسب ها</strong>، امکان مشاهده و خرید انواع محصولات با طرح های بومی وجود دارد.&nbsp;&nbsp;دیجی‌کالا همچنین برای اینکه حال و هوای عید را به اعضای خود هدیه کند،&nbsp;تقویم ۱۴۰۱، انواع ایده&nbsp;عکس پروفایل عید نوروز،&nbsp;آهنگ‌های عید نوروز&nbsp;و موزیک‌های شاد بهاری، وسایل مربوط به&nbsp;خانه‌تکانیی و&nbsp;انواع لباس های عید&nbsp; را برای شما فراهم کرده است تا بتوانید در کنار خرید خود، از این حال و هوای تازه نهایت لذت را ببرید.</p>
            <p>&nbsp;</p>
          </div>
          <div>
            {
              isHidden ? (
                <a style={{fontSize:'12px',justifyContent:'right',display:'flex',marginTop:'10px'}} onClick={more}>
                  <b>مشاهده بیشتر &gt;</b>
                </a>
               ) : (
                <a style={{fontSize:'12px',justifyContent:'right',display:'flex'}} onClick={less}>
                  <b>بستن &gt;</b>
                </a>
               )
            }
          </div>
        </div>
      </div>
      <div id="footer7">
        <div style={{padding: '32px 0px', color: 'rgb(129, 133, 139)', textAlign: 'center'}}>
          برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است
        </div>
      </div>
    </div>
    <div id="lastfooter">
      <a id="lastfimg"><img src="./img/diginext.svg" alt="digithings" width="79px"/></a>
      <a id="lastfimg"><img src="./img/digiMehr.svg" alt="digithings" width="79px"/></a>
      <a id="lastfimg"><img src="./img/jet.svg" alt="digithings" width="79px"/></a>
      <a id="lastfimg"><img src="./img/digiclub.svg" alt="digithings" width="79px"/></a>
      <a id="lastfimg"><img src="./img/digiplus.svg" alt="digithings" width="79px"/></a>
      <a id="lastfimg"><img src="./img/digistyle.svg" alt="digithings" width="79px"/></a>
      <a id="lastfimg"><img src="./img/digimag.svg" alt="digithings" width="79px"/></a>
      <a id="lastfimg"><img src="./img/digikala-service.svg" alt="digithings" width="79px"/></a>
      <a id="lastfimg"><img src="./img/digikala-business.svg" alt="digithings"width="79px"/></a>
      <a id="lastfimg"><img src="./img/smartech.svg" alt="digithings" width="79px"/></a>
      <a id="lastfimg"><img src="./img/digify.svg" alt="digithings" width="79px"/></a>
      <a id="lastfimg"><img src="./img/ganjeh.svg" alt="digithings" width="79px"/></a>
      <a id="lastfimg"><img src="./img/digiexpress.svg" alt="digithings" width="79px"/></a>
      <a id="lastfimg"><img src="./img/digipay.svg" alt="digithings" width="79px"/></a>
    </div>
  </footer>

  </> );
}
 
export default Footer;