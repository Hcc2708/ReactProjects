import React from 'react'
import myImage2 from './InShot3.png'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
export default function Home() {
  return (
    <div className='container'>
    <div className='d2'>
      <img className ='myimage' src={myImage2} alt='myImage'/>
      <div className='typewriter'>
        <h3>Hemchand Chandravanshi</h3>
      </div>
      <div className='typewriter2'>
        <p>software Developer</p>
      </div>
      </div>
      <div className='bio'><p>I'm a software engineer i'm focused on building web applications and websites utilizing JavaScript, Reactjs, Nodejs and Machine Learning.</p></div>
      <div className='git'><FontAwesomeIcon icon={faGithub}/><a href='https://github.com/Hcc2708' className='github'> Github</a>   
      <FontAwesomeIcon icon ={faLinkedin}/><a href='https://www.linkedin.com/in/hemchand-chandravanshi-6785301b6' className='github'> LinkedIn</a>
    </div>
      
    
    
    
    </div>
    
  )
}
