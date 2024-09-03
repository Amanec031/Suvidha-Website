import React from 'react'
import './Service.css'


const Service = ({ title, description, myurl }) => {
  return (
    <a href="https://forms.gle/394MtigdFQy4HtAv6" target="_blank" >

      <div className='services-container'>
        <div className='services-card'>
          <img src={myurl} alt="NO IMG" />
          <h2>{title}</h2>
          <p>{description}</p>

        </div>


      </div>
    </a>
  )
}

export default Service