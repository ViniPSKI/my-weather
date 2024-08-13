import { CurrentWeather } from "../libs/definitions";

export default function CurrentWeatherCard( {weather}:{weather: CurrentWeather}){
    return(
        <div className="flex flex-col bg-sky-100 rounded-md w-64 items-center p-4 mt-10">
          <p className="text-2xl">{weather.city}</p>
          <p className="text-sm text-gray-700">Temperatura Máxima: {weather.maxTemp} </p>
          <p className="text-sm text-gray-700">Temperatura Minima: {weather.minTemp} </p>
          <img src={`http://openweathermap.org/img/wn/${weather.idIcon}.png`} width={100} alt="" />
          <label>{weather.condition}</label>
          <p className="">Temperatura: {weather.temp}</p>
          <p className="">Umidade: {weather.humid}%</p>
        </div>
    );
}