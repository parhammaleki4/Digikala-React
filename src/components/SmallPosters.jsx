import React, { Component } from 'react';
const SmallPosters = () => {
  return ( <div style={{maxWidth:'1336px',margin:'auto'}}>
    <div style={{width: '100%', display:'inline-flex', margin: '16px 0px'}}>
      <img alt="camp" src="./img/chador.webp" style={{borderRadius: '15px', marginRight: '8px', width: 'calc(25% - 12px)'}}/>
      <img alt="sandali" src="./img/sandali.webp" style={{borderRadius: '15px', margin: '0px 8px', width: 'calc(25% - 12px)'}}/>
      <img alt="iphone" src="./img/iphone.webp" style={{borderRadius: '15px', margin: '0px 8px', width: 'calc(25% - 12px)'}}/>
      <img alt="207" src="./img/207.webp" style={{borderRadius: '15px', marginLeft: '8px', width: 'calc(25% - 12px)'}}/>
    </div>
  </div> );
}
 
export default SmallPosters;