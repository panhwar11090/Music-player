// Get the Dom Elements
const container = document.getElementById('container');
const previousBtn = document.getElementById('previous');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressBar = document.getElementById('progress-bar');
const title = document.getElementById('song-title');
const albumArt = document.getElementById('album-art');

//track Arrayy
const tracks = ['bayan','khalid'];

//Index of currently playing song
let trackIndex = 1;

// Load the initial track
loadTrack(tracks[trackIndex]);

// function to load selected track
function loadTrack(track){
    // update the title of the song
    title.innerText = track;
    // update the src in the audio elemnet with the audio file of the selected track
    audio.src = `music/${track}.mp3`;
    // update the src in the img elemnet with the img file of the selected track
    albumArt.src = `images/${track}.jpg`;
}

//Function to play the track
function playTrack(){
    // Add the second class play to the conatiner
    container.classList.add('play');
    // Remove the play icon and display the pause icon insted
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    // play the track using the audio elemnt
    audio.play();

}

//Function to pause the track
function pauseTrack(){
    // Remove the second class play to the conatiner
    container.classList.remove('play');
    // Remove the pause icon and display the play icon insted
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    // pause the track using the audio elemnt
    audio.pause();

};





// Event listeners
// listen for play btn
playBtn.addEventListener('click' , () =>{
    // check the track is playing
    const ispPlaying = container.classList.contains('play');
    //conditional statemnt for based on status of audiopla back
    if(ispPlaying){
        // if the track is playing pause the track
        pauseTrack();
    }else{
        playTrack();
    }
});



