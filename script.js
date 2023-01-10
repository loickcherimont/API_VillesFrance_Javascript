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
                    let userRequestCity = document.getElementById('userRequestCity').value.trim();

                    userRequestCity = controlEntry(userRequestCity, cities);

                    if(!userRequestCity) {
                        e.currentTarget.reset();
                        return;
                    }
                
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

function controlEntry(userRequestCity, cities) {

    let onlyNames = [];
    const emptyError = document.querySelector('#error');

    // Check if request is empty
    // to display error message
    if (!userRequestCity) {
        emptyError.classList.remove('d-none');
        return userRequestCity
    } else {
        emptyError.classList.add('d-none');
    }

    // Check if request is valid
    // if city exists
    for (const city of cities) {
        onlyNames.push(city['nom']);
    }

    // onlyNames = onlyNames.map(city => city.toLowerCase());
    onlyNames = onlyNames.map(city => cancelSpecialLetters(city));

    // *** Debug
    console.log(onlyNames);
    console.log(userRequestCity);
    console.log(onlyNames.includes(userRequestCity.toLowerCase()));
    // End Debug ***

    if (onlyNames.indexOf(userRequestCity.toLowerCase()) === -1) {
        emptyError.classList.remove('d-none');
        return null
    }

    emptyError.classList.add('d-none');
    return userRequestCity;
}

function cancelSpecialLetters(cityName) {
    cityName = cityName.toLowerCase();
    cityName = cityName.replaceAll('à', 'a')
                       .replaceAll('â', 'a')
                       .replaceAll('æ', 'a');
    cityName = cityName.replaceAll('ç', 'c');
    cityName = cityName.replaceAll('é', 'e')
                       .replaceAll('è', 'e')
                       .replaceAll('ê', 'e')
                       .replaceAll('ë', 'e');
    cityName = cityName.replaceAll('î', 'i')
                       .replaceAll('ï', 'i');
    cityName = cityName.replaceAll('ô', 'o')
                       .replaceAll('œ', 'o');
    cityName = cityName.replaceAll('ù', 'u')
                       .replaceAll('û', 'u')
                       .replaceAll('ü', 'u');
    cityName = cityName.replaceAll('ÿ', 'y');

    return cityName;
}