import React,{useState} from 'react'
import menu from "./menu-icon.png" 
import './Dropdown.css'
import {motion} from "framer-motion"
const Dropdown = () => {
const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6'];
const [isOpen, setIsOpen] = useState(false);

const toggleDropdown = () => {
  setIsOpen(!isOpen);
}

return (
  <div className='dropdown-main'>
    <img className='menu-image' alt='menu' src={menu} onClick={toggleDropdown}/>
    {isOpen ? (
    <motion.div
        animate={{x:300}}
        transition={{type:'spring',duration:1.5,stiffness:60,bounce:1}}
      className='dropdown-menu'>
        {categories.map(category => (
          <button className='button dropdown-item' key={category}>{category}</button>
        ))}
      </motion.div> 
    ):<motion.div
    animate={{x:-10}}
    transition={{duration:0.5}}
  className='dropdown-menu'>
    {categories.map(category => (
      <button className='button dropdown-item' key={category}>{category}</button>
    ))}
  </motion.div> }
  </div>
);
}

export default Dropdown