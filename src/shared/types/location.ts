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
	removeFromHistory: (loc: Location) => void;
	clearHistory: () => void;
};
