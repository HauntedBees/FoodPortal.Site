import { bee } from "./api";
import type { MetadataResponse } from "./types";

export async function DietColorMappingPromiseFunc() {
    const metadata = await bee.getShared<MetadataResponse>("metadata");
    const dict: Record<string, string> = {};
    metadata.diets.forEach((d) => {
        dict[d.name] = d.color;
    });
    return dict;
};
export async function DishColorMappingPromiseFunc() {
    const metadata = await bee.getShared<MetadataResponse>("metadata");
    const dict: Record<string, string> = {};
    metadata.dishes.forEach((d) => {
        dict[d.name] = d.color;
    });
    return dict;
};
let currentCountry = $state("");
export function getCountry() { return currentCountry; }
export function setCountry(country: string = "") { currentCountry = country; }