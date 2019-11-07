

/// Base Weather URL ///

let urlBase = 'https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/';   
console.log(urlBase)


/// Current Weather URL ///

let cityNameEl = 'Westwood';
console.log(cityNameEl)

let stateNameEl = 'California';
console.log(stateNameEl)

let apiKey = '920d96ae65e15457b79a12bd48743433'
console.log(apiKey)

let tempEl = 40.06;
console.log(tempEl)

let humidityEl = 52;
console.log(humidityEl)

let windEl = 2.55;
console.log(windEl)


let weatherMainUrl = urlBase + 'weather?q=' + cityNameEl + ',' + stateNameEl + tempEl + humidityEl + windEl + '&units=imperial&appid=' + apiKey
console.log(weatherMainUrl)


/// UV Weather URL ///

let latEl = 40.99
console.log(latEl)

let lonEl = -74.03
console.log(lonEl)


let uvUrl = urlBase + 'uvi?appid=' + apiKey + '&lat=' + latEl + '&lon=' + lonEl
console.log(uvUrl)


/// Forecast Weather URL ///

let countryEl = 'US';
console.log(countryEl)


let forecastUrl = urlBase + 'forecast?q=' + cityNameEl + ',' + countryEl
console.log(forecastUrl)


/// History Weather URL ///

let cityIdEl = 4940;  
console.log(4940)

let typeEl = 1;
console.log(typeEl)

let sunriseEl = 1573039954
console.log(sunriseEl)

let sunsetEl = 1573076815
console.log(sunsetEl)


let historyUrl = urlBase +  '/history/city?id=' + cityIdEl + '&type=hour&start=' + sunsetEl + '&end=' + sunsetEl
console.log(historyUrl)

    
/// Function created that hold the Ajax call and can call all ajax URL's ///

// console.log(data.main.temp)
// console.log(data.coord.lat)
// console.log(data.coord.lon)
// console.log(data.main.humidity)  
// console.log(data.sys.id) 
// console.log(data.sys.sunrise) 
// console.log(data.sys.sunset)

function ajaxCallUrl(weatherMainUrl){
    console.log(weatherMainUrl)      
    $.ajax({
        url: weatherMainUrl,
        method: 'GET'
    }).then(function(data){
        console.log(data);
        weather(data);
    })                            
    }

/// Main AJAX URL Call ///

ajaxCallUrl(weatherMainUrl)
ajaxCallUrl(forecastUrl)
ajaxCallUrl(uvUrl)
ajaxCallUrl(historyUrl)

$('#a1').append().text(cityNameEl)
console.log(cityNameEl)

$('#a2').append().text(stateNameEl)
console.log(stateNameEl)

$('#a3').append().text(countryEl)
console.log(countryEl)

$('#a4').append().text(tempEl)
console.log(tempEl)

$('#a5').append().text(humidityEl)
console.log(humidityEl)

$('#a6').append().text(windEl)
console.log(windEl)

$('#a7').append().text(latEl)
console.log(tempEl)

$('#a8').append().text(lonEl)
console.log(humidityEl)

$('#a9').append().text(sunriseEl)
console.log(windEl)

$('.btn').click(function() {
    location.reload();
});




/// Function That Defines The Data That Will Be Called In The AJAX Function ///

function weather(data) {
    if (data.coord){
        let latEl = data.coord.lat;
        console.log(latEl)
        let lonEl = data.coord.lon;
        console.log(lonEl)
    }

    if (data.main){
        let tempEl = data.main.temp;
        let humidityEl = data.main.humidity;
        let windEl = data.main.wind.speed;   
    }

    if (data.sys){
        let cityIdEl = data.sys.id;
        let typeEl = data.sys.type;
        let sunriseEl = data.sys.sunrise;
        let sunsetEl = data.sys.sunset;
    }    
   
}
        console.log(tempEl)
        console.log(humidityEl)
        console.log(windEl)
        console.log(cityIdEl)
        console.log(typeEl)
        console.log(sunsetEl)
        console.log(sunsetEl)

        

