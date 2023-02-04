const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];


function strip(bandname){
    return bandname.replace(/^(a |the |an)/i, '').trim();
 
}
const sortedbands = bands.sort((a, b) => {
    if(strip(a) > strip(b)){
        return 1;
        
    }
    else{
        return -1;
    }
});
document.querySelector('#bands').innerHTML = sortedbands.map(band=> `<li>${band}</li>`).join('');


