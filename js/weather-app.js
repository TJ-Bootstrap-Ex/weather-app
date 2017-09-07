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
    $('#weather').html(data.main.temp);
console.log(data);

    });






















})();