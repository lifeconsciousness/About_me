let images = document.querySelectorAll(".imageThatCanBeLarger"),
    containers = document.querySelectorAll(".containerForImage"),
    songwritingText = document.querySelector(".songwriting-text")

let isEnabled = false;
for(let i = 0; i < images.length; i++){
    images[i].addEventListener("click", e =>{
        e.target.classList.toggle("photo-from-concert")
        e.target.classList.toggle("larger-img")

        let parent = e.target.parentElement
        parent.classList.toggle("img-container")

        if(isEnabled){
            songwritingText.style.display = "block"
            isEnabled = false
        } else{
            songwritingText.style.display = "none"
            isEnabled = true
        }

    })
}