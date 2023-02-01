
const pressed=[];
const secretcode='wesbos';


window.addEventListener('keyup',(e)=>{
    console.log(e.key);
    pressed.push(e.key);

    pressed.splice(-secretcode.length -1 ,pressed.length - secretcode.length);
    if(pressed.join('').includes(secretcode)){
        console.log('DING DING');
        cornify_add();
        // this will display the unicorn on the screen

    }
    
    console.log(pressed);
    

});