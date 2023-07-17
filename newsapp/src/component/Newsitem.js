import React from 'react'
import './News.css'
export default function Newsitem(props) {
  return (
    
        <div className="itemcontainer" >
          <div className='item'>
  <img src={props.image} className="image" alt="..."/></div>
  <div className="item2">
    <h5 className="c-title">{props.title}</h5>
    <div>
    <p className="c-text">{props.description}</p>
    <a href={props.link} type = 'submit-button' className="c-text">more..</a>
    </div>
  </div>
</div>
    
  )
}
