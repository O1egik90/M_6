const trafficLightEg = document.querySelector('#trafficLight1');

function makeGreen() {
    trafficLightEg.style.background = ('green');
    trafficLightEg.removeEventListener('click', makeGreen);
   
};
trafficLightEg.addEventListener('click',makeGreen);

const trafficLightEy = document.querySelector('#trafficLight2');

function makeYellow() {
    trafficLightEy.style.background = ('yellow');
    trafficLightEy.removeEventListener('click', makeYellow);
    
};

trafficLightEy.addEventListener('click',makeYellow);

const trafficLightEr = document.querySelector('#trafficLight3');

function makeRed() {
    trafficLightEr.style.background = ('red');
    trafficLightEr.removeEventListener('click', makeRed);
    
};

trafficLightEr.addEventListener('click',makeRed);

const trafficLightEB = document.querySelectorAll('#circle')


// в общем я тут накошмарил сам не пойму чего. Не хватило мне знаний создать интерактивный светофор...