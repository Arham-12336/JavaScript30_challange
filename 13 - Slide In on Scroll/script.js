// what this function do is you pass the function as a parameter and it wait 20 milliseconds
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

const sliderimages=document.querySelectorAll('.slide-in');
function checkSlide(){
    sliderimages.forEach(sliderimage=>{

        //halfway through the images

        const slidesInAt=(window.scrollY+window.innerHeight)-sliderimage.Height/2;

        //bottom of the image
        const imagebottom=sliderimage.offsetTop+sliderimage.Height;


        const ishalfshown=slidesInAt > sliderimage.offsetTop;

        const isnotscrollpast = window.scrollY < imagebottom;

        if(ishalfshown && isnotscrollpast){
            sliderimage.classList.add('active');
            
        }
        else{
            sliderimage.classList.remove('active');
              }
        
    });


}

window.addEventListener('scroll',debounce(checkSlide));

