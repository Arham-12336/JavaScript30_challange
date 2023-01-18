const panels=document.querySelectorAll('.panel');
//This will give all the panel

function toggleOpen(){
    this.classList.toggle('open');
}
function toggleactive(e){
       if(e.propertyName === 'open-active'){
        this.classList.toggle('open-active');
}
}
panels.forEach(panel =>panel.addEventListener('click',toggleOpen));
panels.forEach(panel =>panel.addEventListener('transitionend',toggleactive));