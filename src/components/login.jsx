import { useState } from "react";
import {login,logout} from './../Store';
import {useDispatch , useSelector} from 'react-redux';

const Login = () => {
  const [newUser,setNewUser] = useState('');
  const dispatch = useDispatch();
  const selector = useSelector((state)=> state.user)
  return ( <>
    <div>
      <h1 style={{marginTop:'35px'}}>login {selector.userName}</h1>
      <input style={{marginTop:'5px'}} onChange={(event)=>{setNewUser(event.target.value)}}/><br></br>
      <button id="btm" onClick={()=>dispatch(login( {userName: newUser} ))}>login</button>
      <button id="btm" onClick={()=>dispatch(logout( ))}>logout</button>
    </div>
  </> );
}
 
export default Login;