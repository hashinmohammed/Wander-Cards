import React, { useState } from 'react'

const TourSingle = ({id,name,info,image,price,removeTour}) => {
 const [readMore,setReadMore]=useState(false)
  return (
    <article className='single-tour'>
        <img src={image} alt="" className="img" />
        <span className="tour-price">${price}</span>
        <div className="tour-info">
            <h5>{name}</h5> 
            <p>{readMore ? info :`${info.substring(0,200)}...`} <button className='info-btn' onClick={()=>{setReadMore(!readMore)}}>{readMore?"show less":"read more"}</button> </p>
            <button className="btn btn-block delete-btn" onClick={()=>{removeTour(id)}}>not interested</button>
        </div>
    </article>
  )
}

export default TourSingle