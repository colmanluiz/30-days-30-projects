const search = document.querySelector(".header button");

function searchCity(event) {
  event.preventDefault();

  const cidade = document.querySelector(".header input").value;

  const apiKey = "1069b1faee7a79fd025287d7b2690686";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cidade}`;

  async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    let imgIcon = document.querySelector(".tempo-img img");
    // if (data.weather[0].main === "Clouds") {
    //   imgIcon.setAttribute("src", "./images/clouds.png");
    // }
    switch (data.weather[0].main) {
      case "Clouds":
        imgIcon.src = "./images/clouds.png";
        break;
      case "Rain":
        imgIcon.src = "./images/rain.png";
        break;
      case "Clear":
        imgIcon.src = "./images/clear.png";
        break;
      case "Snow":
        imgIcon.src = "./images/snow.png";
        break;
      case "Mist":
        imgIcon.src = "./images/mist.png";
        break;
      case "Drizzle":
        imgIcon.src = "./images/drizzle.png";
        break;
      default:
        imgIcon.src = "./images/clear.png";
        break;
    }
  }
  checkWeather();
}

search.addEventListener("click", searchCity);
