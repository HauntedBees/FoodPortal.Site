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

export type DietData = {
	id: number;
	name: string;
	emoji: string;
};
export type DishData = DietData & {
	color: string;
};

export type MetadataResponse = {
	letters: string[];
	countries: MetadataCountry[];
	dishes: DishData[];
	diets: DietData[];
};

export type BaseCountry = {
	ckey: string;
	name: string;
};

type MetadataCountry = BaseCountry & {
	firstLetter: string;
	focusArea?: string;
};

export type CountryResponse = BaseCountry & {
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
/*
	filtering logic should be:
		if dishTypes has any elements, "f.dish IN ({elements})"
		if query is not empty, split on spaces, check for matches in name and ingredients
		if dietIncludes has any elements, dish must include at least one of the diets
		if dietExcludes has any elements, dish CANNOT include any of the diets
*/