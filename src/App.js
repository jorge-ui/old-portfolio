import React from 'react';
import './App.scss';
// components
import Landing from './components/Landing/Landing'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Canvas from './components/Canvas/Canvas'

const {$} = window

function App() {
  return (
    <div className="App">
      <Landing/>
      <Canvas/>
      <Navbar/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

window.onload = function() {
   const home        = $('#Landing')[0]
   const canvas      = $('#canvasBubbles')
   const navbar      = $('#Navbar')
   const about       = $('#About')[0]
   const portfolio   = $('#Portfolio')[0]
   const contact     = $('#Contact')[0]
   const nuggetsRow  = $('#nuggetsRow')[0]
   const me          = $('#me')[0]
   const mySkills    = $('#mySkills')[0]
   const projectsRow = $('#projectsRow')[0]
   const contactForm = $('#contactForm')[0]
   const heightPropotion = window.innerWidth < 768 ? 2 : 2.5
   const revealBreakpoint = window.screen.height/heightPropotion

   // check if navbar needs to be fixed based on pageYOffset upon window.onload
   if(this.pageYOffset > home.clientHeight + navbar[0].clientHeight - 1) {
      // fix the navbar
      navbar.addClass('navbar-fixed')
      canvas.addClass('canvas-fixed')
   }

   // add onscroll event listener
   this.onscroll = () => {
      let {pageYOffset} = this
      // get each section's rect's top offset
      let section = [
         [home.getBoundingClientRect().top,      0 ],
         [about.getBoundingClientRect().top,     1 ],
         [portfolio.getBoundingClientRect().top, 2 ],
         [contact.getBoundingClientRect().top,   3 ],
      ]
      // filter sections only pass the top of the viewport (negative top offset), and take the navbar into account
      .filter((sec) => sec[0] <= 0 + navbar[0].clientHeight)
      // reduce the remaining offsets to the closest to zero to find the currently viewing section
      .reduce((acc, current) => current[0] > acc[0] ? acc = current : 'do nothing', [-9999,null])

      // check if scrollY is greater than (home height + nav height)
      if(pageYOffset > home.clientHeight + navbar[0].clientHeight - 1) {
         // fix the navbar to viewport
         !navbar.hasClass('navbar-fixed') && navbar.addClass('navbar-fixed')
         !canvas.hasClass('canvas-fixed') && canvas.addClass('canvas-fixed')
      } else if(pageYOffset < home.clientHeight) {
         // unfix the navbar
         navbar.hasClass('navbar-fixed') && navbar.removeClass('navbar-fixed')
         canvas.hasClass('canvas-fixed') && canvas.removeClass('canvas-fixed')
      }
      // show navbar's active li based on currently view section
      navbar[0].firstChild.childNodes.forEach((li,i) => {
         if(i === section[1]) {
            li.classList.add('li-active')
         } else li.classList.remove('li-active')
      })

      // =============================== ABOUT sec reveal
      if(nuggetsRow.getBoundingClientRect().top < revealBreakpoint) {
         // reveal h1
         about.firstChild.setAttribute('revealed', '')
         // reveal each nugget subsequently by 100ms
         nuggetsRow.childNodes.forEach((nuggetCol, i) => {
            setTimeout(
               () => nuggetCol.firstChild.setAttribute('revealed', ''),
               100*i
            )
         })
         // apply reveal to meRow based on it's rect's top
         if(me.getBoundingClientRect().top < revealBreakpoint) {
            me.setAttribute('revealed', '')
         }
         // apply reveal to mySkills based on it's rect's top
         if(mySkills.getBoundingClientRect().top < revealBreakpoint) {
            setTimeout(
               () => {
                  mySkills.childNodes.forEach((skill, i) => {
                     setTimeout(
                        () => skill.setAttribute('revealed', ''),
                        100*i
                     )
                  })
               },
               // delay depending on 768 breakpoint
               window.innerWidth >= 768 ? 600 : 0
            )
         }
      }
      // =============================== PORTFOLIO sec reveal
      if(projectsRow.getBoundingClientRect().top < revealBreakpoint) {
         portfolio.firstChild.setAttribute('revealed','')
         projectsRow.childNodes.forEach((projectsCol, i) => {
            setTimeout(
               () => projectsCol.firstChild.setAttribute('revealed', ''),
               150*i
            )
         })
      }
      // =============================== CONTACT sec reveal
      if(contactForm.getBoundingClientRect().top < revealBreakpoint) {
         contact.firstChild.setAttribute('revealed', '')
         setTimeout(
            () => contact.childNodes[1].setAttribute('revealed', ''),
            250
         )
         contactForm.childNodes.forEach((section, i) => {
            setTimeout(
               () => section.setAttribute('revealed', ''),
               150*i
            )
         })
      }
   }
   this.onkeydown = ({keyCode}) => {
      if(keyCode === 220) {
         projectsRow.childNodes.forEach((projectsCol, i) => {
            projectsCol.firstChild.removeAttribute('revealed')
         })
      }
   }
}

export default App;
