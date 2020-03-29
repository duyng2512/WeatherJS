class weatherFetcher {
    constructor() {
        this.API_key = "d8bec61dea3f0e16763d2ebc9e5d93f6";
    }

    async getData(city, country){
        const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${this.API_key}`);
        const weatherData = await weatherRes.json();
        return {weatherData};
    }
}