const menuBarIcon = document.querySelector(".menu-bar-icon"),
      navContainer = document.querySelector(".nav-container")

let navbarIsOpen = false

//makes mobile navbar functional
menuBarIcon.addEventListener("click", (e)=>{
    e.preventDefault()
    if(!navbarIsOpen){
        menuBarIcon.innerHTML = "x"

        navContainer.style.transform = "translateX(-60vw)"

        menuBarIcon.classList.toggle("menu-bar-icon-size-smaller")
        navbarIsOpen = true
    } else{
        navContainer.style.transform = "translateX(0vw)"

        menuBarIcon.innerHTML = "="
        menuBarIcon.classList.toggle("menu-bar-icon-size-smaller")
        navbarIsOpen = false
    }
})
