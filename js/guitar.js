
let path = document.querySelector("path")
let pathLength = path.getTotalLength()-3000

path.style.strokeDasharray = pathLength + ' ' + pathLength
path.style.strokeDashoffset = pathLength

//draws svg line on scroll
window.addEventListener("scroll", ()=>{        
    let scrollPercentage = ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight))*4.2;

    let drawLength = pathLength * scrollPercentage+1400

    path.style.strokeDashoffset = pathLength - drawLength

})