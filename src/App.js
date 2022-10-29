import './App.css';
import Weather from './Weather';
import Forecast from './Forecast';
function App() {
  return (
    <div className="App">
    <div className="background">
      <div className="container">
        <Weather city="Dallas" temp={31} description="Sunny" wind="15" />
        <h3>Today</h3>
        <h4 id="dateTime">Monday 7:51PM</h4>
        <div
          className="border border-4 border-primary rounded"
          id="forecastDaily"
        >
          <div className="row forecast">
            <Forecast day="Mon" temp={30} />
            <Forecast day="Tues" temp={36} />
            <Forecast day="Wed" temp={29} />
            <Forecast day="Thurs" temp={34} />
            <Forecast day="Fri" temp={33} />
          </div>
        </div>

        <div className="search">
          <form id="weather-form">
            <input
              type="text"
              id="city-input"
              className="inputBox"
              placeholder="Enter in city"
            />
            <input type="submit" value="Submit" className="submitButton" />
            <input
              type="submit"
              id="current-input"
              value="Location"
              className="locationButton"
            />
          </form>
        </div>
      </div>
    </div>
    <p>
      <a href="https://github.com/JessiceM/Weather-App">Open-source code</a>{" "}
      by Jessica Mendoza
    </p>
  </div>
  );
}

export default App;
