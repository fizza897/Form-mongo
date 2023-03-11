import React, { useState } from 'react'

export default function Login(props) {
    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')
    const handelSubmit =(e) =>{
        e.preventDefault();
        console.log(Email)
        console.log(Password)
    }

    return (
        <div className='auth-form-container'>
            <h2>Login</h2>
        <form className='Login-form' onSubmit={handelSubmit}>
            <label htmlFor="Email">Email</label>
            <input value={Email} onChange={(e)=>{setEmail(e.target.value)}} type="Email" id="Name" placeholder="Enter Your Email" required/>
            <label htmlFor="Password">Password</label>
            <input value={Password} onChange={(e)=>{setPassword(e.target.value)}} type="Password" id="Password" placeholder='************' />
            <button>Login</button>
        </form>
        <button className='link-btn' onClick={()=>{props.onFormSwitch("Register")}}>Don't have an account?<br /> Register here. </button>
        </div>
    )
}
