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

// Function to switch Prev song
function prevTrack(){
    // Decrement the value of trackindex by 1 to select the track from the track index array
    trackIndex--;
    //Check if selected track index is less than 0
    if(trackIndex < 0){
        // Reassign the trackIndex to last track in the trackArray
        trackIndex  = tracks.length-1;

    };
    // load the selected track
    loadTrack(tracks[trackIndex]);
    //play the selected track
    playTrack();
};

// Function to switch Next song
function nextTrack(){
    // Decrement the value of trackindex by 1 to select the track from the track index array
    trackIndex ++;
    //Check if selected track index is less than 0
    if(trackIndex > tracks.length-1){
        // Reassign the trackIndex to last track in the trackArray
        trackIndex  = 0;

    };
    // load the selected track
    loadTrack(tracks[trackIndex]);
    //play the selected track
    playTrack();
};

// function to update progeress bar
function updateProgress(e){
    //destructure the total duration and currenttime of the audio
    const {duration , currentTime} = e.srcElement;
    //Calculate the percentage of overall audio played currenttime and total duration
    const progeressPercent = currentTime / duration * 100;
    //Reassing widht of progress bar using the progressPercentage
    progressBar.style.width = `${progeressPercent}%`
}

// Function to set the Progress Bar
function setProgress(e) {
    // Get the overall width in px for progress bar container
    const width = this.clientWidth;
    // Get the x axis px value for the location of click on the progress bar container
    const clickLocation = e.offsetX;
    // Get the total duration of the track
    const duration = audio.duration;
    // Reassign the currentTime of audio track by calculating based on above metrics
    audio.currentTime = clickLocation / width * duration;
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

//2 Listen for click on prev btn
previousBtn.addEventListener('click', prevTrack);

//3 Listen for click on next btn
nextBtn.addEventListener('click', nextTrack);

//4 Listen for a timeupddate on audio element
audio.addEventListener('timeupdate', updateProgress)

// 5. Listen for click on the progress bar
progress.addEventListener('click', setProgress);

// 6. Listen for end of playback for current track
audio.addEventListener('ended', nextTrack);

