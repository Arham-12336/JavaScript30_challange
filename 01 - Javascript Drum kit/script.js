window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio);

    if(!audio){
        return;  // no audio
    }
    audio.currentTime = 0; //rewind to start
    audio.play();
    key.classList.add('playing');    


});
const keys=document.querySelectorAll('.key');
keys.forEach(key=>{
    key.addEventListener('transitionend',()=>{
        key.classList.remove('playing');

    })});
