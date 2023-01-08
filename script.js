import { clearPreviousResults, countResults, fetchFranceCities } from "./utils/functions.js";

try {
    const cities = await fetchFranceCities("https://geo.api.gouv.fr/communes");
    process(cities);
} catch(e) {
    console.error(e);
}

function process(cities) {
    // Process user request if form is submitted
    document.getElementById('form')
            .addEventListener('submit', (e) => {
                    e.preventDefault();
                
                    clearPreviousResults();

                
                    // PROCESS
                    // Clean user request
                    const userRequestCity = document.getElementById('userRequestCity').value.trim();

                    prepareUserRequest(userRequestCity, cities);
                
                    // Display requested city and its informations
                    cities.forEach(city => {
                        // User's request becomes case-insensitive
                        let caseInsensitiveCity = city['nom'].toLowerCase();
                
                        if (caseInsensitiveCity === userRequestCity.toLowerCase()) {
                            let cityCardTemplate = document.getElementById('cardLayout').content.cloneNode(true);
                            let cityCard = cityCardTemplate.querySelector('.card');
                
                            cityCard.querySelector('#cityName').innerText = city['nom'];
                            cityCard.querySelector('#cityDepartmentCode').innerText = city['codeDepartement'];
                            cityCard.querySelector('#cityPopulation').innerText = city['population'];
                            cityCard.querySelector('#cityZips').innerText = city['codesPostaux'];
                
                            document.querySelector('#results').append(cityCard);
                        }
                    });
                
                    countResults();
                
                    e.currentTarget.reset();
            });
}

function prepareUserRequest(userRequestCity, cities) {

    let onlyNames = [];
    const emptyError = document.querySelector('#error');

    // Check if request is empty
    // to display error message
    if (!userRequestCity) {
        emptyError.classList.remove('d-none');
        return;
    } else {
        emptyError.classList.add('d-none');
    }

    // Check if request is valid
    // if city exists
    for (const city of cities) {
        onlyNames.push(city['nom']);
    }

    onlyNames = onlyNames.map(city => city.toLowerCase());

    if (onlyNames.indexOf(userRequestCity.toLowerCase()) === -1) {
        emptyError.classList.remove('d-none');
        return;
    }

    emptyError.classList.add('d-none');
}