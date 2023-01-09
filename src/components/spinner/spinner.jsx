import React from 'react'
import './spinner.css'

const Spinner = () => {
  return (
    <div className='spinner'>
        <div className='spinner-text'>Loading</div>
        <div className='sector sector-red'></div>
        <div className='sector sector-blue'></div>
        <div className='sector sector-yellow'></div>
        <div className='sector sector-green'></div>
    </div>
  )
}

export default Spinner