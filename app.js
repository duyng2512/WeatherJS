/**Init weether Class */
const weather = new weatherFetcher;
/**Init UI class */
const ui = new UI;
/** Init local storage class */
const store = new Storage;

/** Load page base one Localstorage */
(function(){
    const localData = store.getLocationData();
    weather.getData(localData.city, localData.nation)
    .then( data => {
        console.log(data);
        ui.showWeatherInfo(data.weatherData);
    })
})();

/** Event listener */
document.getElementById("loc-save-change")
.addEventListener("click", () =>{
    const city_input = document.getElementById("city-input");
    const nation_input = document.getElementById("nation-input");
    if ( (city_input.value==='') || (nation_input.value==='') ){
        ui.showNotice("please fill all required fields", "danger");
    }
    else{
        store.setLocationData(city_input.value, nation_input.value);
        weather.getData(city_input.value, nation_input.value)
        .then( data => {
            console.log(data);
            ui.showWeatherInfo(data.weatherData);
            $('#exampleModal').modal('hide');
        })
        .catch(err => {console.log(err)});
    }
})
