import React from 'react'

const DetailsSubText = ({heading, para}) => {
  return (
    <div className='detailsSubText'>
        <h3>{heading}</h3>
        <p>{para}</p>
        <button>learn more</button>
    </div>
  )
}

export default DetailsSubText