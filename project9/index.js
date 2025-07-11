const apiKey = "249f7f92fcc737adde164dbf2feb592e";
const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-name");
const formEl = document.querySelector("form");
formEl.addEventListener("submit", () => {
    event.preventDefault();
    const cityName = cityInputEl.value;
    getWeatherData(cityName);
});
async function getWeatherData(cityName) {
    try {
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
        if (!responce.ok) {
            throw new Error("Network responce is not ok");

        }

        const data = await responce.json();
        console.log(data);
        const temperature = Math.round(data.main.temp);

        const depscription = data.weather[0].description;
        const icon = data.weather[0].icon;

        const details = [
            `feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity:${data.main.humidity}`,
            `wind speed:${data.wind.speed}`

        ]
        weatherDataEl.querySelector(".icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png">`;
        weatherDataEl.querySelector(".temperature").textContent = `${temperature}°C`;
        weatherDataEl.querySelector(".description").textContent = `${depscription}`;

        weatherDataEl.querySelector(".details").innerHTML = details.map((item) => {
            return `<div>${item}</div> `
        }).join("");

    } catch (error) {
        weatherDataEl.querySelector(".icon").innerHTML = "";
        weatherDataEl.querySelector(".temperature").textContent = "";
        weatherDataEl.querySelector(".description").textContent = "An error happened, please try again later";


        weatherDataEl.querySelector(".details").innerHTML = "";

    }
}
