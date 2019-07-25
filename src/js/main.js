const inputName = document.getElementById('input-name');
const buttonName = document.getElementById('button-wallet');
const greet = document.getElementById('greet');


const firstSection = document.getElementById('first-section');
const home = document.getElementById('home');
const character = document.getElementById('character');
const footer = document.getElementById('footer');



const getName = () => { 
    firstSection.classList.add('hide');
    home.classList.remove('hide');
    character.classList.remove('hide');
    footer.classList.remove('hide');
    greet.innerHTML = 'Bienvenid@ ' + inputName.value + ' empecemos a comprar con calidad y conciencia.';
    };

buttonName.addEventListener('click', () => getName());
