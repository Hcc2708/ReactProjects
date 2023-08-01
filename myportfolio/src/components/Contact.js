import React from 'react'
import Headers from './Headers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
export default function Contact() {
  return (
    
    <div className='d1'>
      <Headers/>
      <div className='Contact1'>
        <div className='contactChild'>
          <p><FontAwesomeIcon icon= {faEnvelope}/> <b>hemuchandravanshi03@gmail.com</b><br/>
          <FontAwesomeIcon icon={faPhone}/> <b>+91 6263736991</b></p>
          
        </div>
      </div>
    </div>
    
    
  )
}
