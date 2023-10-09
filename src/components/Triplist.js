import React from 'react'

const Triplist = (props) => {
  return (
    <div className='card'>
        <div className='card-image'>
            <img src={props.image} alt="card1" />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.description}</p>
    </div>
  )
}

export default Triplist