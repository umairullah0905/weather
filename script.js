const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6c6d67a417msh0677354681f42a2p118750jsnf5e1f173ee65',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {

     cityName.innerHTML=city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            cloud_pct.innerHTML = response.cloud_pct
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed

            // image changing with temperature
            const img=document.getElementById("lmn");
            if (response.temp >= 20) {
                img.src="Screenshot.png";
            }
            else {
                img.src="Screenshot2.png";
            }

            const hum=document.getElementById("opr");
            hum.src="Screenshot3.png";

            //img cahnge with wind speed
            const hawa = document.getElementById("badabad"); 
            if(response.wind_speed>=4){
            hawa.src = "Screenshot5.png";
            }
            else{
                hawa.src="Screenshot7.png";
            }
            


        })
        .catch(err => console.error(err));
}

Submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value)



   
    
})

getWeather("DELHI")


//for shanghai

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad', options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)

        cloud_pctsh.innerHTML = response.cloud_pct
        feels_likesh.innerHTML = response.feels_like
        humiditysh.innerHTML = response.humidity
        max_tempsh.innerHTML = response.max_temp
        min_tempsh.innerHTML = response.min_temp
        sunrisesh.innerHTML = response.sunrise
        sunsetsh.innerHTML = response.sunset
        tempsh.innerHTML = response.temp
        wind_degreessh.innerHTML = response.wind_degrees
        wind_speedsh.innerHTML = response.wind_speed


    })
    .catch(err => console.error(err));


    //mumbai

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)

        cloud_pctmm.innerHTML= response.cloud_pct
        feels_likemm.innerHTML= response.feels_like
        humiditymm.innerHTML= response.humidity
        max_tempmm.innerHTML= response.max_temp
        min_tempmm.innerHTML= response.min_temp
        sunrisemm.innerHTML= response.sunrise
        sunsetmm.innerHTML= response.sunset
        tempmm.innerHTML= response.temp
        wind_degreesmm.innerHTML= response.wind_degrees
        wind_speedmm.innerHTML= response.wind_speed


    })
    .catch(err => console.error(err));

    //chennai

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chennai', options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)

        cloud_pctch.innerHTML= response.cloud_pct
        feels_likech.innerHTML= response.feels_like
        humiditych.innerHTML= response.humidity
        max_tempch.innerHTML= response.max_temp
        min_tempch.innerHTML= response.min_temp
        sunrisech.innerHTML= response.sunrise
        sunsetch.innerHTML= response.sunset
        tempch.innerHTML= response.temp
        wind_degreesch.innerHTML= response.wind_degrees
        wind_speedch.innerHTML= response.wind_speed


    })
    .catch(err => console.error(err));








