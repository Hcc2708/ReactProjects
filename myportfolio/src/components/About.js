import React from 'react'
import myImage2 from './InShot1.png'
import Headers from './Headers'
import './Home.css'
export default function About() {
  return (
    <div className='container'>
    <div className='d2'>
      <img className ='myimage' src= {myImage2} alt='myImage'/>
      <div className='typewriter'><p>Hemchand Chandravanshi</p></div>
      <div className='bio'><p>A highly skilled software developer with a proven track record of efficiently solving complex problems. Proficient in C++, and Python, with hands-on experience in project development utilizing JavaScript, ReactJS, and machine learning.</p></div>
    </div>
    <div className='d1'>
      <Headers/>
      <div className='About1'>
        <div className='AboutChild'>
        <h1>Hemchand Chandravanshi</h1>
        <p>Kawardha, Chhattisgarh</p>
        <p><b>Education:</b><br/>
        B Tech<br/>Computer Science and Engineering<br/>
        Lovely Professional University<br/>
        Phagwara, Punjab</p>
        
        </div>
      </div>
    </div>
    
    </div>
  )
}
