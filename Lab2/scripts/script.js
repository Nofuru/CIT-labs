const API_KEY = "06718892deb364536789e8cba91a4090";
const city = "Ростов-на-Дону";
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${API_KEY}`;

fetch(url, {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp;
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;
});
