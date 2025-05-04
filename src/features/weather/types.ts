export interface WeatherData {
	coord: Coord;
	weather: Weather[];
	base: string;
	main: CurrentMain;
	visibility: number;
	wind: CurrentWind;
	clouds: Clouds;
	dt: number;
	sys: CurrentSys;
	timezone: number;
	id: number;
	name: string;
	cod: number;
}

export interface ForecastData {
	cod: string;
	message: number;
	cnt: number;
	list: ForecastEntry[];
	city: City;
}

export interface GroupedForecast {
	date: string;
	entries: ForecastEntry[];
}

// Shared types

export interface Coord {
	lon: number;
	lat: number;
}

export interface Weather {
	id: number;
	main: string;
	description: string;
	icon: string;
}

export interface Clouds {
	all: number;
}

// WeatherData-specific
export interface CurrentMain {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	humidity: number;
	sea_level: number;
	grnd_level: number;
}

export interface CurrentWind {
	speed: number;
	deg: number;
}

export interface CurrentSys {
	type: number;
	id: number;
	country: string;
	sunrise: number;
	sunset: number;
}

// Forecast-specific
export interface ForecastEntry {
	dt: number;
	main: ForecastMain;
	weather: Weather[];
	clouds: Clouds;
	wind: ForecastWind;
	visibility: number;
	pop: number;
	sys: ForecastSys;
	dt_txt: string;
	rain?: Rain;
}

export interface ForecastMain {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	sea_level: number;
	grnd_level: number;
	humidity: number;
	temp_kf: number;
}

export interface ForecastWind {
	speed: number;
	deg: number;
	gust: number;
}

export interface ForecastSys {
	pod: string;
}

export interface Rain {
	'3h': number;
}

export interface City {
	id: number;
	name: string;
	coord: Coord;
	country: string;
	population: number;
	timezone: number;
	sunrise: number;
	sunset: number;
}
