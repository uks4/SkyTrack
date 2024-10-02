const cityData = document.querySelector(".input-city");
const button = document.getElementById('search-btn');
const icon = document.getElementById('weather-icon');

async function weather(city){

    const url = 'https://open-weather13.p.rapidapi.com/city/';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '477f741d60mshed87990de580f86p1818d1jsnd1681fc46fb6',
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url+city+"/EN", options);
        const result = await response.json();

        console.log(result);

        if(result.cod==404){
            alert(result.message+"!. Please enter a valid city name");
            return;
        }

        var far = result.main.temp;
        far = ((far-32)*5)/9;

        document.querySelector(".temp").innerHTML=Math.round(far)+"°C ";
        document.querySelector(".city").innerHTML=result.name;
        document.querySelector(".humidity").innerHTML=result.main.humidity+"%";
        document.querySelector(".wind").innerHTML=Math.round(result.wind.speed)+" kmph";
        
        if(result.weather[0].main=="Clouds"){
            icon.src="Clouds.ico";
        }else if(result.weather[0].main=="Mist"){
            icon.src="Mist.ico";
        }
        else if(result.weather[0].main=="Clear"){
            icon.src="Sun.ico";
        }

        // document.querySelector(".weather-icon").
    } catch (error) {
        console.error(error);
    }

}

button.addEventListener('click', ()=> {
    if(cityData.value == ""){
        alert('Please Enter Some City Name');

    }
    else weather(cityData.value);
});