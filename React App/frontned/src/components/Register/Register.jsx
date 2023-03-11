import React,{useState} from 'react';
export default function Register (props) {
const [Name,setName]=useState('')
const [Email,setEmail]=useState('')
const [Password,setPassword]=useState('')
const handelSubmit = async(e) => {
  e.preventDefault();
const response= await fetch("http://localhost:8080/demo",{
    method:"POST",
    body :JSON.stringify(Form),
    headers:{
      "Content-Types": "application/json "
    }    
  })
  const data =await response.text();
  console.log(data)
  console.log(Name)
  console.log(Email)
  console.log(Password)
  // console.log("Fizza")
  // console.log(response)
    }

  return (
    <>

    <div className='auth-form-container'>
      <h2>Register</h2>
 <form className='Register-form' onSubmit={handelSubmit}>
    <label htmlFor="Name">Name</label><br />
    <input type="Name" typeof={Name}  placeholder='Enter Your Name' value={Name} onChange={(e)=>{setName(e.target.value)}} required/>
    <label htmlFor="Email">Email</label>
    <input value={Email} onChange={(e)=>{setEmail(e.target.value)}} type="Email" id="Name" placeholder="Enter Your Email" required/>
    <label htmlFor="Password">Password</label>
    <input value={Password} onChange={(e)=>{setPassword(e.target.value)}} type="Password" id="Password" placeholder='***********' required />
    <button>Register</button>
    <button className='link-btn' onClick={(PostData)=>{props.onFormSwitch("Login")}}>Already have an account?<br /> Login here </button>
    </form>

    </div>
    </>
  )
  }
