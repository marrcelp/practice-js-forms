const form = document.querySelector('form');
const inputLogin = document.querySelector('#formLogin');
const labelForLogin = document.querySelector('label[for="formLogin"]');
const labelForPass1 = document.querySelector('label[for="formPass1"]');
const labelForPass2 = document.querySelector('label[for="formPass2"]');
const inputPass1 = document.querySelector('#formPass1');
const inputPass2 = document.querySelector('#formPass2');
const labelForRegulations = document.querySelector('label[for="formAccept"]');
const checkbox = document.querySelector('#formAccept');

const handleSubmit = function(e){
    e.preventDefault();

    if (!inputLogin.value.includes('@')){
        labelForLogin.style.color = 'red';
    } else {
        labelForLogin.style.color = 'black';
    }

    if (inputPass1.value.length < 6){
        labelForPass1.style.color = 'red';
    } else {
        labelForPass1.style.color = 'black';
    }

    if (inputPass1.value !== inputPass2.value) {
        labelForPass2.style.color = 'red';
    } else {
        labelForPass2.style.color = 'black';
    }

    if (!checkbox.checked){
        labelForRegulations.style.color = 'red';
    } else {
        labelForRegulations.style.color = 'black';
    }
    
}

form.addEventListener('submit', handleSubmit);
