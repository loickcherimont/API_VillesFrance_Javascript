import { countResults, fetchFranceCities, uiReset } from "./utils/functions.js";

const cities = await fetchFranceCities("https://geo.api.gouv.fr/communes");


try {
    // const cities = await fetchFranceCities("https://geo.api.gouv.fr/communes");
    // process(cities);
} catch (e) {
    console.error(e);
}

document.getElementById('form')
    .addEventListener('submit', (e) => {
        e.preventDefault();
        uiReset();
        const form = e.target;

        let formData = new FormData(form);

        let q = prepare(formData.get('user_request'), cities);
        uiDisplay(q, cities);
        countResults();
        form.reset();
    })

// Clean the query
// Check if it is valid
// Before the API works
// Parameters: query string and data json
function prepare(query, data) {
    let onlyNames = [];
    const emptyError = document.querySelector('#error');


    query = query.trim();

    console.log(query, query.length)

    // Check if request is empty
    // to display error message
    if (!query) {
        emptyError.classList.remove('d-none');
        return query
    } else {
        emptyError.classList.add('d-none');
    }

    // Create an array containing only city names
    onlyNames = data.map(city => city['nom'].toLowerCase());

    if (onlyNames.indexOf(query.toLowerCase()) === -1) {
        console.log("N'existe pas!")
        emptyError.classList.remove('d-none');
        return null
    } else {
        console.log("Existe!")
        emptyError.classList.add('d-none');
    }

    return query;
}

// Display on the screen the results
// Of user query
// Parameters: query string and data json
function uiDisplay(query, data) {

    data.forEach(city => {
        
        // To ease the research
        // Change normal case into lower case
        let caseInsensitiveCity = city['nom'].toLowerCase();

        if (caseInsensitiveCity === query.toLowerCase()) {
            let cityCardTemplate = document.getElementById('cardLayout').content.cloneNode(true);
            let cityCard = cityCardTemplate.querySelector('.card');

            cityCard.querySelector('#cityName').innerText = city['nom'];
            cityCard.querySelector('#cityDepartmentCode').innerText = city['codeDepartement'];
            cityCard.querySelector('#cityPopulation').innerText = city['population'];
            cityCard.querySelector('#cityZips').innerText = city['codesPostaux'];

            document.querySelector('#results').append(cityCard);
        }
    });
}