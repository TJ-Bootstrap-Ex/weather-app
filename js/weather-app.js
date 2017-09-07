"use strict";
(function () {


function getWeather(lat, lng) {


        if (lat === null){
            lat = 29.423017
         }
        if (lng === null) {
            lng = -98.48527;
        }

        console.log(lat);


    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast",
        type: "GET",
        data: {
            APPID: "34b135188b7c0ee901808521cc501b28",
            lat: lat,
            lon: lng,
            units: "imperial",
            cnt: 3
        }

    }).done(function (data) {

        var day = "";

        data.list.forEach(function (el, i) {

            var maxTemp = data.list[i].main.temp_max;
            var minTemp = data.list[i].main.temp_min;
            var icon = data.list[i].weather[0].icon;
            var main = data.list[i].weather[0].main;
            var wind = data.list[i].wind.speed;
            var humiidity = data.list[i].main.humidity;
            var pressure = data.list[i].main.pressure;
            var des = data.list[i].weather[0].description;
            var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";


            // $('#weather').append(minTemp + "&#176" + " / " + maxTemp + "&#176" + "<br>");
            // $("#weather").append("<img src='" + iconUrl  + "'>" + "<br>");
            // $('#weather').append(main + ": " + des + "<br>");
            // $('#weather').append("Humidity: " + humiidity + "<br>");
            // $('#weather').append("Wind: " + wind + "<br>");
            // $('#weather').append("Pressure: " + pressure + "<br>");

            day += "<div class='day'>" +
                minTemp + "&#176" + " / " + maxTemp + "&#176" + "<br>" +
                "<img src=\'" + iconUrl + "\'>" + "<br>" +
                main + ": " + des + "<br>" +
                "Humidity:" + humiidity + "<br>" +
                "Wind: " + wind + "<br>" +
                "Pressure: " + pressure + "<br>" +
                "</div>";


        });
            $("#weather").html(day);

    });
};

getWeather(29.423017, -98.48527);

    // Set our map options
    var mapOptions = {
        // Set the zoom level
        zoom: 5,

        // This sets the center of the map at our location
        center: {
            lat:  29.4241,
            lng: -98.4936
        }
    };

    // Render the map
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var myLocation = {lat:29.426791 , lng: -98.489602};


    var marker = new google.maps.Marker({
        map: map,
        draggable:true,
        animation: google.maps.Animation.DROP,
        position: myLocation

    });

    marker.addListener("dragend", function(){
       var lat = marker.getPosition().lat();
        var lng = marker.getPosition().lng();
        getWeather(lat, lng);

    })





















})();