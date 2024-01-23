const search = document.querySelector(".header button");

function searchCity(event) {
  event.preventDefault();

  const cidade = document.querySelector(".header input").value;

  const apiKey = "1069b1faee7a79fd025287d7b2690686";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cidade}`;

  async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);

    const html = document.querySelector("main");
    const error = document.querySelector(".error");

    if (response.status === 404) {
      error.classList.add("ativo");
      html.classList.remove("ativo");
    } else {
      html.classList.add("ativo");
      error.classList.remove("ativo");
    }

    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    let imgIcon = document.querySelector(".tempo-img img");
    const box = document.querySelector(".box");
    // if (data.weather[0].main === "Clouds") {
    //   imgIcon.setAttribute("src", "./images/clouds.png");
    // }
    switch (data.weather[0].main) {
      case "Clouds":
        imgIcon.src = "./images/clouds.png";
        box.className = "box";
        box.classList.add("box-cloud");
        break;
      case "Rain":
        imgIcon.src = "./images/rain.png";
        box.className = "box";
        box.classList.add("box-rain");
        break;
      case "Clear":
        imgIcon.src = "./images/clear.png";
        box.className = "box";
        box.classList.add("box-clear");
        break;
      case "Snow":
        imgIcon.src = "./images/snow.png";
        box.className = "box";
        box.classList.add("box-snow");
        break;
      case "Mist":
        imgIcon.src = "./images/mist.png";
        box.className = "box";
        box.classList.add("box-mist");
        break;
      case "Drizzle":
        imgIcon.src = "./images/drizzle.png";
        break;
      default:
        imgIcon.src = "./images/clear.png";
        box.className = "box";
        break;
    }
  }

  checkWeather();
}

search.addEventListener("click", searchCity);
