export interface GeoResult {
	name: string;
	local_names: Record<string, string>; // ✅ dynamic keys, all strings
	lat: number;
	lon: number;
	country: string;
}

export type Location = {
	city: string;
	countryCode: string;
	lat: number;
	lon: number;
};

export type LocationStore = {
	currentLocation: Location;
	searchHistory: Location[];
	setLocation: (loc: Location) => void;
	addToHistory: (loc: Location) => void;
};
