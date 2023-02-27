const hero=document.querySelector('.hero');
const text=hero.querySelector('h1');
const walk=100; //100px

function shadow(e)
{
    const width=hero.offsetWidth;
    const height=hero.offsetHeight;

    let { offsetX: x, offsetY: y}=e;

    if(this !== e.target)
    {
        x=x+e.target.offsetLeft;
        y=y+e.target.offsetTop;
    }

    const xwalk=Math.round((x/width*walk)-(walk/2));
    const ywalk=Math.round((y/height*walk)-(walk/2));
    console.log(xwalk,ywalk)

    text.style.textShadow=`
    ${xwalk}px ${ywalk}px 0 rgba(255,0,255,0.7),
    ${xwalk*-1}px ${ywalk}px 0 rgba(0,255,255,0.7),
    ${ywalk}px ${xwalk*-1}px 0 rgba(255,0,0,0.7),
    ${ywalk*-1}px ${xwalk}px 0 rgba(0,0,255,0.7)`;

}


hero.addEventListener('mousemove',shadow)