const waves = document.querySelectorAll(`.wave`),
      audioPlayer = document.querySelector(`.audio-player`)

//gives waves random height on load
setTimeout(pauseWaves, 960)  

audioPlayer.volume = 0.14


audioPlayer.addEventListener(`play`, ()=>{
    playWaves()
})
audioPlayer.addEventListener(`pause`, ()=>{
    pauseWaves()
})

function pauseWaves(){
    waves.forEach(wave => wave.style.animationPlayState = `paused`)
}
function playWaves(){
    waves.forEach(wave => wave.style.animationPlayState = `running`)
}


//song switching funcitonality
const songOptions = document.querySelectorAll(`.song`)
const songSource = document.querySelector(`.song-source`)
const songsArr = [`./audio/insomnia.mp3`,`./audio/The_Regular_Person-song_about_nothing.mp3`]

let prevSong = 1;

for (let i = 0; i < songOptions.length; i++){
    songOptions[i].addEventListener(`click`, (e)=>{
        songSource.src = songsArr[i]
        audioPlayer.load()
        pauseWaves()

        songOptions[prevSong].classList.remove("currentSong")
        songOptions[i].classList.add("currentSong")

        prevSong = i
    })
}