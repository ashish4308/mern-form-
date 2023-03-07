import { useState, useContext } from "react";
import axios from 'axios';
import {Users} from '../context/User'

function Login() {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const {user , setUser , setT} = useContext(Users)


  const sub = (e)=>{
    e.preventDefault()
        const config={
            headers: {
                "Content-Type":"application/json"
            }
        }
        
        axios.post("http://localhost:5000/login",{ email,password},config)
        .then((r)=>{
          setUser(r.data.cred)
          setT(true)
          console.log(user)
            // console.log(r.data.cred)
        })
        .catch((e)=>{
          alert(e.response.data.msg)
          
        })
        
  }

  return (
    <div>
        <div>Login</div>
        
        <form action="" onSubmit={sub}>
            <input type="text" placeholder='Enter Email' value = { email}onChange={(e)=>{setEmail(e.target.value)}} />
            <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <button>Submit</button>
        </form>

        

    </div>
  )
}

export default Login