// works : http://api.openweathermap.org/data/2.5/weather?q=hayes&appid=05273430f8884d71c588fbf600e823e5
let API_key = `05273430f8884d71c588fbf600e823e5`;

let resetFields = () => {
  document.querySelector("#error").innerHTML = "";
  document.querySelector("#temp > th").innerHTML = "";
  document.querySelector("#temp > td").innerHTML = "";
  document.querySelector("#feelslike > th").innerHTML = "";
  document.querySelector("#feelslike > td").innerHTML = "";
  document.querySelector("main > h3").innerHTML = "";
  document.querySelector("#weather").innerHTML = "";
};

const searchWeather = () => {
  let cityname = document.querySelector("input").value;
  let data = fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_key}`
  )
    .then((response) => response.json())
    .then((data) => {
      resetFields();
      if (data.cod == "200") {
        document.querySelector("#temp > th").innerHTML = "Temperature";
        document.querySelector("#temp > td").innerHTML = `${Math.trunc(
          data.main.temp - 273
        )}°C`;
        document.querySelector("#feelslike > th").innerHTML = "Feels like";
        document.querySelector("#feelslike > td").innerHTML = `${Math.trunc(
          data.main.feels_like - 273
        )}°C`;
        document.querySelector("#weather").innerHTML =
          data.weather[0].description;
        console.log(data);
      } else if (data.cod == "404") {
        document.querySelector(
          "#error"
        ).innerHTML = `Couldn't find your city! :(`;
        //console.log(data);
      } else {
        throw "Some error occurred";
      }
    })
    .catch((err) => console.log(err));
  //
};
