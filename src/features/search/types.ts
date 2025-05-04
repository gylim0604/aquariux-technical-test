export interface GeoResult {
	name: string;
	local_names: Record<string, string>; // ✅ dynamic keys, all strings
	lat: number;
	lon: number;
	country: string;
}
