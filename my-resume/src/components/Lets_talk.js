// import React from 'react'
import Profile from './prof1.jpg'
import React, { useState } from 'react';
// import {Navigate, useNavigate} from 'react-router'

function Lets_talk() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
//   const navigate = useNavigate();
// useEffect(()=>{
//   const auth=
//   localStorage.getItem('user');
//       if (auth){
//         Navigate('/home')
//       }
// },[])


  const collectData = async () => {
    console.warn(name, email, message);
    let result = await fetch('http://localhost:5000/', {
      method: 'post',
      body: JSON.stringify({ name, email, message }),
      headers: {
        'Content-Type': 'application/json'
      }, 
    })
    result = await result.json()
    console.warn(result);
    console.log(result);
    // if(result)
    // {
    //   navigate('/home')
    // }
  }


  return (
    <div className='lets_talk'>
      <div className='input'>
        <div className='head_lets_talk'>Let's Talk</div>
        <div className='input_form'>
          <form>
            Name: <br />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name' /><br /><br /><br />
            Your Email: <br />
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email' /><br /><br /><br />
            Message: <br />
            <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Enter your message' /><br />
            <button className='submit_btn' onClick={collectData} type="button">Submit</button>
          </form>
        </div>
      </div>
      <div>
        <img src={Profile} alt="not found" />
      </div>
    </div>
  )
}

export default Lets_talk
