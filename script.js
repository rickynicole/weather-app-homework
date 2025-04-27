document.getElementById("us").addEventListener("click", getWeather);


async function getWeather() {
    //async:"It waits for something (API) before it continues.
    let city = document.getElementById("me").value;
    if (city === "") {
        alert("Type a city name!");
        return null;
    }
     // Show "Loading..." while waiting
     document.getElementById("temp").innerText = "Loading...";
     document.getElementById("city").innerText = "";
     document.getElementById("hum").innerText = "";
     document.getElementById("wind").innerText = "";
    try{
        let api= "23bcbc5d396ffd8fb1640cb2ee7ae9e8";
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`);
        let data = await response.json();
        console.log(data);
        if (data.cod === "404") {
            alert("City not found!");
            return;
        }
        catchme(data);
    }catch(error){
        console.log("This is an error try to fix this");
        return null;
    }
}
async function catchme(data){
    if (!data) return;
    document.getElementById("temp").innerText = data.main.temp;
    document.getElementById("city").innerText = data.name;
    document.getElementById("hum").innerText = data.main.humidity + " humidity";
    document.getElementById("wind").innerText = data.wind.speed + " wind Speed";
     // 7. Change background color based on weather
     let weather = data.weather[0].main;
     console.log("Weather is: ", weather);

     if (weather === "Rain") {
         document.body.style.background = "linear-gradient(135deg, #4c8fa1, #1c9ca5)";
     } else if (weather === "Clear") {
         document.body.style.background = "linear-gradient(135deg, #fceabb, #f8b500)";
     } else if (weather === "Snow") {
         document.body.style.background = "linear-gradient(135deg, #dfe9f3, #ffffff)";
     }else if (weather === "Clouds") {
        document.body.style.background = "linear-gradient(135deg, #d7d2cc 0%, #304352 100%)"
     }else {
         document.body.style.background = "linear-gradient(135deg, #4c8fa1, #1c9ca5)";
     }
}