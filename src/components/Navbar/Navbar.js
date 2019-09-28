import React from 'react'
import styles from './Navbar.module.scss'

const {smoothScroll} = window

const Navbar = () => (
   <nav id="Navbar" className={styles.Navbar}>
      <ul>
         <li onClick={() => smoothScroll('body', 1000)}      >Home</li>
         <li onClick={() => smoothScroll('#About', 1000)}    >About</li>
         <li onClick={() => smoothScroll('#Portfolio', 1000)}>Portfolio</li>
         <li onClick={() => smoothScroll('#Contact', 1000)}  >Contact</li>
      </ul>
   </nav>
)

export default Navbar