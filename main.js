const sections = document.querySelectorAll("section")

const observer = new IntersectionObserver((entries) => {  
	entries.forEach(entry => {
    if (entry.intersectionRatio > 0.1) {
      entry.target.classList.add("in-view")
    } else {
      entry.target.classList.remove("in-view")
    }
  })  
}, {
  threshold: [0.0, 0.1, 1.0],
  root: document.querySelector('main'),
  rootMargin: "40px"
})


sections.forEach(section => {
  let currentX = 0
  let currentY = 0
  let aimX = 0
  let aimY = 0
  
  const updatePosition = function () {
    currentX += (aimX - currentX) * 0.2
    currentY += (aimY - currentY) * 0.2
    
	  const div = section.querySelector("div img")
    
    div.style.transform = `rotateX(${-10 * currentY}deg) rotateY(${10 * currentX}deg)`
    
    requestAnimationFrame(updatePosition)
  }
  
  updatePosition()
  
  document.addEventListener("mousemove", function (event) {
    aimX = (event.pageX - (window.innerWidth / 2)) / window.innerWidth
    aimY = (event.pageY - (window.innerHeight / 2)) / window.innerHeight
  })  
})