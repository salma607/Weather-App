const apikey = "4a3d723873b62a50ae00d73b710f1a21";
var apiurl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=london";
const searchBox = document.getElementById("in");
const searchBtn = document.getElementById("search-button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather() {
    const response = await fetch(apiurl + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + " °c";
    document.querySelector(".humid").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    //where is the api link ?
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "./images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "./images/clear.png";
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "./images/snow.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "./images/mist.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "./images/rain.png";
    } else if (data.weather[0].main == "Humidity") {
        weatherIcon.src = "./images/humidity.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "./images/drizzle.png";
    }

    document.querySelector("weather").style.display = "block";
}
searchBtn.addEventListener("click", function getName() {
    var searchword = searchBox.value;
    apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${searchword}`;
    checkweather();
});