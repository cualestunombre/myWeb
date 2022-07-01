const API_KEY = "b3ec3d3a0cfed408fb0c7de2c4fa5c8c";
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json().then(data =>{
        console.log(data.name);
    }));
    
}
function onGeoError(){
    alert("에러가 발생했네요.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);