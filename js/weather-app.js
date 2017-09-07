"use strict";
(function () {

$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather",
    type: "GET",
    data: {
        APPID: "34b135188b7c0ee901808521cc501b28",
        q:  "San Antonio, TX",
        units: "imperial"
    }

}).done(function(data){
    let maxTemp = data.main.temp_max;
    let minTemp = data.main.temp_min;
    let icon = data.weather[0].icon;
    let main = data.weather[0].main;
    let wind = data.wind.speed;
    let humiidity = data.main.humidity;
    let pressure = data.main.pressure;
    let des = data.weather[0].description;
    let iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
    //
    $('#weather').html(minTemp + "&#176" + " / " + maxTemp + "&#176" + "<br>");
    $("#weather").append("<img src='" + iconUrl  + "'>" + "<br>");
    $('#weather').append(main + ": " + des + "<br>");
    $('#weather').append("Humidity: " + humiidity + "<br>");
    $('#weather').append("Wind: " + wind + "<br>");
    $('#weather').append("Pressure: " + pressure + "<br>");
    console.log(data);

// console.log(data);

    });






















})();