const apiKey = 'c234a8327e2979c1217cdbf66488d894';
const searchButton = document.querySelector('.search-button');
const searchBar = document.querySelector('.search-bar');
const location = document.querySelector('.location');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');

searchButton.addEventListener('click', fetchWeather);

function fetchWeather() {
    const city = searchBar.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
            location.textContent = data.name;
            temperature.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
            description.textContent = data.weather[0].description;
        })
        .catch((error) => {
            location.textContent = 'City not found';
            temperature.textContent = '';
            description.textContent = '';
        });
}
