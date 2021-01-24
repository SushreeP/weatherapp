// works : http://api.openweathermap.org/data/2.5/weather?q=hayes&appid=05273430f8884d71c588fbf600e823e5
let API_key = `05273430f8884d71c588fbf600e823e5`;
async function search() {
  let cityname = document.querySelector("input").value;
  console.log(cityname);
  let api_call = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_key}`
  )
    .then((res) => {
      let data = res.json();
      if (data.cod == "200") {
        console.log(data);
      }
      if (data.cod == "404") {
        document.querySelector(
          ".result"
        ).innerHTML = `Couldn't find your city! :(`;
        console.log(data);
      }
      return data;
    })
    .catch((err) => console.log(err));
}
