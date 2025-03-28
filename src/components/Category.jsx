import React, { Component } from 'react';
import { useSelector} from 'react-redux';

const Category = () => {

  const selector = useSelector((state)=> state.categorys)
  let category = selector.categ;
  
  return ( <div style={{maxWidth:'1336px',margin:'auto'}}>

<div>
      <h3 style={{textAlign: 'center', marginBottom: '36px'}}>خرید براساس دسته بندی</h3>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', rowGap:'40px' , justifyContent: 'space-around', alignItems: 'center', margin: '0px 44px', padding: '16px', paddingBottom: '40px'}}>
        {category.map((rec , index)=>(
          <div id="circlediv1">
            <img src={rec.img} alt={rec.title} id="circleimg1"/>
            <a id="circletext1">{rec.title}</a>
          </div>
        ))}
      </div>
      
    </div>

  </div> );
}
 
export default Category;