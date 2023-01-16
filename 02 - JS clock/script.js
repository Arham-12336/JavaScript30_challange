const secondhands=document.querySelector('.sec-hand');
const minutehands=document.querySelector('.min-hand');
const hourhands=document.querySelector('.hour-hand');
function setDate(){
const now=new Date();
const seconds=now.getSeconds();
const secondsDegrees=((seconds/60)*360) + 90;
secondhands.style.transform=`rotate(${secondsDegrees}deg)`;
const minutes=now.getMinutes();
const minutesDegrees=((minutes/60)*360) + 90;
minutehands.style.transform=`rotate(${minutesDegrees}deg)`;
const hours=now.getHours();
const hoursDegrees=((hours/60)*360) + 90;
hourhands.style.transform=`rotate(${hoursDegrees}deg)`;

console.log(seconds);


}
setInterval(setDate,1000);