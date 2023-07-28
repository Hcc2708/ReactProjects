import React from 'react'
import Home from './Home'
import Headers from './Headers'
import myImage2 from './InShot1.png'
import './Home.css'
export default function Projects() {
  return (
    <div className='container'>
    <div className='d2'>
      <img className ='myimage' src= {myImage2} alt='myImage'/>
      <div className='typewriter'><p>Hemchand Chandravanshi</p></div>
      <div className='bio'><p>A highly skilled software developer with a proven track record of efficiently solving complex problems. Proficient in C++, and Python, with hands-on experience in project development utilizing JavaScript, ReactJS, and machine learning.</p></div>
    </div>
    <div className='d1'>
      <Headers/>
      <div className='p1'>
      <div className='p2'></div>
      <div className='p2'></div>
      <div className='p2'></div>
      </div>
    </div>
    
    </div>
  )
}