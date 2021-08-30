const loadLocation = () => {
    // Get Searchin fielf from html
    const searchfield = document.getElementById('search-field');
    const searchValue = searchfield.value;
    searchfield.value = '';

    // API url
    const ulr = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=2f699ac4438201c9e2b3c473ddde93a5`;
    fetch(ulr)
        .then(response => response.json())
        .then(data => displayTemp(data))
}

//This function for display the results
const displayTemp = (data) => {
    // Get details from Weather API
    const cityName = data.name;
    const temp = data.main.temp;
    const convertCelsius = temp - 273.15; // Convert Kelvin to celsius
    const description = data.weather[0].description;
    // select html all field
    document.getElementById('city').innerText = cityName;
    document.getElementById('city-temp').innerText = convertCelsius.toFixed(2);
    document.getElementById('description').innerText = description;

}