import React, { useState } from 'react';
import './index.css';
import './navbar.css'
import Sections from './sections';

const Navbar = () => {
  const location = {
    province: 'تهران',
    city: 'تهران'
  };
  const loggin = 1;
  
  const [dasteha,setdasteha] = useState("hidden");
  const [isMenuClicked,setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if(!isMenuClicked) {
      setdasteha("visible")
    }
    else {
      setdasteha("hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <div>
      <div style={{ position: 'fixed', backgroundColor: 'hsl(0, 0%, 100%)', zIndex: 1000, top: 0 , width:'100%' }}>
        <img src="./img/header.jpg" alt="header gold seller" id="goldseller" />
        <div id="contaner1">
          <div id="contaner2">
            <a href="#">
              <img src="./img/Screenshot 2025-01-11 at 12.49.37.png" alt="shopping cart" width="25" style={{marginLeft: '22px'}} />
            </a>
            <span style={{margin: '0px 12px 0px 22px',borderLeft: '1px solid  rgb(224, 224, 226)',height:'24px'}}></span>
            {loggin ? (
              <div style={{display:'flex',alignItems:'center'}}>
                <a href="#">
                  <img src="./img/Screenshot 2025-01-11 at 12.57.36.png" alt="person" width="65" />
                </a>
                <a href="#">
                  <img src="./img/Screenshot 2025-01-11 at 12.51.27.png" alt="ring bell" height="25" style={{ margin: '12px' }} />
                </a>
              </div>
              ):(
                <button style={{height:'40px',backgroundColor:'white',border:'1px solid rgb(224, 224, 226)',
                  borderRadius:'5px',alignItems:'center',display:'flex',width:'134px',justifyContent:'center'
                }}>
                  <b>ورود | ثبت‌نام</b>
                  <img src='./img/login.png' width={24} style={{marginLeft:'8px'}}/>
                </button>
              )}
          </div>
          <div id="contaner2">
            <div className="input-icon">
              <input type="search" id="searchbar" name="search" placeholder="جستجو" />
              <i className="fa fa-search" style={{ color: '#7a7a7a' }}></i>
            </div>
            <a href="http://localhost:3000/">
              <img src="./img/full-horizontal.svg" alt="digikala" style={{ margin: '12.5px', width: '200px' }} />
            </a>
          </div>
        </div>
        <div>
          <div id="contaner3">
            <div id="contaner4">
              <div id="header">ارسال به {location.province}، {location.city}</div>
              <img src="./img/Screenshot 2025-01-12 at 0.16.19.png" alt="loc" style={{ height: '20px', paddingLeft: '16px' }} />
            </div>
            <div id="contaner5">
              <a>
              <div id="header">!در دیجی‌کالا بفروشید</div>
              </a>
              <a>
              <div id="header" style={{ paddingRight: '16px' }}>سوالی دارید؟</div>
              </a>
              <a>
              <div id="header" style={{ borderLeft: '1px solid #d6d6d6' }}>تخفیف‌ها و پیشنهاد‌ها</div>
              </a>
              <a>
              <img id="headerimg" src="./img/Screenshot 2025-01-12 at 0.15.41.png" alt="menu" />
              </a>
              <div id="header">پرفروش‌ترین‌ها</div>
              <a>
              <img id="headerimg" src="./img/Screenshot 2025-01-12 at 0.15.24.png" alt="menu" />
              </a>
              <div id="header">طلای دیجیتال</div>
              <a>
              <img id="headerimg" src="./img/Screenshot 2025-01-12 at 0.14.54.png" alt="menu" />
              </a>
              <div id="header">سوپرمارکت</div>
              <a>
              <img id="headerimg" src="./img/Screenshot 2025-01-12 at 0.14.26.png" alt="menu" />
              </a>
              <div id="header">شگفت‌انگیز‌ها</div>
              <a>
              <img id="headerimg" src="./img/Screenshot 2025-01-12 at 0.13.55.png" alt="menu" />
              </a>
              <div onMouseLeave={updateMenu} onMouseEnter={updateMenu}>
                <nav>
                  <div style={{display:'flex',alignItems:'center'}} >
                    <div id="header" style={{ borderLeft: '1px solid #d6d6d6', color: 'black' }}><b>دسته‌بندی کالا‌ها</b></div>
                    <img id="headerimg" src="./img/Screenshot 2025-01-11 at 23.37.38.png" alt="menu"/>
                  </div>
                </nav>
                <div className={dasteha} id='dasteha'>
                  <Sections/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#ffffff', height: '184px' }}></div>
    </div>
  );
};

export default Navbar;