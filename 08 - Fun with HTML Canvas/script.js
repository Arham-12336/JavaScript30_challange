const canvas=document.querySelector('#draw');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

ctx.strokeStyle='#BADA55';


ctx.lineJoin='round';
ctx.lineCap='round';
ctx.lineWidth=50; //just to bold the lines


let isDrawing=false; //if drawing

let lastX=0;
let lastY=0;


let hue=0;
let direction=true; 

function draw(e){

    if(!isDrawing){
        return;   //stop the function when we are not drawing

    }
    ctx.strokeStyle=`hsl(${hue}, 100%, 50%)`;
    ctx.lineWidth=hue;

    console.log(e);
    ctx.beginPath();
    //start from
    ctx.moveTo(lastX,lastY);
    //go to
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();

    // The above code will draw a line from (0,0) to (e.offsetX,e.offsetY
    //so inorder to draw the line we need to set the lastX and lastY

    lastX=e.offsetX;
    lastY=e.offsetY;
    hue++; // increment the value and change the color

    if (hue>900){
        hue=0;
    }
    if(ctx.lineWidth>=100 || ctx.lineWidth<=1){
        direction=!direction;
    }
    if(direction){
        ctx.lineWidth++;
    }
    else{
        ctx.lineWidth--;
    }



    }

    //for every loop we need tip update the withd

// Now when we draw the line it will automatically set the lastX and lastY to where we end the first lint
// So instead of drawing multiple lines we will draw a single line

// so inorder to fix this
// canvas.addEventListener('mousedown', ()=> isDrawing=true);

//Instead of making it single line fucntion we make it a block function so we can do multiple things


canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mousedown', (e)=>{
    isDrawing=true;
    [lastX,lastY]= [e.offsetX,e.offsetY]; // Another cool way to update the lastX and Y using ES6
    

} );



canvas.addEventListener('mouseup', ()=> isDrawing=false);
canvas.addEventListener('mouseout', ()=> isDrawing=false);






