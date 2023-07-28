import React from 'react'
import myImage2 from './InShot1.png'
import Headers from './Headers'
export default function Contact() {
  return (
    <div className='container'>
    <div className='d2'>
      <img className ='myimage' src= {myImage2} alt='myImage'/>
      <div className='typewriter'><p>Hemchand Chandravanshi</p></div>
      <div className='bio'><p>A highly skilled software developer with a proven track record of efficiently solving complex problems. Proficient in C++, and Python, with hands-on experience in project development utilizing JavaScript, ReactJS, and machine learning.</p></div>
    </div>
    <div className='d1'>
      <Headers/>
      <div className='Contact1'>
        <div className='contactChild'>
          <p><b>hemuchandravanshi03@gmail.com</b><br/>
          <b>+91 6263736991</b></p>
        </div>
      </div>
    </div>
    
    </div>
  )
}
