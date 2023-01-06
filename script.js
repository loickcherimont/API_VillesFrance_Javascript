import { clearPreviousResults, countResults, fetchFranceCities } from "./utils/functions.js";

// GLOBAL
const emptyError = document.querySelector('#error');
const cities = await fetchFranceCities("https://geo.api.gouv.fr/communes");

// Process user request if form is submitted
document.getElementById('form')
        .addEventListener('submit', getCityInformations);


function getCityInformations(e) {
    e.preventDefault();

    clearPreviousResults();

    // PROCESS
    // Clean user request
    const userRequestCity = document.getElementById('userRequestCity').value.trim();

    checkIfEmpty(userRequestCity);

    checkIfValid(userRequestCity);

    // Display requested city and its informations
    cities.forEach(city => {
        // User's request becomes case-insensitive
        let caseInsensitiveCity = city['nom'].toLowerCase();

        if(caseInsensitiveCity === userRequestCity.toLowerCase()) {
            let cityCardTemplate = document.getElementById('cardLayout').content.cloneNode(true);
            let cityCard = cityCardTemplate.querySelector('.card');

            cityCard.querySelector('#cityName').innerText = city['nom'];
            cityCard.querySelector('#cityDepartmentCode').innerText = city['codeDepartement'];
            cityCard.querySelector('#cityPopulation').innerText = city['population'];
            cityCard.querySelector('#cityZips').innerText = city['codesPostaux'];

            document.querySelector('#results').append(cityCard);

            // Debug: 
            console.log(city);
        }
    })

    countResults();

    this.reset();

}

// If empty returns error message
function checkIfEmpty(userRequestCity) {
    if(!userRequestCity) {
        emptyError.classList.remove('d-none');
        return;
    } else {
        emptyError.classList.add('d-none');
    }
    
}

function checkIfValid(userRequestCity) {
    let onlyNames = [];

    for(const city of cities) {
        onlyNames.push(city['nom']);
    }

    onlyNames = onlyNames.map(city => city.toLowerCase());

    if(onlyNames.indexOf(userRequestCity.toLowerCase()) === -1) {
        emptyError.classList.remove('d-none');
        return;
    }

    emptyError.classList.add('d-none');
}
