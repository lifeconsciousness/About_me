const waves = document.querySelectorAll(`.wave`),
      audioPlayer = document.querySelector(`.audio-player`)

setTimeout(pauseWaves, 960)  
audioPlayer.volume = 0.2

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


const songOptions = document.querySelectorAll(`.song`)
const songSource = document.querySelector(`.song-source`)
const songsArr = [`./audio/insomnia.mp3`,`./audio/The_Regular_Person-song_about_nothing.mp3`,`light tide.mp3`]

let prevSong = 1;

for (let i = 0; i < songOptions.length; i++){
    songOptions[i].addEventListener(`click`, (e)=>{
        songSource.src = songsArr[i]
        audioPlayer.load()

        songOptions[prevSong].classList.remove("currentSong")
        songOptions[i].classList.add("currentSong")

        prevSong = i
    })
}