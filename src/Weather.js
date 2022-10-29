import React from "react";
import axios from 'axios';
export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`);
    }

let apikey ="e5d2f23cc936c207378a1d9745e0ab60";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apikey}`;
axios.get(apiUrl).then(handleResponse);
    return <h2>Hello from Weather</h2>;
}