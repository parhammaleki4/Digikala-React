import React, { useState } from 'react';
import './sections.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
//import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useSelector} from 'react-redux';

import {FaLaptop,FaMobileAlt,FaTools,FaTshirt,FaSketch,FaCarAlt,FaCouch,FaHeart,FaTv,FaPumpMedical,FaRegWindowMinimize,FaAngleLeft} from "react-icons/fa";

const Sections = () => {
  
  const icons = [<FaMobileAlt/>,<FaLaptop/>,<FaCouch/>,<FaCarAlt/>,<FaHeart/>,<FaTv/>,<FaTools/>,<FaTshirt/>,<FaSketch/>,<FaPumpMedical/>,]
    
  const selector = useSelector((state)=> state.section)
  let daste = selector.sections;
 
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

  return ( <div style={{backgroundColor:'Highlight',WebkitBackdropFilter:'grey'}}>
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
  ))}</div> );
}
 
export default Sections;