console.log("Welcome TO spotify");
// Initialise the variables
let songIndex = 0;
let audioElement = new Audio ('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songName:"Wrio.Mortals( feat.Lawren Bramen)",filePath:"songs/1.mp3",coverPath: "2.jpg" },
    {songName:"cielo-humma-humma",filePath:"songs/2.mp3",coverPath: "3.jpg" },
    {songName:"DEAF KEV - Invensible [NCS RELEASE ]",filePath:"songs/3.mp3",coverPath: "4.jpg" },
    {songName:"Different Heaven & EHIDE- My Heart",filePath:"songs/4.mp3",coverPath: "5.jpg" },
    {songName:"Blue Days [NCS RELEASE]",filePath:"songs/5.mp3",coverPath: "6.jpg" },
    {songName:"Just vibing (Drake)",filePath:"songs/6.mp3",coverPath: "7.jpg" },
    {songName:"Little-Hops (LUCY J)",filePath:"songs/7.mp3",coverPath: "8.jpg" },
    {songName:"HIGH AF [NCS RELEASE]",filePath:"songs/8.mp3",coverPath: "9.jpg" },
    {songName:"Clear Water [NCS RELEASE]",filePath:"songs/9.mp3",coverPath: "10.jpg" },
    {songName:"Moody Days [NCS RELEASE]",filePath:"songs/1.mp3",coverPath: "2.jpg" },
]

songItems.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
// audioElement.play();
// handle play/pause click

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused ||audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
    
})
// Listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
//Update seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressbar.value = progress;
// console.log(myProgressbar.value);
})

myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime = ((myProgressbar.value*audioElement.duration)/100);
})
const makeAllPlays = ()=> {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
})
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeAllPlays();
        songIndex  = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9)
    {
        songIndex = 0;
    }
    else{
        songIndex+=1;
    }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterSongName.innerText = songs[songIndex].songName;
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex = 0;
    }
    else{
        songIndex-=1;
    }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterSongName.innerText = songs[songIndex].songName;
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
})