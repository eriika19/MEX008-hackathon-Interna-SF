const inputName = document.getElementById('input-name');
const buttonName = document.getElementById('button-wallet');
const content = document.getElementById('content');


const showSecondSection = document.getElementById('home');

const hideFirstSection = document.getElementById('first-section');



const getName = () => { 
    hideFirstSection.classList.add('hide');
    showSecondSection.classList.remove('hide');
       content.innerHTML = 'Bienvenid@' + inputName.value + 'Empecemos a comprar con calidad y conciencia';
    }


