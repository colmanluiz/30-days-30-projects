let pause = document.querySelector("#pause");
let progress = document.querySelector("#progress");
let song = document.querySelector("#song");

song.addEventListener("load", () => {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function playPause() {
  if (pause.classList.contains("fa-pause")) {
    song.pause();
    pause.classList.remove("fa-pause");
    pause.classList.add("fa-play");
  } else song.play();
}

pause.addEventListener("click", playPause);
