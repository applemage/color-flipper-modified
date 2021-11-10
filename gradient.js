const hex =[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
const btn = document.getElementById('btn');
const gradient1 = document.querySelector('.color1');
const gradient2 = document.querySelector('.color2');
const body = document.getElementsByTagName('body');
     

btn.addEventListener('click', function(){
    let gradientColor1 = '#'
    for(let i = 0; i < 6; i++){
        gradientColor1 += hex[getRandomHex()]; 
    }
    gradient1.textContent = gradientColor1;
    let gradientColor2 = '#'
    for(let j = 0; j < 6; j++){
        gradientColor2 += hex[getRandomHex()];
    }
    gradient2.textContent = gradientColor2;
});

function getRandomHex(){
    return Math.floor(Math.random() * hex.length)
}

let generateGrad = () =>{
    let color1 = gradientColor1;
    let color2 = gradientColor2;
    let angle = Math.floor(Math.random() * 360);
   document.body.style.backgroundColor = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}