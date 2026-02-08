export function NavigationEvent(page: string, route?: string) {
	return new CustomEvent("pagenav", {
		detail: { page: page, route: route }
	});
}

export type DietaryRestriction = {
	name: string;
	emoji: string;
	description: string;
	optional: false;
};

export type FromCountryItem = {
	name: string;
	countryCode: string;
	countryName: string;
	favorite: boolean;
	url: string;
}

export type Song = FromCountryItem & {
	translation?: string;
};

export type Food = FromCountryItem & {
	urlkey: string;
	dish: string;
	dishEmoji: string;
	date: string;
	img: string;
	description: string;
	diet: DietaryRestriction[];
	ingredients: string[];
	songs: Song[];
};

export type HomePageResponse = {
	currentLetter: string;
	countriesDownWithCurrentLetter: number;
	countriesWithCurrentLetter: number;
	countriesDown: number;
	totalCountries: number;
	latestFoods: Food[];
	randomSongs: Song[];
};

export type PageResponse = Food[];

export type IndividualResponse = {
	food?: Food;
	similarDishes: Food[];
};

export type NamedEmoji = {
	id: number;
	name: string;
	emoji: string;
	color: string;
};

export type MetadataResponse = {
	letters: string[];
	countries: MetadataCountry[];
	dishes: NamedEmoji[];
	diets: NamedEmoji[];
};

export type BaseCountry = {
	ckey: string;
	name: string;
};

type MetadataCountry = BaseCountry & {
	firstLetter: string;
	focusArea?: string;
};

export type CountryResponse = { empty: true } | BaseCountry & {
	description: string;
	foodURL: string;
	musicURL: string;
	demonym: string;
	food: Food[];
	music: Song[];
};

export type SearchResponse = Food[];

export type SearchRequest = {
	query: string;
	dishTypes: number[];
	dietIncludes: number[];
	dietExcludes: number[];
};

export function SearchRequestToSiteQueryString(s: SearchRequest): string {
	const safeRequest: Record<string, string> = {};
	if (s.query) { safeRequest.query = encodeURIComponent(s.query); }
	if (s.dishTypes && s.dishTypes.length) { safeRequest.dishTypes = s.dishTypes.join(","); }
	if (s.dietIncludes && s.dietIncludes.length) { safeRequest.dietIncludes = s.dietIncludes.join(","); }
	if (s.dietExcludes && s.dietExcludes.length) { safeRequest.dietExcludes = s.dietExcludes.join(","); }
	return (new URLSearchParams(safeRequest)).toString();
}
/*
	filtering logic should be:
		if dishTypes has any elements, "f.dish IN ({elements})"
		if query is not empty, split on spaces, check for matches in name and ingredients
		if dietIncludes has any elements, dish must include at least one of the diets
		if dietExcludes has any elements, dish CANNOT include any of the diets
*/