import React, { useState } from 'react'
import axios from 'axios';

function Signup() {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')


    const sub =(e)=>{
        e.preventDefault()
        const config={
            headers: {
                "Content-Type":"application/json"
            }
        }
        
        axios.post("http://localhost:5000/signup",{name, email,password},config)
        .then((r)=>{
            console.log(r)
        })
        .catch((e)=>{
            console.log(e);
            if(e.response.data.msg === 'alredy exist'){
                alert('alredy exist')
                console.log("yo");
            }else{
                console.log("error in axios");
            }
           })
        
    }

  return (
    <div>
        <div>Signup</div>
        <form action="" onSubmit={sub}>
            <input type="text" placeholder='Enter name'  value={name} onChange={(e)=>{setName(e.target.value)}} />
            <input type="text" placeholder='Enter Email' value = { email}onChange={(e)=>{setEmail(e.target.value)}} />
            <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Signup