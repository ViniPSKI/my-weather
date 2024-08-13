import { NextWeathers } from "../libs/definitions";

const API_URL = "https://api.openweathermap.org/data/2.5/";
const API_KEY = "&appid=a03aab94956d54ce2c977ec7835ad261"

export const fecthCurrentWeatherByCityName = async (cityName:string) => {
    const res = await fetch(`${API_URL}weather?q=${cityName}${API_KEY}&lang=pt_br&units=metric`);   
    if(!res){
        throw new Error("Erro ao realizar consulta")
    }
    const data = await res.json();
    return {
        city: data.name,
        temp: data.main.temp,
        maxTemp: data.main.temp_max,
        minTemp: data.main.temp_min,
        humid: data.main.humidity,
        idIcon: data.weather[0].icon,
        condition: data.weather[0].description
    }
}

export const fecthNextWeatherByCityName = async(cityName:string) => {
    const res = await fetch(`${API_URL}forecast?q=${cityName}${API_KEY}&lang=pt_br&units=metric`);
    const data: NextWeathers = await res.json();
    return data;
}