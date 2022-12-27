const whiteStartAnimation = document.querySelector(".whiteStartAnimation"),
      greetingsText = document.querySelector("#greetings"),
      exploreButton = document.querySelector("#explore")
      
//plays introduction section animations on load
window.addEventListener("load", ()=>{
    whiteStartAnimation.classList.add("animationItself")
    greetingsText.classList.add("greetingsAnimated")
    exploreButton.classList.add("buttonAnimation")
})
