import { create } from 'zustand';
import { Location, LocationStore } from '../types/location';
import { createJSONStorage, persist } from 'zustand/middleware';

const MAX_HISTORY_LENGTH = 15;

function isSameLocation(a: Location, b: Location) {
	return a.city === b.city && a.countryCode === b.countryCode;
}

export const useLocationStore = create<LocationStore>()(
	persist(
		(set) => ({
			currentLocation: { city: 'Singapore', countryCode: 'SG', lat: 1.2907, lon: 103.8462 },
			searchHistory: [],
			setLocation: (loc) => set({ currentLocation: loc }),
			addToHistory: (loc) =>
				set((state) => {
					const filtered = state.searchHistory.filter((item) => !isSameLocation(item, loc));
					const updated = [loc, ...filtered].slice(0, MAX_HISTORY_LENGTH);
					return { searchHistory: updated };
				}),
			removeFromHistory: (loc) =>
				set((state) => ({
					searchHistory: state.searchHistory.filter((item) => !isSameLocation(item, loc)),
				})),
			clearHistory: () => set({ searchHistory: [] }),
		}),
		{
			name: 'location-storage', // localStorage key
			storage: createJSONStorage(() => localStorage),
		}
	)
);
