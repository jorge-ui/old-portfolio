import React from 'react'
import styles from './Project.module.scss'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

const Project = ({imgSrc, title, description, link}) => (
   <div className={`Project ${styles.Project}`} >
      <header>
         <div className={styles.imageWrap}>
            <a href={link} target="_blank" rel="noopener noreferrer" title='Open'>
               <img src={imgSrc} alt={title.split(' ').join('-') + '.png'}/>
               <div className={styles.hoverOpen}><Icon icon={faExternalLinkAlt}/></div>
            </a>
            <a href={link} target="_blank" rel="noopener noreferrer" title={`Open "${title}"`}>
               <span>Open</span> <Icon icon={faExternalLinkAlt}/>
            </a>
         </div>
         <div className={styles.info}>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" title={`Open "${title}"`}>
               <span>Open</span> <Icon icon={faExternalLinkAlt}/>
            </a>
         </div>
      </header>
   </div>
)

Project.propTypes = {
   imgSrc: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   link: PropTypes.string.isRequired,
}

export default Project