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
    let iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
    //
    $('#weather').html(minTemp + "&#176" + " / " + maxTemp + "&#176");
    $("#weather").html("<img src='" + iconUrl  + "'>");
    console.log(data.weather[0].icon);

// console.log(data);

    });






















})();