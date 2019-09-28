import React,  {useEffect} from 'react'

const {$} = window

const Canvas = () => {
   useEffect(() => {
      const FPS = 60;

      // Particle vars
      var particles = {},
          particlesCount = 0,
          particlesSpawnProbability = window.screen.width < 576 ? .03 : .08

      // Canvas Setup
      var canvas = document.querySelector('#canvasBubbles')
      var ctx = canvas.getContext('2d')
      var bgColor = 'hsl(217, 90%, 12%)'
      canvas.width = window.screen.width
      canvas.height = $('#Landing')[0].clientHeight + $('#Navbar')[0].clientHeight
      window.onresize = () => {
         canvas.width = window.screen.width
         canvas.height = $('#Landing')[0].clientHeight + $('#Navbar')[0].clientHeight
      }

      //define object classes
      class Particle {
         zDepth = 800
         z = random(0, this.zDepth)
         zScale = (this.z / this.zDepth)
         zSize = this.zScale / 10 * (10 * Math.pow(this.zScale, 2))
         r = 20 + 100 * this.zSize
         x = random(0, canvas.width)
         xspeed = .08 + .6 * this.zSize
         xspeedRef = this.xspeed
         xstart = this.x
         xGrav = .01
         gravInvert = Math.random() < .5 ? -1 : 1
         y = canvas.height + this.r
         yspeed = -(1 + 2 * this.zSize)
         opacity = this.zSize
         hsl = {
            h: 217,
            s: 100,
            l: 80 + (20 / this.zDepth) * (this.z),
         }

         constructor() {
            particles[particlesCount] = this
            this.id = particlesCount
            particlesCount > 100000 ? particlesCount = 0 : particlesCount++
         }

         raise() {
            this.y += this.yspeed
            this.x += this.xspeed
            if(Math.abs(this.xspeed) > Math.abs(this.xspeedRef)) {
               this.gravInvert *= -1
               this.xGrav = .005 + Math.random() * .017
               this.xspeedRef *= 1.08
            }
            this.xspeed -= this.xGrav * this.gravInvert
         }
         draw() {
            let {x, y, r, hsl, opacity} = this
            if(y < 0 - r*2) {
               delete particles[this.id]
            } else drawBubble(x, y, r, hsl, opacity)
         }
      }


      
      // ONE FRAME
      //========================================================================================
      setInterval(() => {
         drawBackground()

         Math.random() < particlesSpawnProbability && new Particle()
         
         for (let i in particles) {
            particles[i].raise()
            particles[i].draw()
         }
      },
         1000/FPS
      )
      //========================================================================================


      function drawRect(x, y, w, h, color) {
         ctx.fillStyle = color
         ctx.fillRect(x, y, w, h)
      }
      
      function drawBubble(x, y, r, hsl, opacity) {
         let gradient = ctx.createRadialGradient(x, y, 0, x, y, r)
         gradient.addColorStop(0.00, `hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, 0.05)`)
         gradient.addColorStop(0.20, `hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, 0.05)`)
         gradient.addColorStop(0.90, `hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, 0.00)`)
         gradient.addColorStop(0.98, `hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, 0.25)`)
         gradient.addColorStop(1.00, `hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, 0.00)`)
         ctx.beginPath()
         ctx.arc(x, y, r, 0, 360)
         ctx.fillStyle = gradient
         ctx.fill()
         ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
         ctx.stroke()
      }

      function random(from = 0, to) {
         return from + Math.round(Math.random() * (to - from))
      }

      function drawBackground() {
         drawRect(0, 0, canvas.width, canvas.height, bgColor);
      }
      
   }, [])
   
   return (
      <canvas id="canvasBubbles" style={{
         position: 'absolute',
         left: 0,
         top: 0,
         backgroundColor: 'hsl(217, 90%, 12%)',
         filter: 'blur(1.5px)',
         zIndex: 5
      }}>
         
      </canvas>
   )
}

export default Canvas
