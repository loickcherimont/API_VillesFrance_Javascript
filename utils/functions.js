export async function fetchFranceCities(url) {
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error('Error', response.status);
    }

    return response.json();
}

// // Fetch data about city requested by user
// export function getCityInformations(e) {
//     e.preventDefault();
//     const userCity = document.getElementById('userCity').value;
//     document.getElementById('cityName').innerText = `City : ${userCity.toUpperCase()}`;
//     this.reset();
// }