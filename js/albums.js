const albumCovers = document.querySelectorAll(".albumImg"),
      biggerCovers = document.querySelectorAll(".biggerCover")

let isOpen = false


albumCovers.forEach(function(album,index){
    album.addEventListener("click", (e)=>{
        if(!isOpen){
            biggerCovers[index].classList.add("coverActive")
        }
        isOpen = true        
    })
})

let clickCount = 0

window.addEventListener("click", ()=>{
    closeBigAlbums()

})

function closeBigAlbums(){
    if(isOpen){
        clickCount++
    }
    else if(clickCount == 1){
        clickCount++
    }
    if(clickCount == 2){
        console.log('close')
        biggerCovers.forEach((cover,index) =>{
            biggerCovers[index].classList.remove("coverActive")
            isOpen = false
        })
        clickCount = 0
    }

}


