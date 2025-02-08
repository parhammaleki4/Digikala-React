import React, { Component } from 'react';
const SmallPosters1 = () => {
  return ( <div style={{maxWidth:'1336px',margin:'auto'}}>
    <div style={{width: '100%', display:'inline-flex', margin: '16px 0px'}}>
      <img alt="cheese" src="./img/cheese.webp" style={{borderRadius: '15px', marginRight: '8px', width: 'calc(25% - 12px)'}}/>
      <img alt="advie" src="./img/advie.webp" style={{borderRadius: '15px', margin: '0px 8px', width: 'calc(25% - 12px)'}}/>
      <img alt="kafsh" src="./img/kafsh.webp" style={{borderRadius: '15px', margin: '0px 8px', width: 'calc(25% - 12px)'}}/>
      <img alt="drl" src="./img/drl.webp" style={{borderRadius: '15px', marginLeft: '8px', width: 'calc(25% - 12px)'}}/>
    </div>
  </div> );
}
 
export default SmallPosters1;