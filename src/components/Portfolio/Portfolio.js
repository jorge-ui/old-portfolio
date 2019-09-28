import React from 'react'
import styles from './Portfolio.module.scss'
import spaceVisualizer_Icon from './icons/spaceVisualizer.png'
import burgerBuilder_Icon from './icons/burgerBuilder.png'
import devConnector_Icon from './icons/devConnector.png'
import rgbGame_Icon from './icons/rgbGame.png'
import Project from './Project'

const Portfolio = () => (
   <section id="Portfolio" className={styles.Portfolio}>
      <h1>Projects</h1>
      <main className="container">
         <div id='projectsRow' className="row">
            <div className={`${styles.col} col-xs-12 col-sm-6`}>
               <Project
                  title={'Space Image Visualizer'}
                  description={`
                     Search for images and see your results
                     floating in space and beautifully animated.
                  `}
                  imgSrc={spaceVisualizer_Icon}
                  link='http://bit.ly/open-space-visualizer'
               />
            </div>
            <div className={`${styles.col} col-xs-12 col-sm-6`}>
               <Project
                  title='Burger Builder'
                  description={`
                     Build your custom burger from a variety
                     of ingredients to pick from and place your order.
                  `}
                  imgSrc={burgerBuilder_Icon}
                  link='http://bit.ly/open-burger-builder'
               />
            </div>
            <div className={`${styles.col} col-xs-12 col-sm-6`}>
               <Project
                  title='Developer Connector'
                  description={`
                     Connect with other developers, share posts and create
                     a profile to showcase your skills.
                  `}
                  imgSrc={devConnector_Icon}
                  link='http://bit.ly/open-dev-connector'
               />
            </div>
            <div className={`${styles.col} col-xs-12 col-sm-6`}>
               <Project
                  title='The Great RGB'
                  description={`
                  Test your knowledge and challenge your eyes,
                  pick the right color to get a high score.
                  `}
                  imgSrc={rgbGame_Icon}
                  link='http://bit.ly/open-rgb-game'
               />
            </div>
         </div>
      </main>
   </section>
)

export default Portfolio