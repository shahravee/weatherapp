import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
function App() {
  const apiKey = "3ecee140fc38b0f3af35a739af06367f";
  const [data, Setdata] = useState();
  const [inputCity, SetInputCity] = useState();
  const getWeatherDetails = (cityName) => {
    if (!cityName) return;
    const apiURl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiURl)
      .then((res) => {
        console.log("response", res, data);
        Setdata(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  function handleSearch() {
    getWeatherDetails(inputCity);
  }
  function handleChangeInput(event) {
    SetInputCity(event.target.value);
  }
  useEffect(() => {
    getWeatherDetails("delhi");
  }, []);
  return (
    <>
      <div className="col-md-12">
        <div className="bgweather">
          <h1 className="heading">weather app</h1>
          <div className="d-grid gap-3 col-4 mt-4">
            <input
              type="text"
              className="form-control"
              onChange={handleChangeInput}
              value={inputCity}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        <div className="col-md-12 text-center mt-5">
          <div className="shadow rounded weatherResultBox">
            <img
              className="img-src"
              src="https://cdn.pixabay.com/photo/2017/06/04/19/20/weather-2371967_1280.png"
            />
            <h5 className="city">{data?.name}</h5>
            <h3 className="temp">{(data?.main?.temp - 273.15).toFixed(2)}°C</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
