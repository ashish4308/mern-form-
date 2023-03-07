
import { useState } from 'react';
import './App.css';
// import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import {Users} from './context/User'


function App() {
  const [t , setT] = useState(false)
  const [user,setUser]= useState([])
  console.log(t);

  
  return (
    <div className="App">
      
      {/* <Signup /> */}

       <Users.Provider value={{user , setUser , t , setT}}>
          {t ?<Home/>:  <Login />  }
       </Users.Provider>
 
      
      {/* <Login setUser = {setUser} user= {user}/> */}
      {/* <Home user= {user} /> */}

     
    </div>
  );
}

export default App;
