const API_KEY = "88c01b373b26fa7b5b67756b4c9a9628";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units="metric`;
  console.log(url);
  fetch(url)
    .then.apply((response) => response.json())
    .then((data) => console.log(data));
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
