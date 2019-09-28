import React from 'react'
import styles from './Footer.module.scss'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedinIn, faSoundcloud } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
   <footer className={styles.Footer}>
      <ul>
         <li>
            <a href="http://bit.ly/jrdeveloper-facebook" target="_blank" rel="noopener noreferrer" title="Facebook">
               <Icon icon={faFacebookF} size="3x"/>
            </a>
         </li>
         <li>
            <a href="http://bit.ly/jrdeveloper-github" target="_blank" rel="noopener noreferrer" title="Github">
               <Icon icon={faGithub} size="3x"/>
            </a>
         </li>
         <li>
            <a href="http://bit.ly/jrdeveloper-linkedin" target="_blank" rel="noopener noreferrer" title="Linkedin">
               <Icon icon={faLinkedinIn} size="3x"/>
            </a>
         </li>
         <li>
            <a href="http://bit.ly/jrdeveloper-soundcloud" target="_blank" rel="noopener noreferrer" title="Soundcloud">
               <Icon icon={faSoundcloud} size="3x"/>
            </a>
         </li>
      </ul>
   </footer>
)

export default Footer