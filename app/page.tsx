'use client'
import { useState } from "react";
import { fecthCurrentWeatherByCityName, fecthNextWeatherByCityName } from "./services/weatherFetch";
import { CurrentWeather, NextWeathers } from "./libs/definitions";
import CurrentWeatherCard from "./ui/CurrentWeatherCard";
import NextWeather from "./ui/NextWeather";

export default function Home() {
  
  const [cityName, setCityName] = useState('');
  const [weather, setWeather] = useState<CurrentWeather>();
  const [nextWeather, setNextWeather] = useState<NextWeathers>();

  async function fetchWeatherCurrent(){
    if(cityName != ''){
      const data = await fecthCurrentWeatherByCityName(cityName);
      const dataNext = await fecthNextWeatherByCityName(cityName);
      setNextWeather(dataNext);
      setWeather(data);
    }
  }

  return (
    <div className="flex flex-col w-svw h-svh p-1 items-center bg-gradient-to-r from-sky-300 via-sky-500 to-sky-700">
      <p className="text-4xl">Previsão do Tempo</p>
      <div className="p-4">
        <input className="bg-gray-200 w-60 rounded-md p-1 hover:bg-gray-50 mr-2" type="text" placeholder="Insira o nome da cidade" onChange={(e) => setCityName(e.target.value)}/>
        <button className="border-2 bg-white border-sky-700 rounded-lg p-1 hover:bg-sky-700 hover:text-white hover:transition" onClick={fetchWeatherCurrent}>Pesquisar</button>
      </div>
      {weather && (<CurrentWeatherCard weather={weather} /> )}
      {nextWeather &&(<NextWeather nextWeathers={nextWeather} />)}
    </div>
  );
}
