const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('searchbtn');
const errorText = document.getElementById('error-msg')

searchBtn.addEventListener('click',() => {
    const city = cityInput.value.trim();

    if (city == "") {
        errorText.textContent = "Please enter a valid city name !";
        return;
    }

    errorText.textContent = "";
    console.log("valid city enterd :", city);

    cityInput.value = "";
}
);

cityInput.addEventListener('keydown',(event) =>{
    if(event.key === 'Enter'){
        searchBtn.click();
    }
});

function weatherUrl(cityName){
const fullUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;
return fullUrl;
}

console.log(weatherUrl("mumbai"));
console.log(weatherUrl("alwar"));

async function getWeatherData(cityName) {
    const url = weatherUrl(cityName);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)
    const data = await response.json();
    return data;
}

getWeatherData("kochi").then((data) => {
  console.log("FEATURE 5 DATA:", data);
});
