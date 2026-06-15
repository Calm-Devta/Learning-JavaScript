const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( (button) =>  {
     button.addEventListener('click', (i) => {
        if(i.target.id === 'red') {
            body.style.backgroundColor = 'red';
        }
        if(i.target.id === 'grey') {
            body.style.backgroundColor = 'grey';
        }
        if(i.target.id === 'blue') {
            body.style.backgroundColor = 'blue';
        }
        if(i.target.id === 'green') {
            body.style.backgroundColor = 'green';
        }
        if(i.target.id === 'white') {
            body.style.backgroundColor = 'white';
        }
        });
    });