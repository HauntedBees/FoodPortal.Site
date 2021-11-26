export interface CountryLetterInfo {
	ckey:string;
	name:string;
	firstLetter:string;
	focusArea?:string;
  }
  export interface FilterInfo {
	name:string;
	emoji:string;
	status:number;
  }
  export interface SongInfo {
	countryCode?:string;
	name:string;
	url:string;
	favorite?:boolean;
	translation?:string;
  }
  export interface DietInfo {
	optional?:boolean;
	name?:string;
	emoji?:string;
	description?:string;
  }
  export interface FoodInfo {
	countryCode?:string;
	countryName?:string;
	name:string;
	type?:string;
	dish:string;
	dishEmoji?:string;
	url:string;
	date:string;
	img:string;
	databee?:string;
	desc:string;
	diet:DietInfo[];
	ingredients:string[];
	favorite?:boolean;
  }
  export interface CountryDetails {
	focusArea?:string;
	realFirstLetter?:string;
	name:string;
	desc:string;
	population:number;
	popEstimate:number;
	area:number;
	independence:string;
	indFrom:string;
	demonym:string;
	currency:string;
	motto:string;
	languages:string[];
	neighbors:string[];
	foodURL:string;
	food:FoodInfo[];
	musicURL:string;
	music:SongInfo[];
  }
  
  /*
	  Euro (€)
	  Guinea-Bissau: Tabanka Djaz - Silencio
	  india:  { name: "Anupam Roy - Ekhon Anek Raat", url: "https://www.youtube.com/watch?v=8-7GUHoD6Qs" },
	  Jamaica: https://www.youtube.com/watch?v=eUPYFt52FBE
	  mexico: https://www.youtube.com/watch?v=17LDYwiPe3s
	  portugual: https://www.youtube.com/watch?v=099qXDYutyg
	  romania: https://www.youtube.com/watch?v=Clx4BUnzhO4
  */