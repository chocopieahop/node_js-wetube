const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeBtn");
const fullScrnBtn = document.getElementById("jsFullScreen");

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playBtn.innerHTML = " ⏸";
  } else {
    videoPlayer.pause();
    playBtn.innerHTML = " ▶";
  }
}

function handleVolumeClick() {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    volumeBtn.innerHTML = "🔊";
  } else {
    videoPlayer.muted = true;
    volumeBtn.innerHTML = "🔈";
  }
}

function exitFullScreen() {
  fullScrnBtn.innerHTML = "🔳";
  fullScrnBtn.addEventListener("click", goFullScreen);
  document.exitFullscreen().catch((err) => Promise.resolve(err));
}
function goFullScreen() {
  videoContainer.requestFullscreen();
  fullScrnBtn.innerHTML = "🔲";
  fullScrnBtn.removeEventListener("click", goFullScreen);
  fullScrnBtn.addEventListener("click", exitFullScreen);
}

function init() {
  playBtn.addEventListener("click", handlePlayClick);
  volumeBtn.addEventListener("click", handleVolumeClick);
  fullScrnBtn.addEventListener("click", goFullScreen);
}

if (videoContainer) {
  init();
}
