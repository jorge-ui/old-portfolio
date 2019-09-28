import React from 'react'
import styles from './Landing.module.scss'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'

const {smoothScroll} = window

const Landing = () => {
   let name = 'Jorge Rivera'
   return (
      <section id="Landing" className={styles.Landing} >
         <div className={styles.Box}>
            <div>Hello, I'm <span>{name}</span>.</div>
            <div>I'm a full-stack web developer.</div>
            <button onClick={() => smoothScroll('#About', 1300)}>
               View my work <Icon icon={faChevronRight} size='sm'/>
            </button>
         </div>
      </section>
   )
}

export default Landing