window.smoothScroll = (element, duration) => {
   let target = document.querySelector(element)
   let targetPosition = window.$(target).offset().top
   let startPosition = window.pageYOffset
   let distance = targetPosition - startPosition
   let startTime = null
   
   function animate(currentTime) {
      if(startTime === null) startTime = currentTime
      let timeElapsed = currentTime - startTime
      let run = easeInOutQuintic(timeElapsed, startPosition, distance, duration)
      window.scrollTo({top: run})
      if(timeElapsed < duration) requestAnimationFrame(animate)
   }

   function easeInOutQuintic(t, b, c, d) {
      let ts=(t/=d)*t;
      let tc=ts*t;
      return b+c*(6*tc*ts + -15*ts*ts + 10*tc);
   }

   requestAnimationFrame(animate)
}