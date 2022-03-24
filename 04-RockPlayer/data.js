let fastR = document.querySelector('#fast-r');
let previous = document.querySelector('#previous');
let play = document.querySelector('#play');
let fastF = document.querySelector('#fast-f');
let next = document.querySelector('#next');
let stopBtn = document.querySelector('#stopBtn');
let replay = document.querySelector('#replay');
let video = document.querySelector('#video1');
let container = document.querySelector('.container');
let controller = document.querySelector('.controller');
let title = document.querySelector('#title');
let homeBtn = document.querySelector('#homeBtn');
let fullScreen = document.querySelector('#fullScreen');
let progressBar = document.querySelector('#progress-wrapper');
let progress = document.querySelector('#progress');
let index = 0;


const videos = [
    {
      estilo: 'Rock n Roll',
      src: '/videos/Joan jett I love Rock n roll.webm',
      banda: 'Joan jett',
      musica: 'I love Rock n roll',
      
      
      
    },

    {
        estilo: 'Grunge',
        src: '/videos/Temple Of The Dog - Hunger Strike.mp4',
        banda: 'The Temple Of The Dog',
        musica: 'Hunger Strike',
               
        
      },
]