import React, {useRef} from 'react'
import styles from './About.module.scss'
import me from '../../images/me-new.min.jpg'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
import {faTachometerAlt ,faDesktop, faMobileAlt, faLightbulb, faRocket} from '@fortawesome/free-solid-svg-icons'


const About = () => {

   const meImg = useRef(null)

   const skills = [
      {name: 'Problem Solver', level: 93}, 
      {name: 'HTML',           level: 75},
      {name: 'CSS',            level: 81},
      {name: 'JavaScript',     level: 86},
      {name: 'React',          level: 80},
      {name: 'Node.js',        level: 65},
   ]
   const description = `
      I'm an artist with a passion for computers, 
      a self-taught web developer and, overall, 
      a problem solver. 
      Creating web apps and designing UIs is a serious business, 
      and so is my commitment.
      Because in spite of all the technicality I get to have fun!
   `

   function mouseEnter({target}) {
      target.style.transition = null

      target.nextElementSibling.style.opacity = 1
   }
   function mouseLeave({target}) {
      target.style.transition = 'transform 600ms 100ms'
      target.style.transform = 'rotateY(0deg) rotateX(0deg)'

      target.nextElementSibling.style.opacity = 0
   }

   function updateMeImg(e) {
      let {top, bottom, left, right} = meImg.current.getBoundingClientRect()
      let width  = right  - left
      let height = bottom - top
      let x = e.clientX - Math.round(left)
      let y = e.clientY - Math.round(top)
      let xOff = -(width /2 - x)/width *2
      let yOff = (height/2 - y)/height*2
   
      meImg.current.style.transform = `
         rotateY(${20 * xOff}deg) rotateX(${20 * yOff}deg)
      `
      meImg.current.nextElementSibling.style.transform = `
         translate(${-10*xOff}px, ${10 * yOff}px)
      `
   }

   return (
      <section id="About" className={styles.About}>
         <h1>About</h1>
         <main className="container">
            {/* ======================== NUGGETS ======================== */}
            <div id="nuggetsRow" className="row">
               {/* ============= FAST ============= */}
               <div className='col-xs-6 col-sm-3'>
                  <div className={styles.nugget} reveal='false'>
                     <div className={styles.bubble}>
                        <i><Icon className={styles.speed} icon={faTachometerAlt}/></i>
                     </div>
                     <h2>Fast</h2>
                     <p>Fast load time and lag free interaction is top priority.</p>
                  </div>
               </div>
               {/* ============= RESPONSIVE ============= */}
               <div className='col-xs-6 col-sm-3'>
                  <div className={styles.nugget}>
                     <div className={styles.bubble}>
                        <i>
                           <svg className={styles.responsive}>
                              <Icon className={styles.desktop} icon={faDesktop}/>
                              <Icon className={styles.mobile} icon={faMobileAlt}/>
                           </svg>
                        </i>
                     </div>
                     <h2>Responsive</h2>
                     <p>Adaptive layout, ready to view on any screen size.</p>
                  </div>
               </div>
               {/* ============= INTUITIVE ============= */}
               <div className='col-xs-6 col-sm-3'>
                  <div className={styles.nugget}>
                     <div className={styles.bubble}>
                        <i><Icon icon={faLightbulb}/></i>
                     </div>
                     <h2>Intuitive</h2>
                     <p>Easy to use UI makes the user happy, very important.</p>
                  </div>
               </div>
               {/* ============= DYNAMIC ============= */}
               <div className='col-xs-6 col-sm-3'>
                  <div className={styles.nugget}>
                     <div className={styles.bubble}>
                        <i><Icon className={styles.rocket} icon={faRocket}/></i>
                     </div>
                     <h2>Dynamic</h2>
                     <p>Don't just fill the page with content, make it alive too!</p>
                  </div>
               </div>
            </div>
            {/* ======================== ME ======================== */}
            <div id="meRow" className='row'>
               <div className="col-sm-6">
                     <div id="me" className={styles.me} >
                        <div className={styles.img}>
                           <img
                              id="meImg" src={me} alt="me" ref={meImg}
                              onMouseEnter={mouseEnter}
                              onMouseLeave={mouseLeave}
                              onMouseMove={updateMeImg}
                           />
                           <div className={styles.shadow}/>
                        </div>
                        <p><em>Software Developer</em></p>
                        <p className={styles.description}>{description}</p>
                     </div>
               </div>
               <div className="col-sm-6">
                  <div id='mySkills' className={styles.Skills}>
                     {skills.map(({name, level}, i) => (
                        <div key={i} className={styles.skillDiv}>
                           <label>{name}</label>
                           <data><span style={{width: level+'%'}}>
                              <span className={styles.filled}/>
                           </span></data>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </main>
      </section>
   );
}

export default About