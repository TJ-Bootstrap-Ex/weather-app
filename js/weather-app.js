"use strict";
(function () {

$.ajax({
    url: "http://api.openweathermap.org/data/2.5/forecast",
    type: "GET",
    data: {
        APPID: "34b135188b7c0ee901808521cc501b28",
        q:  "San Antonio, TX",
        units: "imperial",
        cnt: 3
    }

}).done(function(data){


    data.list.forEach(function(el, i){

    var maxTemp = data.list[i].main.temp_max;
    var minTemp = data.list[i].main.temp_min;
    var icon = data.list[i].weather[0].icon;
    var main = data.list[i].weather[0].main;
    var wind = data.list[i].wind.speed;
    var humiidity = data.list[i].main.humidity;
    var pressure = data.list[i].main.pressure;
    var des = data.list[i].weather[0].description;
    var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";

    $('#weather').append(minTemp + "&#176" + " / " + maxTemp + "&#176" + "<br>");
    $("#weather").append("<img src='" + iconUrl  + "'>" + "<br>");
    $('#weather').append(main + ": " + des + "<br>");
    $('#weather').append("Humidity: " + humiidity + "<br>");
    $('#weather').append("Wind: " + wind + "<br>");
    $('#weather').append("Pressure: " + pressure + "<br>");


    console.log(maxTemp);

    });

    });

    // Set our map options
    var mapOptions = {
        // Set the zoom level
        zoom: 16,

        // This sets the center of the map at our location
        center: {
            lat:  29.426791,
            lng: -98.489602
        }
    };

    // Render the map
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);






















})();