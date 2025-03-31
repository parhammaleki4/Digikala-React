import { useState } from "react";
import {login} from './../Store';
import {useDispatch , useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

const Login = () => {
  const [newUser,setNewUser] = useState('');
  const dispatch = useDispatch();
  const selector = useSelector((state)=> state.user)
  return (
    <div id="maindiv">
      <div id="insidediv">
        <div>
          <img src="./img/dg.svg" alt="dg" style={{width:'105px',marginBottom:'12px'}}/>
        </div>
          <div style={{color:'rgb(63, 64, 100)',direction:'rtl',display:'flex',flexDirection:'column'}}>
            <b style={{display:'flex',justifyContent:'right',marginTop:'16px',fontSize:'19px'}}>
            ورود {selector.userName}
            </b>
            <p style={{display:'flex',justifyContent:'right',margin:'16px 0px 4px 0px',fontSize:'12px'}}>
            سلام
            </p>
            <p style={{display:'flex',justifyContent:'right',margin:'4px 0px 16px 0px',fontSize:'12px'}}>
            لطفا نام و نام‌خانوادگی خود را وارد کنید
            </p>
          </div>
        <input id="logininput" onChange={(event)=>{setNewUser(event.target.value)}}/>
        <Link to="./back" id="btm" onClick={()=>dispatch(login( {userName: newUser} ))}><b>ورود</b></Link>
        <p style={{display:'flex',justifyContent:'right',margin:'16px 0px 0px 0px',fontSize:'11px',textAlign:'right'}}>
        ورود شما به معنای پذیرش شرایط دیجی‌کالا و قوانین حریم‌ خصوصی است
        </p>
      </div>
    </div> );
}
 
export default Login;