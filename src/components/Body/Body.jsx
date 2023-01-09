import React from 'react'
import './Body.css'
import airplane from './airplane.png'
import {motion} from "framer-motion"


const Body = () => {
  return (
    <div className='main-body'>
        <motion.img
        animate={{x:1500, y:-200}}
        transition={{repeat:Infinity,duration:10 }}
        src={airplane} alt='airplane' className='airplane'/>
    </div>
  )
}

export default Body