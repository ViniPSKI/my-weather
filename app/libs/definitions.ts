export interface CurrentWeather{
    city: string;
    temp: string;
    maxTemp: string;
    minTemp: string;
    humid: string;
    idIcon: string;
    condition: string;
}

export interface NextWeathers{
    list: Array<{
        dt: number;
        main: {
          temp: string;
          temp_max: string;
          temp_min: string;
          humidity: string;
        };
        weather: Array<{
          icon: string;
        }>;
      }>;
}

export interface Weathers {
    [date: string]: weather;
}

export interface weather{
    temp: string;
    temp_max: string;
    temp_min: string;
    humidity: string;
    icon: string;
    date: string;
    weekday: string;
}