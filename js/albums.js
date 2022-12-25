const albumCovers = document.querySelectorAll(".albumImg"),
      biggerCovers = document.querySelectorAll(".biggerCover")

let isOpen = false


albumCovers.forEach(function(album,index){
    album.addEventListener("click", (e)=>{
        if(!isOpen){
            biggerCovers[index].classList.toggle("coverActive")
        }
        isOpen = true        
    })
})


biggerCovers.forEach((cover,index) =>{
    cover.addEventListener("click", e=>{
        biggerCovers[index].classList.toggle("coverActive")
        isOpen = false
    })
})