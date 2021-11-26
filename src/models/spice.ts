export interface Recipe {
    name: string;
    url: string;
}
export interface Seasoning {
    name: string;
    synonyms: string[];
    origin: string;
    description: string;
    emoji: string;
    species: string;
    type: string;
    dishes: string[];
    flavors: string[];
    foods: string[];
    pairsWith: Seasoning[];
    relatedSpices: Seasoning[];
    components: Seasoning[];
    recipes: Recipe[];
    imagedesc: string;
    imagename: string;
    imageauthor: string;
    imageurl: string;
    authorurl: string;
    license: string;
    licenseurl: string;
}