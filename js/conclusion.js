const waves = document.querySelectorAll(`.wave`),
      audioPlayer = document.querySelector(`.audio-player`)

setTimeout(pauseWaves, 960)  
audioPlayer.volume = 0.2

audioPlayer.addEventListener("play", ()=>{
    playWaves()
})
audioPlayer.addEventListener("pause", ()=>{
    pauseWaves()
})




function pauseWaves(){
    waves.forEach(wave => wave.style.animationPlayState = "paused")
}
function playWaves(){
    waves.forEach(wave => wave.style.animationPlayState = "running")
}
