
let path = document.querySelector("path")
//let pathLength = path.getTotalLength()+3000
let pathLength = path.getTotalLength()-3000

path.style.strokeDasharray = pathLength + ' ' + pathLength
path.style.strokeDashoffset = pathLength

window.addEventListener("scroll", ()=>{
    let scrollPercentage = ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight))*5;
    
    //let drawLength = pathLength * scrollPercentage-500
    let drawLength = pathLength * scrollPercentage+1450

    path.style.strokeDashoffset = pathLength - drawLength
})