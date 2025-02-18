import React, { useState } from 'react';
import './sections.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
//import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {FaLaptop,FaMobileAlt,FaTools,FaTshirt,FaSketch,FaCarAlt,FaCouch,FaHeart,FaTv,FaPumpMedical,FaRegWindowMinimize,FaAngleLeft} from "react-icons/fa";

const Sections = () => {
  
  const icons = [<FaMobileAlt/>,<FaLaptop/>,<FaCouch/>,<FaCarAlt/>,<FaHeart/>,<FaTv/>,<FaTools/>,<FaTshirt/>,<FaSketch/>,<FaPumpMedical/>,]
  const daste = [
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
  ]
 
  const [windo,setWindo] = useState(0);
  const [styleWindo,setStyleWindo] = useState([
    {display:'flex',alignItems:'center',backgroundColor:'white',color:' rgb(239, 57, 78)'},
    {display:'flex',alignItems:'center',backgroundColor:'#ecedef'},
    {display:'flex',alignItems:'center',backgroundColor:'#ecedef'},
    {display:'flex',alignItems:'center',backgroundColor:'#ecedef'},
    {display:'flex',alignItems:'center',backgroundColor:'#ecedef'},
    {display:'flex',alignItems:'center',backgroundColor:'#ecedef'},
    {display:'flex',alignItems:'center',backgroundColor:'#ecedef'},
    {display:'flex',alignItems:'center',backgroundColor:'#ecedef'},
    {display:'flex',alignItems:'center',backgroundColor:'#ecedef'},
    {display:'flex',alignItems:'center',backgroundColor:'#ecedef'},
  ]);
  const updateMenu1 = (i) => {
    setWindo(i); 
    styleWindo.splice(i,1)
    styleWindo.splice(i,0,{display:'flex',alignItems:'center',backgroundColor:'white',color:' rgb(239, 57, 78)'})
  }
  const updateMenu2 = (i) => {
    styleWindo.splice(i,1)
    styleWindo.splice(i,0,{display:'flex',alignItems:'center',backgroundColor:'#ecedef'})
  }

  return ( <>
    {daste.map((rec, index) => (
      <div>
        <nav>
          <div style={styleWindo[index]} onMouseEnter={(()=>{updateMenu1(index)})} onMouseLeave={(()=>{updateMenu2(index)})}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'end',width:'100%',height:'50px'}}>
              {rec.title1}
            </div>
            <div style={{margin:'0px 8px'}}>
              {icons[index]}
            </div>
          </div>
        </nav>
        <div id='dasteha1'>
          <div style={{display:'flex',justifyContent:'right',alignItems:'center',margin:'20px'}}>
            <FaAngleLeft style={{color:'rgb(25, 191, 211)',textAlign:'right',fontSize:'12px'}}/>
            <div style={{color:'rgb(0, 142, 178)',textAlign:'right',fontSize:'14px',marginLeft:'10px'}}>همه محصولات {daste[windo].title1}</div>
          </div>
          <div style={{display:'flex',justifyContent:'right'}}>
            <div>
              {daste[windo].c1.map((r,i)=>(
              <div style={{display:'flex',justifyContent:'end',textAlign:'right'}}>
                <div style={{width:'190px',padding:'20px',display:'flex',justifyContent:'right'}}>
                  <div>
                    <div style={{display:'flex',justifyContent:'end',alignItems:'center',marginBottom:'15px'}}>
                      <div>{r.title2}</div>
                      <FaRegWindowMinimize style={{rotate:'270deg',color:'red'}}/>
                    </div>
                    <div>{r.title3.map((re)=>(
                      <a href={re[1]} style={{color:'rgb(129, 133, 139)'}}>
                        {re[0]}<br></br>
                      </a>
                    ))}</div>
                  </div>
                </div>
              </div>
              ))}
            </div>
            <div>
              {daste[windo].c2.map((r,i)=>(
              <div style={{display:'flex',justifyContent:'end',textAlign:'right'}}>
                <div style={{width:'190px',padding:'20px',display:'flex',justifyContent:'right'}}>
                  <div>
                    <div style={{display:'flex',justifyContent:'end',alignItems:'center',marginBottom:'15px'}}>
                      <div>{r.title2}</div>
                      <FaRegWindowMinimize style={{rotate:'270deg',color:'red'}}/>
                    </div>
                    <div>{r.title3.map((re)=>(
                      <a href={re[1]} style={{color:'rgb(129, 133, 139)'}}>
                        {re[0]}<br></br>
                      </a>
                    ))}</div>
                  </div>
                </div>
              </div>
              ))}
            </div>
            <div>
              {daste[windo].c3.map((r,i)=>(
              <div style={{display:'flex',justifyContent:'end',textAlign:'right'}}>
                <div style={{width:'190px',padding:'20px',display:'flex',justifyContent:'right'}}>
                  <div>
                    <div style={{display:'flex',justifyContent:'end',alignItems:'center',marginBottom:'15px'}}>
                      <div>{r.title2}</div>
                      <FaRegWindowMinimize style={{rotate:'270deg',color:'red'}}/>
                    </div>
                    <div>{r.title3.map((re)=>(
                      <a href={re[1]} style={{color:'rgb(129, 133, 139)'}}>
                        {re[0]}<br></br>
                      </a>
                    ))}</div>
                  </div>
                </div>
              </div>
              ))}
            </div>
            <div>
              {daste[windo].c4.map((r,i)=>(
              <div style={{display:'flex',justifyContent:'end',textAlign:'right'}}>
                <div style={{width:'190px',padding:'20px',display:'flex',justifyContent:'right'}}>
                  <div>
                    <div style={{display:'flex',justifyContent:'end',alignItems:'center',marginBottom:'15px'}}>
                      <div>{r.title2}</div>
                      <FaRegWindowMinimize style={{rotate:'270deg',color:'red'}}/>
                    </div>
                    <div>{r.title3.map((re,m)=>(
                      <a href={re[1]} style={{color:'rgb(129, 133, 139)'}}>
                        {re[0]}<br></br>
                      </a>
                    ))}</div>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  ))}</> );
}
 
export default Sections;