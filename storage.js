class Storage{
    constructor(){
        this.city;
        this.nation;
        this.defaultCity = "hanoi";
        this.defaultNation = "vietnam";
    }

    getLocationData(){
        if(localStorage.getItem('city') === null ){
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        if(localStorage.getItem('nation') === null ){
            this.nation = this.defaultNation;
        } else {
            this.nation = localStorage.getItem('nation');
        }
        return {
            city : this.city,
            nation : this.nation
        }
    }
    
    setLocationData(city, nation){
        localStorage.setItem('city', city);
        localStorage.setItem('nation', nation);
    }
}