import React from 'react'
import {  useContext } from "react";
import {Users} from '../context/User'

function Home() {
  const {user } = useContext(Users)
  console.log(user);
  return (
    <div>
        welcome {user[0].name}
        
        
    </div>
  )
}

export default Home