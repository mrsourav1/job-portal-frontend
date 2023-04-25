import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./SignUp.css"

const SignUp = () => {

    const navigate = useNavigate()
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const registerUser =async (e)=>{
      console.log(e)
      e.preventDefault()
    // ---------------
    
    try{ 
    const response = await axios.post("http://localhost:5000/api/register",
            JSON.stringify({ name,email,password }),
            // console.log('thsis is working')
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
        setName('');
        setEmail('');
        setPassword('');
        // setSuccess(true);
    }catch(err){
        console.log(err)
    }
}
  return (
    <div className='register_section'>
        <div className='register_container'>
            <form onSubmit={registerUser} className="registerForm" >
                <div>
                    <input ref={nameRef} type="text" value= {name} onChange={(e)=>setName(e.target.value)} placeholder="full name" />
                </div>
                <div>
                    <input ref={emailRef} type="email" value= {email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div>
                    <input ref = {passwordRef} type="password" value= {password} placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="text"  />
                </div> 
                {/* <div>

                    <input className='data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"' type="submit" value="Register" />
                </div>   */}
                <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    hello
                </button>
            </form>
        </div>
    </div>
  )
}

export default SignUp



//   const response = await fetch("http://localhost:5000/api/register",{
    //     method:'POST',
    //     headers:{
    //       'Content_Type':'application/json',
    //     },
    //     body:JSON.stringify({
    //       name,email,password
    //     })
    //   })
    //   const data = await response.json()
    //   console.log(data)
    //   if(data.status ==='ok'){
    //     navigate('/login')
    //   }