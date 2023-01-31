// First we get our elements from the DOM

const player=document.querySelector('.player');
const video=player.querySelector('.viewer');
const progress=player.querySelector('.progress');
const progressBar=player.querySelector('.progress__filled');
const toggle=player.querySelector('.toggle');
const skipButtons=player.querySelectorAll('[data-skip]');
const ranges=player.querySelectorAll('.player__slider');



progressBar.style.width=0;


//Build out functions

function togglePlay(){
    if(video.paused){
        video.play();

    }
    else{
        video.pause();
    }

}
function updateButton(){
    const icon=this.paused? '►' : '❚ ❚';
    toggle.textContent = icon;
    console.log("updateButton")
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);  
}
function handleRangeUpdate(){
    video[this.name]=this.value;
    console.log(this.value);
}
function handleProgress(){
    const percent=(video.currentTime/video.duration)*100;
    progressBar.style.flexBasis=`${percent}%`;
}
function scrub(e){
    const scrubTime=(e.offsetX/progress.offsetWidth)*video.duration;
    video.currentTime = scrubTime;
}




//Hook up for the event listeners

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

progress.addEventListener('click', scrub);
let mousedown=false;

progress.addEventListener('mousemove', ()=>{
    if(!mousedown){
        scrub();
    }

});
progress.addEventListener('mousedown',()=> mousedown=true);
progress.addEventListener('mouseup',()=> mousedown=false);









