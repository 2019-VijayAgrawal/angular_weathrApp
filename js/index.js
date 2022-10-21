var app = angular.module("myApp",[]);

const API_KEY = "066faf9a57a98cb10782fe0b22c785c2";
// const getFormattedWeatherData = async (city) => {
//     //const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
   
// }

app.controller('show-data', ['$scope','$http',function($scope,$http){
    $scope.weatherData = null;
$scope.weather_info = null;
$scope.weather = null;
$scope.city=document.getElementById('#weather');

$scope.fetchData = function() {
    //alert("Helloo")
    $scope.today = new Date();
    $scope.currentMinute = new Date().getMinutes();
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${$scope.city}&appid=${API_KEY}`;
 
    let req={
        method:'GET',
        url:URL,
        headers:{
            'Content-Type':'application/json'
        }
    }
    $http(req).then(function(response){
        $scope.weatherData = response.data;
        $scope.weather_info =( $scope.weatherData.main.temp-273.15).toFixed(0) ;
        console.log($scope.weather_info)

        $scope.weather = $scope.weatherData.name;
        
    })
    
}

   // $scope.fetchData()
   
}])