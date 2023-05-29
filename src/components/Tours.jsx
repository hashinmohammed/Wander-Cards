import React from 'react'
import TourSingle from './TourSingle';

const Tours = ({tours,removeTour}) => {
  return (
    <section>
        
      <div className="title"></div>
        <h2 className='title'>Wander Cards</h2>
        <div className="title-underline"></div>
        <div className="tours">
            {tours.map((tour)=>{
                return <TourSingle key={tour.id} tours={tours} removeTour={removeTour} {...tour} />
            })}
        </div>
       </section>
  )
}

export default Tours