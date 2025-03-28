import React, { useEffect, useState } from 'react';
import { useSelector} from 'react-redux';

const Discounts = () => {

  const selector = useSelector((state)=> state.categorys)
  let discount = selector.categ;
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => { setWindowWidth(window.innerWidth) };
  useEffect(() => { window.addEventListener('resize', handleResize) });

  return ( <div style={{maxWidth:'1336px',margin:'auto'}}>

    <div id="montakhab">
      <div>
        <div id="haraj">
          <h3>منتخب محصولات تخفیف و حراج</h3>
          <img src="./img/Screenshot 2025-01-14 at 14.05.14.png" alt="icon" style={{width: '25px', margin: '10px'}}/>
        </div>
      </div>
      <div id='discountStuff'>
        {discount.map((rec,index)=>(
          <div style={{padding: '12px 8px', backgroundColor:'white',borderBottomRightRadius: (index === 17 && windowWidth > 1350) ? '15px':'0px'}}>
            <img src={rec.img} alt="tblt" width='100%'/>
            <div>
              <div width='100%' style={{display: 'flex', alignItems: 'center',justifyContent:'space-between'}}>
                <div>
                  <img src="./img/toman.png" alt="toman" width="15px"/>
                  <b>{rec.lprice}</b>
                </div>
                <a id="darsadtakhfif3">۷۸٪</a>
              </div>
              <div style={{color: 'rgb(192, 194, 197)', paddingLeft: '20px', alignItems:'left' , textAlign:'left',justifyContent:'left'}}>
                <s>
                  {rec.fprice}
                </s>
              </div>
            </div>
          </div>
        ))}
        {windowWidth <= 1350 ? (
          <div style={{width:'200.5%',height:'100%',backgroundColor:'white'}}></div>):(<></>)
        }
      </div>
    </div>

  </div> );
}
 
export default Discounts;