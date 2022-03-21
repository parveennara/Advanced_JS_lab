const appid = "7e3f21edee540e6110af347b55eb1ab2";
const baseUrl = "https://api.openweathermap.org/data/2.5/";

let date = new Date();
let dateFormatted = date.toLocaleString("default", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

showWeatherDetails = (weatherData) => {
  let location = document.getElementById("name");
  location.innerHTML = `${weatherData.name}, ${weatherData.sys.country}`;

  let dateDisplay = document.getElementById("date");
  dateDisplay.innerHTML = `${dateFormatted}`;

  let temp = document.getElementById("temperature");
  temp.innerHTML = `${Math.round(weatherData.main.temp)} <span>&degc</span>`;

  let humidity = document.getElementById("humidity");
  humidity.innerHTML = `Humidity ${weatherData.main.humidity}%`;

  let weather = document.getElementById("weather");
  weather.innerHTML = `${weatherData.weather[0].main}`;
};

getWeatherDetails = (city) => {
  const url = `${baseUrl}weather?q=${city}&units=metric&appid=${appid}`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((weatherData) => {
      showWeatherDetails(weatherData);
    });
};

let query = (event) => {
  if (event.keyCode == 13) {
    getWeatherDetails(input.value);
  }
};

const input = document.getElementById("city");

input.addEventListener("keypress", query);
