const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const button = document.querySelector('button');
const result = document.querySelector('#result');

let birthDate;
const currentDate = new Date();

button.addEventListener('click', () => {
    const dayValue = day.value;
    const monthValue = month.value;
    const yearValue = year.value;

    if(dayValue.length > 2 || monthValue.length > 2 || yearValue.length != 4) {
        alert('Veuillez mettre une date valide');
    }
    else {
        birthDate = new Date(`${yearValue}-${monthValue.length === 1 ? '0' : ''}${monthValue}-${dayValue.length === 1 ? '0' : ''}${dayValue}`);
    }

    const difference = currentDate.getTime() - birthDate.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30.44);
    const years = Math.floor(months / 12);

    result.textContent = `Vous avez ${years} ans, ${months % 12 === 0 ? '' : months % 12 + ' mois'} et ${days % 30} jours.`;

});