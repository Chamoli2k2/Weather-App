const ApiKey = "a86525eb1d0b528726bd209fa50e11ca";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const SearchBox = document.querySelector(".search input");
const SearchButtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".weather-icon")


// Api calling
async function CheckWeather(city){
    // Fetching data and waiting for response 
    const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        let data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds"){
            WeatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            WeatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            WeatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            WeatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            WeatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

// Adding event Listner
document.addEventListener('click',()=>{
    CheckWeather(SearchBox.value);
})

CheckWeather(city);
