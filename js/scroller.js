const slider = document.querySelector(".albums-slider")

window.addEventListener("scroll", (e)=>{
    slider.dataset.mouseDownAt = e.clientX

})