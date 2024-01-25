const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6557f89d06msh7993989780b8428p13d3cajsnd7e7c6ec1b21",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
  cityName.innerHTML = city;

  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      cloud_pct.innerHTML = data.cloud_pct;
      temp.innerHTML = data.temp;
      temp2.innerHTML = data.temp;
      feels_like.innerHTML = data.feels_like;
      humidity.innerHTML = data.humidity;
      humidity2.innerHTML = data.humidity;
      min_temp.innerHTML = data.min_temp;
      max_temp.innerHTML = data.max_temp;
      wind_speed.innerHTML = data.wind_speed;
      wind_speed2.innerHTML = data.wind_speed;
      wind_degrees.innerHTML = data.wind_degrees;
      sunrise.innerHTML = data.sunrise;
      sunset.innerHTML = data.sunset;
    })
    .catch(error => {
      console.error(error);
    });
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Nagpur");
