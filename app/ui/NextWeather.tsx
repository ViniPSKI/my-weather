import { useEffect, useState } from "react";
import { Weathers, NextWeathers } from "../libs/definitions";
import { toWeekday } from "../libs/converters";

export default function NextWeather( { nextWeathers }:{ nextWeathers: NextWeathers } ){
    const [weatherNextDays, setNextWeathersDays] = useState<Weathers>({});
    useEffect(() => {
        function fetchWeather() {
            let weathers: Weathers = {};
            for(let nextWeather of nextWeathers.list){
                const date = new Date(nextWeather.dt * 1000).toLocaleDateString();
                if(!weathers[date]){
                    weathers[date] = {
                        temp: nextWeather.main.temp,
                        temp_max: nextWeather.main.temp_max,
                        temp_min: nextWeather.main.temp_min,
                        humidity: nextWeather.main.humidity,
                        icon: nextWeather.weather[0].icon,
                        date: date,
                        weekday: toWeekday(nextWeather.dt),
                    };
                }else{

                    if(weathers[date].temp_max < nextWeather.main.temp_max){
                        weathers[date].temp_max = nextWeather.main.temp_max
                    }
                    if(weathers[date].temp_min > nextWeather.main.temp_min){
                        weathers[date].temp_min = nextWeather.main.temp_min
                    }

                }
            }
            setNextWeathersDays(weathers);
        }
        fetchWeather();
    }, [nextWeathers]);

    const weathers = Object.values(weatherNextDays).slice(0,6);

    return(
        <div className="bg-blue-100 flex rounded-xl flex-row justify-around w-3/4 h-72 p-4 mt-10">
            {weathers.map((nextWeather, index)=>(
                <div className="bg-blue-200 p-1 w-56 rounded-md flex flex-col justify-center items-center" key={index}>
                    <p>{nextWeather.weekday}</p>
                    <p>{nextWeather.date}</p>
                    <p className="text-sm text-gray-700">Temperatura Máxima: {nextWeather.temp_max} </p>
                    <p className="text-sm text-gray-700">Temperatura Minima: {nextWeather.temp_min} </p>
                    <img src={`http://openweathermap.org/img/wn/${nextWeather.icon}.png`} width={100} alt="" />
                    <p className="">Temperatura: {nextWeather.temp}</p>
                    <p className="">Umidade: {nextWeather.humidity}%</p>
                </div>
            ))}
        </div>
    );
}