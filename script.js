import { fetchFranceCities } from "./utils/functions.js";

// Back Work
const cities = await fetchFranceCities("https://geo.api.gouv.fr/communes");

// Process user request if form is submitted
document.getElementById('form')
        .addEventListener('submit', getCityInformations);


function getCityInformations(e) {
    e.preventDefault();

    const userRequestCity = document.getElementById('userRequestCity').value;

    // Display requested city and its informations
    cities.forEach(city => {
        if(city['nom'] === userRequestCity) {
            document.getElementById('cityName').innerText = userRequestCity;
            document.getElementById('cityDepartmentCode').innerText = city['codeDepartement'];
            document.getElementById('cityPopulation').innerText = city['population'];
            document.getElementById('cityZips').innerText = city['codesPostaux'];
            console.log(city);
        }
    })

    this.reset();

}