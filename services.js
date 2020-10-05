// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "London, US";
    
});

weatherApp.service('weatherService', ['$resource', function($resource) {
   
    this.GetWeather = function(city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
        return weatherResult = weatherAPI.get({ q: city, appid: 'a605665958318eb9b3c5c29384d60a4e', cnt: days });
    };
    
}]);