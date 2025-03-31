import { useState } from "react";
import {logout} from './../Store';
import {useDispatch , useSelector} from 'react-redux';

const User = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state)=> state.user)
  return ( <>
    <div id="name">{selector.userName}</div>
    <ul>
      <li>
        <img src="./img/c1.svg" alt="coin" style={{padding:'0px 4px 0px 20px',width:'21px'}}/>
        <div id="liText">دیجی کلاب</div>
      </li>
      <li>
        <img src="./img/c2.png" alt="coin" style={{padding:'0px 4px 0px 20px',width:'21px'}}/>
        <div id="liText" style={{color:'rgb(192, 194, 197)'}}>پلاس</div>
      </li>
      <li>
        <img src="./img/c3.png" alt="coin" style={{padding:'0px 4px 0px 20px',width:'21px'}}/>
        <div id="liText">سفارش‌ها</div>
      </li>
      <li>
        <img src="./img/c35.png" alt="coin" style={{padding:'0px 4px 0px 20px',width:'21px'}}/>
        <div id="liText">آدرس‌ها</div>
      </li>
      <li>
        <img src="./img/c4.png" alt="coin" style={{padding:'0px 4px 0px 20px',width:'21px'}}/>
        <div id="liText">لیست‌ها</div>
      </li>
      <li>
        <img src="./img/c5.png" alt="coin" style={{padding:'0px 4px 0px 20px',width:'21px'}}/>
        <div id="liText">دیدگاه‌ها و پرسش‌ها</div>
      </li>
      <li>
        <img src="./img/c6.png" alt="coin" style={{padding:'0px 4px 0px 20px',width:'21px'}}/>
        <div id="logout" onClick={()=>dispatch(logout( ))}>خروج از حساب کاربری</div>
      </li>
    </ul>
  </> );
}
export default User;