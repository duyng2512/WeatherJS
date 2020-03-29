class UI{
    showNotice(messege, type){
        const modal = document.querySelector(".modal-content");
        const popUp = document.createElement("div");
        const header = document.querySelector(".modal-header");
        popUp.className = `alert alert-${type} m-2`;
        popUp.appendChild(document.createTextNode(messege));
        modal.insertBefore(popUp, header);

        setTimeout(() => {
            this.clearAlert();
          }, 2000);

    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
          }
    }

    showWeatherInfo(data){
        

        /** Show Location */
        const location = document.getElementById("location");
        const data_city = data.name ;
        const data_nation = data.sys.country;
        location.innerHTML = `${data_city}, ${data_nation}`;

        /** Show description of weather */
        const description = document.getElementById("description");
        const data_description = data.weather[0].description;
        console.log(data_description);
        description.innerHTML = data_description;

        /** Show Temperature */
        const temp = document.getElementById("temp");
        const data_temp = data.main.temp;
        const temp_kelvin = parseFloat(data_temp);
        const temp_celcius = (temp_kelvin - 273.15).toFixed(2) ; 
        const temp_faraheir = (( temp_kelvin - 273.15 )* 9/5 + 32).toFixed(2); 
        temp.innerHTML = `${temp_celcius}\xB0 C ( ${temp_faraheir}\xB0 F)`

        /** Show Icon */
        const icon = document.getElementById("icon");
        if (document.getElementById("icon-img") === null){
            const img_icon = document.createElement("img");
            img_icon.id = "icon-img";
            img_icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            img_icon.width = "70";
            icon.appendChild(img_icon);
        }
        else{
            const img_icon = document.getElementById("icon-img");
            img_icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            img_icon.width = "70";
        }


        /** Show Details */
        const humid = document.getElementById("humid");
        const range = document.getElementById("range");
        const feels_like = document.getElementById("feels-like");
        const wind = document.getElementById("wind");

        const data_humid = data.main.humidity;
        const data_range = {temp_max :(parseFloat(data.main.temp_max) - 273.15).toFixed(2),
                            temp_min :(parseFloat(data.main.temp_min) - 273.15).toFixed(2)};
        const data_feel_like = data.main.feels_like;
        const data_wind = data.wind;
        
        humid.innerHTML = `Humidity : ${data_humid}%`;
        range.innerHTML = `Temperature Range : ${data_range.temp_min} -> ${data_range.temp_max} \xB0 C`;
        feels_like.innerHTML = `Feel like : ${(parseFloat(data_feel_like) - 273.15).toFixed(2)} \xB0 C`;
        wind.innerHTML = `Wind : ${data_wind.speed} m/s Direction : ${data_wind.deg} Deg`;
    }
}

