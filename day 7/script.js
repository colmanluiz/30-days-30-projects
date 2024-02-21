let progress = document.getElementById("progress");
let song = document.getElementById("song");
let pauseIcon = document.querySelector("#pause");

song.onloadedmetadata = () => {
  progress.max = song.ondurationchange;
  progress.value = song.currentTime;
};

function playPause(e) {
  console.log(e.target);
  // if (pauseIcon.classList.contains("fa-pause")) {
  //   song.pause();
  //   pauseIcon.classList.remove("fa-pause");
  //   pauseIcon.classList.add("fa-play");
  // } else {
  //   song.play();
  //   pauseIcon.classList.add("fa-pause");
  //   pauseIcon.classList.remove("fa-play");
  // }
}

pauseIcon.addEventListener("click", playPause);
