import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
import axios from 'axios'

const Login = () => {

  
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const loginUser = async(e)=>{
    console.log(e)
    e.preventDefault()
    try{
      const response = await axios.post("http://localhost:5000/api/login",
      JSON.stringify({ email,password }),
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      }
    );
        console.log('this is woring')
        console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
        // const accessToken = response?.data?.accessToken;
        // const roles = response?.data?.roles;
        // setAuth({ user, pwd, roles, accessToken });
        setEmail('');
        setPassword('');
    }catch(err){
      console.log(err)
    }
  }


  return (
    <div className='login_page'>
      <div className='login_form'>
        <form className='login_box' onSubmit={loginUser}>
          <div className='google_signIn'>
            <input className='google_button' type="submit" value="Sign In With Google" />
          </div>
          <p>-------or--------</p>
          <div className='email_area'>
            <input type="text" value={email} className='email_text' onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
          </div>
          <div className='password_area'>
            <input type="password" value={password} className='password_text' onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
          </div>
          <div className='forget_password'>
            <p ><span><a href="#" style={{size:"0.8rem"}}>forget password?</a></span></p>
          </div>
          <div className='submit_area'>
            <input className='login_button' type="submit" value="Login" />
          </div>
          
          {/* <p style={{fontWeight:""}}>Forget Password? <span><a href="#">password reset</a></span></p> */}
          <p>New User?<span><Link to="/signup">SignUp</Link></span></p>
        </form>
      </div>
    </div>
  )
}

export default Login

// const loginUser = async (e)=>{
//   e.preventDefault()
//   const response = await fetch("http://localhost:5000/api/login/",{
//     method:'POST',
//     headers:{
//       'Content-Type':'application/json',
//     },
//     body:JSON.stringify({
//       email,
//       password
//     })
//   })
//   const data = await response.json()
//   console.log(data)

//   if(data.user){
//     // localStorage.setItem('token')
//     alert("Login successful")
//     window.location.href = '/'
//   }else{
//     alert("Invalid Inforamtion")
//   }
// }



// data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"