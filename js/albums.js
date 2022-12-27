const albumCovers = document.querySelectorAll(".albumImg"),
      biggerCovers = document.querySelectorAll(".biggerCover")

let isOpen = false

//makes hidden cover images bigger and visible by adding class
albumCovers.forEach(function(album,index){
    album.addEventListener("click", (e)=>{  
        if(!isOpen){
            biggerCovers[index].classList.add("coverActive")
        }
        isOpen = true        
    })
})

//closes bigger images by clicking on any place on the screen
let clickCount = 0

window.addEventListener("click", ()=>{
    closeBigAlbums()
})

//click count prevents immediate opening and closing of bigger image
function closeBigAlbums(){
    if(isOpen){
        clickCount++
    }
    else if(clickCount == 1){
        clickCount++
    }
    if(clickCount == 2){
        biggerCovers.forEach((cover,index) =>{
            biggerCovers[index].classList.remove("coverActive")
            isOpen = false
        })
        clickCount = 0
    }

}


