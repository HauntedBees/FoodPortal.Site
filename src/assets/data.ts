export class CountryLetter { letter = ""; info:CountryLetterInfo[] = []; }
export class CountryLetterInfo { code = ""; name = ""; }
export const DietaryRestrictions = {
  "Alcohol": "1F377",
  "Dairy": "1F95B", 
  "Egg": "1F95A", 
  "Fish": "1F41F", 
  "Gluten": "1F35E", 
  "Honey": "1F36F", 
  "Meat": "1F356", 
  "Nuts": "1F330",
  "Peanuts": "1F95C",
  "Soy": "1F331",
  "Spicy": "1F336",
  "Vegan": "1F33F",
  "Warning": "26A0"
}
export const DishTypes = {
  "Beverage": "1F379",
  "Bread": "1F35E",
  "Casserole": "1F372",
  "Curry": "1F35B",
  "Dessert": "1F368",
  "Dumpling": "1F95F",
  "Meat": "1F356", 
  "Noodle": "1F35D",
  "Pastry": "1F950",
  "Rice": "1F35A",
  "Salad": "1F957",
  "Sauce": "1F963",
  "Soup": "1F35C",
  "Wrap": "1F959",
  "Vegetable": "1F955",
  "Other": "1F962"
}
export interface CountryInfo { [key:string]:CountryDetails }
export interface SongInfo {
  countryCode?:string;
  name:string;
  url:string;
  favorite?:boolean;
  tl?:string;
}
export interface DietInfo {
  type:string;
  desc:string;
  optional?:boolean;
}
export interface FoodInfo {
  countryCode?:string;
  name:string;
  type:string;
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
export const OtherCountries:{[key:string]: string} = {
  "GR": "Greece",
  "GT": "Guatemala",
  "GN": "Guinea",
  "GY": "Guyana",
  "HT": "Haiti",
  "HN": "Honduras",
  "HU": "Hungary",
  "IN": "India",
  "IL": "Israel",
  "IR": "Iran",
  "IT": "Italy",
  "KZ": "Kazakhstan",
  "KE": "Kenya",
  "XK": "Kosovo",
  "KY": "Kyrgyzstan",
  "LA": "Laos",
  "LV": "Latvia",
  "LR": "Liberia",
  "LY": "Libya",
  "LI": "Liechtenstein",
  "LT": "Lithuania",
  "LU": "Luxembourg",
  "MY": "Malaysia",
  "ML": "Mali",
  "MR": "Mauritania",
  "MX": "Mexico",
  "MC": "Monaco",
  "MN": "Mongolia",
  "ME": "Montenegro",
  "MA": "Morocco",
  "MZ": "Mozambique",
  "MM": "Myanmar",
  "NA": "Namibia",
  "NP": "Nepal",
  "NL": "Netherlands",
  "NI": "Nicaragua",
  "NE": "Niger",
  "NG": "Nigeria",
  "KP": "North Korea",
  "MK": "North Macedonia",
  "NO": "Norway",
  "PS": "Palestine",
  "PK": "Pakistan",
  "PA": "Panama",
  "PY": "Paraguay",
  "PE": "Peru",
  "PL": "Poland",
  "RO": "Romania",
  "RU": "Russia",
  "RW": "Rwanda",
  "SN": "Senegal",
  "RS": "Serbia",
  "SK": "Slovakia",
  "SI": "Slovenia",
  "ES": "Spain",
  "SO": "Somalia",
  "SO-SM": "Somaliland",
  "ZA": "South Africa",
  "SS": "South Sudan",
  "SD": "Sudan",
  "SR": "Suriname",
  "SE": "Sweden",
  "CH": "Switzerland",
  "TJ": "Tajikistan",
  "TZ": "Tanzania",
  "TH": "Thailand",
  "CN-XZ": "Tibet",
  "TG": "Togo",
  "TN": "Tunisia",
  "TR": "Turkey",
  "TM": "Turkmenistan",
  "UG": "Uganda",
  "UA": "Ukraine",
  "US": "United States of America",
  "UY": "Uruguay",
  "UZ": "Uzbekistan",
  "VE": "Venezuela",
  "VN": "Vietnam",
  "EH": "Western Sahara",
  "ZM": "Zambia",
  "ZW": "Zimbabwe", 
  "None": "None"
};
const Data:CountryInfo = {
    "GE-AB": { // 0.2m
        focusArea: "GE", name: "Abkhazia", desc: "The Government Republic of Abkhazia is, according to Abkhazia, Russia, Venezuela, and a few other countries, its own country, and according to everyone else, it's just the westmost part of Georgia. Russian tourists can visit without even needing a passport!",
        population: 243206, popEstimate: 2015, area: 8660, independence: "Uhhh...", indFrom: "Georgia", demonym: "Abkhazian", currency: "Russian Rubles (₽)",
        languages: ["Abkhaz", "Russian"], motto: "Unknown", neighbors: ["GE", "RU"], 
        foodURL: "http://abkhazworld.com/aw/abkhazians/culture/654-abkhazian-cuisine",
        food: [
            { name: "Kystybyi", type: "Bread", url: "http://www.spicingyourlife.in/2016/09/qistibi-flatbread-stuffed-with-potatoes.html", date: "2018-06-01",
              img: "kystybyi1.jpg", databee: "kystybyi",
              desc: "A milk and flour-based flatbread fried with a mashed potato filling. I generally do not like the texture of mashed potatoes, but they were good in this. I learned the hard way that you cannot easily grate onions in a garlic press without breaking it.",
              diet: [
                  { type: "Dairy", desc: "Milk is an integral part of this recipe. You can probably use a vegan milk alternative." },
                  { type: "Gluten", desc: "Flour is used to make the dough." }
              ],
              ingredients: ["flour", "milk", "baking soda", "potato", "butter", "onion"]
            },
            { name: "Red Ajika", type: "Sauce", url: "https://www.saveur.com/red-ajika-recipe", date: "2018-06-01",
              img: "kystybyi1.jpg", databee: "ajika",
              desc: "A spicy salsa made with lots of aromatic ingredients. It went well with the kystybyi and has also proven delicious on other foods like cream cheese rangoons and chicken nuggets.",
              diet: [
                  { type: "Spicy", desc: "It's spicy. I only used one habanero in my recipe, so you can make it as mild as you like." },
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["toamto", "bell pepper", "chili", "garlic", "marigold", "blue fenugreek", "coriander"]
            }
        ],
        musicURL: "http://abkhazworld.com/aw/multimedia/music",
        music: [
            { name: "Spotify Playlist", url: "https://open.spotify.com/user/busenurtan38/playlist/0zGMZE3OFZkAXu6UaitHpr?si=aazST0FPRg621sdmHXf93g" },
            { name: "Gökhan Şen - Zahueklue Makamehar", url: "https://www.youtube.com/watch?v=PV_j5EUHnng", favorite: true }
        ]
    },
    "AF": { // 35m
        name: "Afghanistan", desc: "The Islamic Republic of Afghanistan is a South Asian country. If you're from the United States like me, you may know it as the country we invaded almost two decades ago and never left.",
        population: 34656032, popEstimate: 2016, area: 652864, independence: "1919-08-19", indFrom: "Britain", demonym: "Afghan", currency: "Afghan Afghani (؋)", 
        languages: ["Dari", "Pashto"], motto: `"There is no God but Allah; Muhammad is the messenger of Allah."`, neighbors: ["CN", "IR", "PK", "TJ", "TM", "UZ"],
        foodURL: "https://en.wikipedia.org/wiki/Afghan_cuisine",
        food: [
            { name: "Mantu", type: "Dumpling", url: "http://www.afghankitchenrecipes.com/recipe/mantu-beef-dumplings/", date: "2018-05-22",
              img: "mantu2.jpg", databee: "mantu",
              desc: "Steamed dumplings. The yogurt, mint, tomato, onion and coriander together were a very new flavor combination for me. Took a while to make, but was very delicious.",
              diet: [
                  { type: "Meat", desc: "Lamb or ground beef is an integral part of the recipe. I used a vegan ground beef substitute without issue." },
                  { type: "Dairy", desc: "The yogurt dip unsurprisingly contains yogurt. The dumplings themselves have no dairy in them." },
                  { type: "Gluten", desc: "Flour is used to make the dough." }
              ],
              ingredients: ["onion", "beef", "lamb", "garlic", "coriander", "lentil", "tomato paste", "oil", "mint", "yogurt", "yoghurt"]
            }, 
            { name: "Afghani Burger", type: "Wrap", url: "https://www.youtube.com/watch?v=DbFMpXrT_TA", date: "2018-05-23",
              img: "afghaniburg1.jpg",
              desc: "Mostly french fries wrapped in Afghan bread. Can't go wrong with a recipe that's largely french fries. Aside from the fries, I mostly just used leftover mantu filling to fill these with. Dipped in mango chutney, they were very satisfying chomps.",
              diet: [
                  { type: "Meat", desc: "Meat is a recommended filling for this recipe. I used a vegan ground beef substitute without issue." },
                  { type: "Gluten", desc: "This dish contains flatbread." },
                  { type: "Egg", desc: "Hard-boiled eggs are a recommended filling for this recipe, but I did not add any to mine.", optional: true }
              ],
              ingredients: ["flatbread", "french fry", "potato", "cilantro", "beef", "egg", "onion", "cabbage"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Afghanistan",
        music: [
            { name: "Aria Band - Dokhtar-e Feshani", url: "https://www.youtube.com/watch?v=4AdHbaVK6Fw" },
            { name: "Aryana Sayeed - Yaar-e Bamyani", url: "https://www.youtube.com/watch?v=-czdyVBMDa4" },
            { name: "Black Cats - Jooneh Khodet", url: "https://www.youtube.com/watch?v=D0MLoMFZE9o" },
            { name: "Habib Qaderi - Aftaw Baraanak", url: "https://www.youtube.com/watch?v=5DCVLFT_Anc" },
            { name: "Kabul Dreams - Chill Morghak", url: "https://www.youtube.com/watch?v=TcWxvxnK5hU" },
            { name: "Valy - Pashtou Attani", url: "https://www.youtube.com/watch?v=mROQT1dEM6w", favorite: true }
        ]
    },
    "AL": { // 2.8m
        name: "Albania", desc: "The Republic of Albania is a Mediterranean European country. Wikipedia calls them a 'developing country' but their citizens don't have to file bankruptcy for medical debts very often, which is not true for the people of my country, so, like, I guess that's not part of Wikipedia's criteria.",
        population: 2876591, popEstimate: 2017, area: 28748, independence: "1912-11-28", indFrom: "Ottoman Empire", demonym: "Albanian", currency: "Lek (L)", 
        languages: ["Albanian"], neighbors: ["GR", "XK", "ME", "MK"], motto: `"You Albania, give me honour, give me the name Albanian."`,
        foodURL: "https://en.wikipedia.org/wiki/Albanian_cuisine",
        food: [ 
            { name: "Fergesë Tiranës me piperka", type: "Casserole", url: "https://www.myalbanianfood.com/recipe/albanian-fergese-e-tiranes-me-piperka/", date: "2018-06-18",
              img: "tirgese1.jpg", databee: "fergese",
              desc: "I'm still not entirely sure what this is. My best guess is it's some sort of casserole or creamy dip of some sort, for like bread I guess? As a dip, it is very rich and delicious. If it's not a dip, then I accidentally made something delicious.",
              diet: [
                  { type: "Dairy", desc: "Cheese and yogurt are an integral part of this recipe." },
                  { type: "Gluten", desc: "Flour is used to make a roux." }
              ],
              ingredients: ["bell pepper", "onion", "feta cheese", "tomato", "chili flakes", "flour", "butter", "greek yogurt", "basil", "oil", "yoghurt"]
            },
            { name: "Flija", type: "Casserole", url: "https://www.myalbanianfood.com/recipe/albanian-flija-pancake/", date: "2018-06-24", 
              img: "flija2.jpg", databee: "flija",
              desc: "Layered pancakes. Very time consuming to make, and timing is key - if you don't cook each layer just right, you'll fuck up and have some layers be way too soft and others be way too crispy like I did. Getting each layer to be similar in thickness is also an important thing I failed to do correctly. Tasted like a pancake, but with layers. Not bad, but I'm not convinced that it can beat a good old fashioned waffle, even if I made it right.",
              diet: [
                  { type: "Dairy", desc: "Butter is an integral part of this recipe, and yogurt, clotted cream, and sour cream are all recommended." },
                  { type: "Gluten", desc: "Flour is used to make the dough." }
              ],
              ingredients: ["flour", "water", "butter", "oil", "greek yogurt", "yoghurt"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Albania",
        music: [
            { name: "The Bloody Foreigners - N'deti", url: "https://www.youtube.com/watch?v=4VGsyzJkFWQ" },
            { name: "Ermal Fejzullahu ft. Gena - Ajo", url: "https://www.youtube.com/watch?v=QAqyDTbWBSI" },
            { name: "Eugent Bushpepa - Fjalet E Qiririt", url: "https://www.youtube.com/watch?v=FXDX8QurUsk" },
            { name: "Ingrit Gjoni ft. Gjeto Luca - Fustani Pika Pika", url: "https://www.youtube.com/watch?v=g8pP7U8_UsA", favorite: true }
        ]
    },
    "DZ": { // 40.6m
        name: "Algeria", desc: "The People's Democratic Republic of Algeria is a Northern African country on the Mediterranean coast. It is the largest country in Africa, but most Americans still probably can't find it on a map.", 
        population: 42200000, popEstimate: 2018, area: 2381741, independence: "1962-07-05", indFrom: "France", demonym: "Algerian", currency: "Dinar (DA)", 
        languages: ["Arabic", "Berber"], motto: `"By the people and for the people."`, neighbors: ["LY", "ML", "MR", "MA", "NE", "TN", "EH"], 
        foodURL: "https://en.wikipedia.org/wiki/Cuisine_of_Algeria", 
        food: [
            { name: "Shakshouka", type: "Other", url: "https://cooking.nytimes.com/recipes/1014721-shakshuka-with-feta", date: "2018-06-26",
              img: "shakshouka.jpg",
              desc: "It's very tomatoey and eggy. Dipping bread into it is a good choice. I think you can eat it without a bread to dip in it, but I can't handle that much tomato without something else to balance it out.",
              diet: [
                    { type: "Egg", desc: "You can make this dish without eggs, but then you're eating an egg dish without eggs." },
                    { type: "Dairy", desc: "This dish optionally uses feta cheese.", optional: true }
              ],
              ingredients: ["egg", "feta cheese", "tomato", "cilantro", "garlic", "onion", "bell pepper", "cumin", "oil"]
            },
            { name: "Kanafeh", type: "Pastry", url: "https://www.closetcooking.com/2013/11/kanafeh-sweet-cheese-pastry.html", date: "2018-07-09",
              img: "kanafeh2.jpg",
              desc: "This is a dish made of phyllo dough stuffed with cheese, baked, and topped with a sugar syrup. It tastes exactly like you'd expect it to taste, which is a good thing. Highly recommended for people who don't want to worry about their roommates coming home to see them sitting down naked in the middle of the kitchen dipping a cheese wheel in maple syrup.", 
              diet: [
                { type: "Dairy", desc: "Various cheeses and butter are integral to this recipe." },
                { type: "Gluten", desc: "This recipe uses phyllo dough." }
              ],
              ingredients: ["shredded phyllo", "butter", "mozzarella", "goat cheese", "sugar", "water"]
            }
        ], 
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Algeria",
        music: [
            { name: "Cheb Nadir - Rani raya", url: "https://www.youtube.com/watch?v=yDUd_0Fm8xE" },
            { name: "Dahmane El Harrachi - Hassebni Khoud Krak", url: "https://www.youtube.com/watch?v=SWA9sBXmmtI" },
            { name: "Hamdi Benani - Habit el youm", url: "https://www.youtube.com/watch?v=_g2EHyYFhQ4" },
            { name: "Khaled - Aicha", url: "https://www.youtube.com/watch?v=wIsJbDZDNpo" },
            { name: "Khaled - C'est la vie", url: "https://www.youtube.com/watch?v=H7rhMqTQ4WI", favorite: true },
            { name: "Lim ft. Samira Talianie - Raï-kaï", url: "https://www.youtube.com/watch?v=q-MCv3TRtZ4" },
            { name: "Rachid Taha - Barra Barra", url: "https://www.youtube.com/watch?v=Q-nF8ACz4k0" },
            { name: "Souda Massi - Samira Meskina", url: "https://www.youtube.com/watch?v=7kNSXFrxzj8" }
        ]
    },
    "AD": { // 77.3k
        name: "Andorra", desc: "The Principality of Andorra is a microstate ruled by the French President and also the Spanish Bishop of Urgell. For some reason. One of the few countries to never be invaded by the British.",
        population: 77281, popEstimate: 2016, area: 467.63, independence: "~1218", indFrom: "Aragon", demonym: "Andorran", currency: "Euro (€)", 
        languages: ["Catalan"], motto: `"United virtue is stronger."`, neighbors: ["FR", "ES"], 
        foodURL: "https://en.wikipedia.org/wiki/Catalan_cuisine",
        food: [
            { name: "Torrija", type: "Bread", url: "http://honestcooking.com/easter-torrijas-decadent-spanish-toasts/", date: "2018-07-22", 
              img: "torrija.jpg",
              desc: "Definitely not French Toast. Crispy outside, creamy inside. Less of an eggy taste than regular French Toast, which is a plus in my book. A rich tasty treat.", 
              diet: [
                { type: "Gluten", desc: "This recipe is made with bread." },
                { type: "Dairy", desc: "The bread must be soaked in milk." },
                { type: "Egg", desc: "You better believe you're dipping it in eggs, too." }
             ],
             ingredients: ["bread", "milk", "sugar", "cinnamon", "egg", "oil"]
            },
            { name: "Calçot", type: "Vegetable", url: "https://food52.com/recipes/17161-the-evasive-calcot-and-the-promiscuous-romesco", date: "2018-07-15", 
              img: "calcot1.jpg",
              desc: "Incredibly hard and messy to eat. But also delicious. I used Mexican grilling onions, since the internet told me those were close enough to actual calçots.",
              diet: [
               { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["green onion", "oil"]
            },
            { name: "Romesco", type: "Sauce", url: "https://food52.com/recipes/17161-the-evasive-calcot-and-the-promiscuous-romesco", date: "2018-07-15", 
              img: "romesco.jpg",
              desc: "I definitely messed up on this because my version was very chunky and not very saucy. Despite this, it was still very tasty. Ramen mixed with Romesco and topped with onions is also very delicious.",
              diet: [
               { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." },
               { type: "Nuts", desc: "This recipe uses almonds." },
               { type: "Gluten", desc: "This recipe contains bread for texture." }
              ],
              ingredients: ["oil", "bell pepper", "bread", "almond", "sherry vinegar", "garlic"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Andorra",
        music: [
            { name: "Anonymous - Salvem el món", url: "https://www.youtube.com/watch?v=VmiV8bbNjQo", favorite: true },
            { name: "Marta Roure - Jugarem a Estimar-nos", url: "https://www.youtube.com/watch?v=9JDvhww0vjw" },
            { name: "Persefone - One Of Many...", url: "https://www.youtube.com/watch?v=zX-gDPox-yk" }
        ]
    },
    "AO": { // 25.7m
        name: "Angola", desc: "The Republic of Angola is a West African country bordering the Atlantic Ocean. Its economy is one of the fastest growing in the world.",
        population: 25789024, popEstimate: 2014, area: 1246700, independence: "1975-11-11", indFrom: "Portugal", demonym: "Angolan", currency: "Angolan Kwanza (Kz)", 
        languages: ["Portuguese"], motto: `"Virtue is stronger when united."`, neighbors: ["CG", "CD", "NA", "ZM"], 
        foodURL: "https://en.wikipedia.org/wiki/Angolan_cuisine",
        food: [
            { name: "Cocada Amarela", type: "Dessert", url: "https://www.196flavors.com/angola-cocada-amarela/", date: "2018-08-05",
              img: "cocada.jpg",
              desc: "Coconutty pudding. The coconut flakes made its texture unlike most puddings. Tasty stuff.",
              diet: [
                { type: "Egg", desc: "Egg yolk is a central part of this recipe." }
              ],
              ingredients: ["coconut", "egg", "sugar", "cloves", "cinnamon"]
            },
            { name: "Moamba de Galinha", type: "Meat", url: "https://foodsfromafrica.com/angola-muamba-di-galinha-chicken-moamba-recipe/", date: "2018-07-30",
              img: "moamba.jpg",
              desc: "Chicken cooked in a red palm oil sauce. I cannot accurately describe the taste of red palm oil, but it was definitely a very new taste and I'm pretty sure I enjoyed it. Chicken is tasty.",
              diet: [
                { type: "Warning", desc: "This recipe calls for red palm oil. Please make sure you are buying sustainable palm oil if you make this recipe." },
                { type: "Spicy", desc: "It can be a bit spicy due to all the red peppers. You can use less of them or replace with bell peppies and it'll still be good." },
                { type: "Meat", desc: "Chicken meat is a central ingredient in this recipe, however, the sauce itself is vegan (if you use a vegan boullion) and can be used on non-meat things." }
              ],
              ingredients: ["chicken", "lemon", "paprika", "garlic", "cayenne", "red pepper", "palm oil", "olive oil", "tomato", "onion", "tomato paste", "bay leaf"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Angola",
        music: [
            { name: "Ary - Você me Encangalha", url: "https://www.youtube.com/watch?v=bFP3QnEtdro" },
            { name: "Dog Murras ft. Noitre & Dia - Chacule Bum Dance (Magia)", url: "https://www.youtube.com/watch?v=LAL8zDokJVk", favorite: true },
            { name: "Kueno Aionda - Isabel", url: "https://www.youtube.com/watch?v=FIgMPLLDoCA" },
            { name: "Don Kikas - Estou Aqui", url: "https://www.youtube.com/watch?v=OWg2ySr6L7c" },
            { name: "Yola Araújo - Sja Paixona", url: "https://www.youtube.com/watch?v=Fljq8miMrFY" }
        ]
    },
    "AG": { // 0.1m
        name: "Antigua and Barbuda", desc: "Antigua and Barbuda consists of two major islands and a bunch of smaller islands. It gained sovereignty from Britain in 1981, but still remains a member of the Commonwealth.",
        population: 100963, popEstimate: 2016, area: 440, independence: "1981-11-01", indFrom: "Britain", demonym: "Antiguan, Barbudan", currency: "East Caribbean Dollar ($)", 
        languages: ["English"], motto: `"Each Endeavouring, All Achieving."`, neighbors: ["None"], 
        foodURL: "https://en.wikipedia.org/wiki/Antigua_and_Barbuda_cuisine", 
        food: [
            { name: "Ducana", type: "Dumpling", url: "http://kitchen-tested.com/2011/04/10/antiguan-ducana-and-salt-fish/", date: "2018-08-07",
              img: "ducana.jpg",
              desc: "These were very filling. They felt like some sort of protein or energy bar. Tasty warm and tasty cold. Definitely a good way to fill up on something somewhat healthy. I did not prepare the salt fish referenced in this recipe due to fish allergies and I did not add raisins to the ducana because I love myself.",
              diet: [
                { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." },
                { type: "Gluten", desc: "This recipe uses flour to keep the dumplings together." }
              ],
              ingredients: ["coconut", "sweet potatoes", "sugar", "cinnamon", "nutmeg", "vanilla", "flour", "raisins"]
            },
            { name: "Antiguan Butter Bread", type: "Bread", url: "https://jesseatsandtravels.com/2018/04/11/butter-bread-from-antigua-and-barbuda/", date: "2018-08-11", 
              img: "butterbread.jpg", 
              desc: "Very tasty and buttery. The linked recipe omits a few important details - namely the amount of flour to use. I used 360g (3 cups) and altered steps 1 and 2 as follows: mix JUST the buttermilk, yeast, and sugar, then mix the butter into the flour, THEN mix the yeast mix into the flour. After that the recipe worked great.",
              diet: [
                { type: "Gluten", desc: "This is literally bread. Sorry." },
                { type: "Dairy", desc: "If you're avoiding dairy for any reason, maybe butter bread isn't the right recipe for you." }
              ],
              ingredients: ["butter", "buttermilk", "flour", "yeast", "olive oil"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Antigua_and_Barbuda", 
        music: [
            { name: "Claudette Peters - Out Deh", url: "https://www.youtube.com/watch?v=JUHTUWyyJcc" },
            { name: "King Short Short - One Day You'll Pay", url: "https://www.youtube.com/watch?v=LvTjj0qBWDk" },
            { name: "Ricardo Drue - Walking Dead", url: "https://www.youtube.com/watch?v=0ozzOfiG6GM" },
            { name: "Ricardo Drue - Wi-Fi", url: "https://www.youtube.com/watch?v=M9mspC9wiDQ", favorite: true }
        ]
    },
    "AR": { // 43m
        name: "Argentina", desc: "The Argentine Republic is the second largest country in South America and the largest Spanish-speaking nation in the world.",
        population: 43847430, popEstimate: 2016, area: 2780400, independence: "1816-07-09", indFrom: "Spain", demonym: "Argentine", currency: "Argentine Peso ($)", 
        languages: ["Spanish"], motto: `"In Unity and Freedom."`, neighbors: ["BO", "BR", "CL", "PY", "UY"], 
        foodURL: "https://en.wikipedia.org/wiki/Argentine_cuisine",
        food: [
            { name: "Empanadas Mendocinas", type: "Pastry", url: "https://www.laylita.com/recipes/empanadas-mendocinas/", date: "2018-08-18", favorite: true,  
              img: "empanadas.jpg", desc: "Delicious. Absolutely delicious. The spice mix for the meat was great. The onions were great. The crunch was great. All great. Five stars.",
              diet: [
                { type: "Gluten", desc: "Flour is the main ingredient in the dough." },
                { type: "Dairy", desc: "This recipe uses butter and milk. You can replace the milk with water and can probably replace the butter with some other fat." },
                { type: "Meat", desc: "Ground beef is an integral part of the recipe. I used a vegan ground beef substitute without issue." },
                { type: "Egg", desc: "Egg yolk is an ingredient in the dough, and egg is used for an egg wash and optionally for sealing the empanadas." }
              ],
              ingredients: ["flour", "egg", "milk", "butter", "beef", "onion", "green onion", "paprika", "chili powder", "oregano"]
            },
            { name: "Chimichurri", type: "Sauce", url: "https://www.chowhound.com/recipes/argentine-chimichurri-sauce-28393", date: "2018-08-18", 
              img: "chimichurri.jpg", desc: "This sauce has a very strong herb flavor. Probably due to the fact that it's mostly parsley and oregano. Very tasty. Good with empanadas and meat.",
              diet: [
                { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["italian parsley", "oregano", "garlic", "red wine vinegar", "red pepper flakes", "olive oil"]
            },
            { name: "Locro", type: "Soup", url: "https://therealargentina.com/en/recipe-for-argentine-locro/", date: "2018-08-25", 
              img: "locro.jpg", desc: "It's mostly potatoes, sweet potatoes, corn, and onions. That's like the four food groups right there, so I give this stew a 4/4.",
              diet: [
                { type: "Meat", desc: "This recipe can call for a lot of meat, but I skipped pretty much all of it and used a vegan ground beef substitute without issue." }
              ],
              ingredients: ["corn", "onion", "garlic", "leek", "bacon", "sausage", "beef", "tripe", "lima beans", "cumin", "paprika", "sweet potato", "butternut squash", "potato", "green onion"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Argentina",
        music: [
            { name: "Bandana - Como Puede Ser", url: "https://www.youtube.com/watch?v=M0hvsENxKtQ" },
            { name: "La Fanfarria del Capitán - Bella Ciao", url: "https://www.youtube.com/watch?v=GribZtF-pBo" },
            { name: "Gilda - No me Arrepiento de este Amor", url: "https://www.youtube.com/watch?v=8iUkmnLc1ec" },
            { name: "Illya Kuryaki and the Valderramas - Aguila Amarilla", url: "https://www.youtube.com/watch?v=UT5rA0T08Uk" },
            { name: "Kapanga - La Crudita", url: "https://www.youtube.com/watch?v=qSUUfTDfXiM" },
            { name: "Machito Ponce - Samantha", url: "https://www.youtube.com/watch?v=lSoViXKoiC0" },
            { name: "Mercedes Sosa - Todo Cambia", url: "https://www.youtube.com/watch?v=0khKL3tTOTs" },
            { name: "Miranda! - Ahora Que Soy Cantante", url: "https://www.youtube.com/watch?v=gY4aXuBkNG4", favorite: true },
            { name: "Tanghetto - Planet Earth", url: "https://www.youtube.com/watch?v=TdJbzE3k-r0" },
            { name: "Virus - Luna de Miel", url: "https://www.youtube.com/watch?v=XLSR7rqjilU" },
            { name: "Yerba Brava - Bastara", url: "https://www.youtube.com/watch?v=mIunvgWMzHk" }
        ]
    },
    "AM": { // 2.9m
        name: "Armenia", desc: "The Republic of Armenia is a country in Western Asia. It was the first country to adopt Christianity as its official religion.",
        population: 2924816, popEstimate: 2016, area: 29743, independence: "1991-09-21", indFrom: "Soviet Union", demonym: "Armenian", currency: "Armenian Dram (֏)", 
        languages: ["Armenian"], motto: `"One Nation, One Culture."`, neighbors: ["AM-AR", "AZ", "GE", "IR", "TR"], 
        foodURL: "https://en.wikipedia.org/wiki/Armenian_cuisine",
        food: [
            { name: "Spas" , type: "Soup", url: "http://www.thearmeniankitchen.com/2015/05/spas-madzoon-yogurt-soup-with-grains.html", date: "2018-09-02",
              img: "spas.jpg", desc: "Unsurprisingly, this minty yogurt soup tastes a lot like minty yogurt. I have a cold so hopefully eating this will cure me.", 
              diet: [
                { type: "Gluten", desc: "This soup contains both flour and wheat." },
                { type: "Dairy", desc: "The primary ingredient in this soup is Greek yogurt." },
                { type: "Egg", desc: "This soup contains egg yolk, but it is an optional ingredient that is not included if serving the soup cold.", optional: true }
              ],
              ingredients: ["shelled wheat", "dzedzadz", "farro", "Greek yogurt", "yoghurt", "egg yolk", "flour", "butter", "onion", "mint", "parsley"]
            },
            { name: "Eetch" , type: "Salad", url: "https://www.youtube.com/watch?v=cOTVZZ31HpU", date: "2018-09-07",
              img: "eetch.jpg", desc: "A salad made mostly of bulgur wheat. Can be served hot or cold, and it's tasty either way.", 
              diet: [
                { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["bulgur", "onions", "tomato paste", "allspice", "green onions", "parsley", "lemon"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Armenia",
        music: [
            { name: "Arame - Ur E", url: "https://www.youtube.com/watch?v=WGxDpaFuZRU" },
            { name: "Hay TgheQ - Jaki Juki", url: "https://www.youtube.com/watch?v=-S-MAiFIpT0", favorite: true },
            { name: "Maria Nalbandian - Won't Forgive", url: "https://www.youtube.com/watch?v=M2haDgxS2P4" },
            { name: "Nemra - Shorts", url: "https://www.youtube.com/watch?v=vnwZH5jBLew" },
            { name: "Reincarnation - Mi Gdal Ser", url: "https://www.youtube.com/watch?v=w0BTtlZMXm8" },
            { name: "Sirusho - I Still Breathe", url: "https://www.youtube.com/watch?v=p8DwcwKIWMY" }
        ]
    },
    "AM-AR": { // 0.2m
        focusArea: "AZ", name: "Artsakh", desc: "The Republic of Artsakh, according to most countries, is part of Azerbaijan. Three other unrecognized countries, as well as various states in the USA recognize it as its own country. Despite technically being part of Azerbaijan, it is predominantly populated by Armenians, and Armenian is the region's official language.",
        population: 150932, popEstimate: 2015, area: 11458, independence: "Not Yet...", indFrom: "Azerbaijan", demonym: "Unknown", currency: "Armenian Dram (֏)", 
        languages: ["Armenian"], motto: `Unknown`, neighbors: ["AM", "AZ", "IR"], 
        foodURL: "https://armeniadiscovery.com/en/articles/what-to-eat-in-artsakh",
        food: [
            { name: "Zhingyalov hats", type: "Wrap", url: "https://heghineh.com/jingalov-hats/", date: "2018-09-09", favorite: true, 
                img: "hatsOffToYa.jpg", desc: "What happens when you make some dough and fill it with every green food you can find in your kitchen? This. A very tasty herby bread with every flavor in every bite!",
                diet: [
                    { type: "Gluten", desc: "Flour is used to make the dough." },                    
                    { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
                ],
                ingredients: ["flour", "spinach", "cilantro", "coriander", "parsley", "basil", "mint", "savory", "green onions"]
            }, 
            { name: "Dolma", type: "Vegetable", url: "https://foodwishes.blogspot.com/2015/05/lamb-rice-stuffed-grape-leaves-hours-to.html", date: "2018-09-15", 
              img: "dolma.jpg", desc: "Although the usual image of a dolma involves grape leaves, they can also be made with fresh vegetables like bell peppers, so I made both varieties. The grape leaf ones were a bit bitter and briney, but otherwise it was all pretty tasty.",
              diet: [
                { type: "Meat", desc: "This recipe calls for ground meat. You can use a vegan substitute or just go all-in on the rice and it'll be fine. It also calls for chicken broth, but you can use vegetable broth." },
                { type: "Nuts", desc: "This recipe uses pine nuts, but they're definitely 100% optional.", optional: true },
                { type: "Egg", desc: "The linked recipe calls for an egg for binding, but most recipes I've found don't, so you can probably omit it.", optional: true }
              ],
              ingredients: ["lamb", "long grain rice", "olive oil", "currants", "pine nuts", "cumin", "cinnamon", "oregano", "mint", "egg", "grape leaves", "bell pepper"]
            }
        ], 
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Artsakh",
        music: [
            { name: "Hi Bala - Summer Day", url: "https://www.youtube.com/watch?v=PWySDaci2qo", favorite: true },
            { name: "Voices of Artsakh - Pahpanner", url: "https://www.youtube.com/watch?v=MtQHtqnhWmA" }
        ]
    },
    "AU": { // 25m
        name: "Australia", desc: "The Commonwealth of Australia is best known for the fact that every wild animal on the mainland will kill you. It was doing great until the British showed up.",
        population: 25097700, popEstimate: 2018, area: 7692024, independence: "1901-01-01", indFrom: "Britain", demonym: "Australian", currency: "Australian Dollar ($)", 
        languages: ["English"], motto: `None`, neighbors: ["None"], 
        foodURL: "https://en.wikipedia.org/wiki/Australian_cuisine",
        food: [
            { name: "Meat Pie", type: "Pastry", url: "https://www.thespruceeats.com/aussie-meat-pie-256149", date: "2018-09-16", favorite: true, 
              img: "meatpie.jpg", desc: "Juicy flaky meaty goodness. A perfect pastry. If you want to make the pie crust from scratch, I used <a href='https://www.youtube.com/watch?v=1siW_wm9TnA' target='_blank' rel='external nofollow noopener noreferrer'>this recipe</a> for the bottom dough and <a href='https://www.youtube.com/watch?v=Dcqk74DP-sw' target='_blank' rel='external nofollow noopener noreferrer'>this recipe</a> for the top.",
              diet: [
                { type: "Meat", desc: "This recipe is mostly beef and beef stock. I used a vegan ground beef substitute and vegan beef-flavored stock without issue." },
                { type: "Gluten", desc: "The pie crust uses a lot of flour." },
                { type: "Dairy", desc: "The pie crust uses a LOT of butter." },
                { type: "Soy", desc: "The filling contains Worcestershire Sauce, which often has soy sauce in it." },
                { type: "Egg", desc: "An egg wash is applied to the top of the pie before baking." },
                { type: "Fish", desc: "The filling contains Worcestershire Sauce, which can have anchovies in it. I was able to easily find an anchovy-free bottle in a regular grocery store.", optional: true }
              ],
              ingredients: ["olive oil", "onion", "ground beef", "corn starch", "beef stock", "tomato paste", "worcestershire sauce", "vegetable bouillon", "flour", "butter", "egg"]
            },
            { name: "Burger with the Lot", type: "Wrap", url: "https://www.allrecipes.com/recipe/70869/aussie-works-burger/", date: "2018-09-24", 
              img: "aussieburg.jpg", desc: "If you don't like pineapples, fried eggs, or beetroot, this dish might not be for you. If you dislike all three of those things, then you might be me, and maybe you should go back in time and tell yourself not to make this dish.",
              diet: [
                { type: "Meat", desc: "It's a hamburger. I used a vegan patty without any issue. Canadian bacon is also a topping on this burger." },
                { type: "Gluten", desc: "The buns contain gluten." },
                { type: "Dairy", desc: "Cheese is one of the toppings on this burger." },
                { type: "Egg", desc: "A fried egg is one of the toppings on this burger. Mayonnaise is one of the optional sauces, but I used a vegan mayo without any issue." }
              ],
              ingredients: ["ground beef", "onion", "olive oil", "tomato", "lettuce", "beetroot", "cheddar cheese", "pineapple", "mustard", "mayonnaise", "ketchup", "relish", "buns"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Australia",
        music: [
            { name: "A.B. Original - January 26", url: "https://www.youtube.com/watch?v=tZ9qeX4gUeo", favorite: true },
            { name: "The Avalanches - Frontier Psychiatrist", url: "https://www.youtube.com/watch?v=qLrnkK2YEcE" },
            { name: "David Hudson - Echoes", url: "https://www.youtube.com/watch?v=frFRIJjwwus" },
            { name: "NoKTuRNL - Woomera", url: "https://www.youtube.com/watch?v=x2VsUcyrloM" },
            { name: "Shane Howard ft. Archie Roach - Back to Culture", url: "https://www.youtube.com/watch?v=QtfsgXuArtI" },
            { name: "The Wiggles - Hot Potato/Fruit Salad", url: "https://www.youtube.com/watch?v=OZ72_mLcNdM" },
            { name: "Yothu Tindi - Treaty", url: "https://www.youtube.com/watch?v=Jf-jHCdafZY" }
        ]
    },
    "AT": { // 8.8m
        name: "Austria", desc: "The Republic of Austria is a landlocked country in Central Europe. One time their archduke got assassinated and it sort of sparked a mild war. It wasn't that big of a deal, and after it ended, everyone agreed to never have a war like that again. Everybody kept this promise. Especially the Germans.",
        population: 8823054, popEstimate: 2018, area: 83879, independence: "1955-10-26", indFrom: "Allied Forces", demonym: "Austrian", currency: "Euro (€)", 
        languages: ["German"], motto: `None`, neighbors: ["CZ", "DE", "HU", "IT", "LI", "SK", "SI", "CH"], 
        foodURL: "https://en.wikipedia.org/wiki/Austrian_cuisine",
        food: [
            { name: "Beef Goulash", type: "Soup", url: "https://foodwishes.blogspot.com/2013/01/beef-goulash-thick-hungarian-soup-thin.html", date: "2018-09-29", favorite: true, 
              img: "goulash.jpg", desc: "A very strongly spiced stew. Warm, delicious, and very filling. If I lived somewhere that actually had noticable weather changes between seasons, I would definitely eat this during the winter.",
              diet: [
                { type: "Meat", desc: "It's a beef stew. I used a vegan beef alternative and vegetable broth without any issue." }
              ],
              ingredients: ["beef", "olive oil", "onion", "caraway", "paprika", "cayenne", "marjoram", "thyme", "chicken broth", "tomato paste", "garlic", "bay leaf", "sugar", "balsamic vinegar"]
            },
            { name: "Vienna Bread", type: "Bread", url: "https://www.youtube.com/watch?v=5LUBrnoILFM", date: "2018-09-28", 
              img: "viennabread.jpg", desc: "Because I am bad with yeast, the recipe I made can more accurately be described as Vienna bread<em>sticks</em>. Fortunately, size didn't matter and these bread babies were soft and delicious.",
              diet: [
                  { type: "Gluten", desc: "It's bread." },
                  { type: "Dairy", desc: "Milk powder and butter are important ingredients in this bread." }
              ],
              ingredients: []
            },
            { name: "Liptauer", type: "Sauce", url: "https://www.masalaherb.com/austrian-liptauer-recipe/", date: "2018-09-28", 
              img: "liptauer.jpg", desc: "A tasty and somewhat spicy cheese spread. The spiciness was countered by the cheesiness, so it added a nice creamy kick to the bread I spread it on.",
              diet: [
                  { type: "Dairy", desc: "Cheese and butter are the main ingredients of this spread." }
              ],
              ingredients: ["cheese", "cottage cheese", "butter", "onion", "garlic", "dijon mustard", "paprika", "caraway", "capers", "pickles"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Austria",
        music: [
            { name: "Dornenreich - Wer hat Angst von Einsamkeit?", url: "https://www.youtube.com/watch?v=ewkHBPa6Lrc" },
            { name: "Schönheitsfehler - Fuck You", url: "https://www.youtube.com/watch?v=W5REaarQJ8w" },
            { name: "Christina Stürmer - Vorbei", url: "https://www.youtube.com/watch?v=m4-PvRag6DY" },
            { name: "Visions of Atlantis - The Deep & The Dark", url: "https://www.youtube.com/watch?v=9s-UeGOuYy4", favorite: true },
            { name: "Lemo - So wie du bist", url: "https://www.youtube.com/watch?v=-6QYdxYsMVg" },
            { name: "Andreas Gabalier - Hulapalu", url: "https://www.youtube.com/watch?v=5krScgyxzBI" },
            { name: "Opus - Live is Life", url: "https://www.youtube.com/watch?v=pATX-lV0VFk" }
        ]
    },
    "AZ": { // 9.9m
        name: "Azerbaijan", desc: "The Republic of Azerbaijan toes the border between Europe and Asia. They declared their independence in 1918, then got incorporated into the Soviet Union a couple years later. Now they're their own country again.",
        population: 9898100, popEstimate: 2018, area: 86600, independence: "1991-10-18", indFrom: "Soviet Union", demonym: "Azerbaijani", currency: "Azerbaijani manat (₼)", 
        languages: ["Azerbaijani"], motto: `"The Land of Fire."`, neighbors: ["AM", "AM-AR", "GE", "IR", "RU", "TR"], 
        foodURL: "https://en.wikipedia.org/wiki/Azerbaijani_cuisine",
        food: [
            { name: "Dushbara", type: "Soup", url: "http://flavorsofbaku.com/portfolio-view/dushbara/", date: "2018-10-06", 
              img: "dushbara.jpg", desc: "A very tasty tortellini-esque soup. Another prime example of how mint and meat are a good combination.",
              diet: [
                  { type: "Meat", desc: "The primary ingredient of the filling is beef, and meat broth is used. I used a vegan beef alternative and vegetable broth without any issue." },
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Egg", desc: "Egg is used in the dough." }
              ],
              ingredients: ["flour", "egg", "beef", "lamb", "onion", "turmeric", "mint", "vinegar"]
            },
            { name: "Shekerbura", type: "Pastry", url: "https://www.196flavors.com/azerbaijan-shekerbura/", date: "2018-10-06", 
              img: "shekerbura.jpg", desc: "The cardamom is a very nice touch, but otherwise these are basically just almondy biscuits.",
              diet: [
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Egg", desc: "Egg is used in the dough." },
                  { type: "Dairy", desc: "Butter is used in the dough." },
                  { type: "Nuts", desc: "This recipe uses nuts. Almonds, walnuts, or hazelnuts." }
              ],
              ingredients: ["flour", "butter", "egg", "sour cream", "salt", "vanilla", "yeast", "sugar", "milk", "hazelnut", "almond", "walnut", "cardamom"]
            }, 
            { name: "Ayran", type: "Beverage", url: "https://www.youtube.com/watch?v=QCJ8IlfiXz0", date: "2018-10-06", 
              img: "ayran.jpg", desc: "A very refreshing beverage. I preferred it without mint on top, though.",
              diet: [
                  { type: "Dairy", desc: "It's basically watered down yoghurt." }
              ],
              ingredients: ["yogurt", "mint", "milk"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Azerbaijan",
        music: [
            { name: "Elvina Mustafazadeh - Bakı", url: "https://www.youtube.com/watch?v=G6aetkhXYGw" },
            { name: "Natavan Həbibi - Ulduzlar", url: "https://www.youtube.com/watch?v=44mc97Xes5Q" },
            { name: "Eldar Gasimov - 1&Only", url: "https://www.youtube.com/watch?v=cWcsYZNe_uU" },
            { name: "Aygü Kazımova ft. Snoop Dogg - Coffee From Colombia", url: "https://www.youtube.com/watch?v=dseGdBmMGXE", favorite: true },
            { name: "Aziza Mustafa Zadeh - Sunny Rain", url: "https://www.youtube.com/watch?v=uGAOyX6IPwc" },
            { name: "Orxan Zeynallı ft. Ayka - M", url: "https://www.youtube.com/watch?v=DmfDOzFPPOI" },
            { name: "Miri Yusif ft. DJ Matuya - Bomba Kimi", url: "https://www.youtube.com/watch?v=sGT_NG2UK_A" }
        ]
    },
    "BS": { // 0.4m
        realFirstLetter: "B",
        name: "The Bahamas", desc: "The Commonwealth of The Bahamas are an island nation in the Caribbean. They are the reason the Baha Men and, thus, the song 'Who Let the Dogs Out?' exist.",
        population: 391232, popEstimate: 2016, area: 13878, independence: "1973-07-10", indFrom: "Britain", demonym: "Bahamian", currency: "Bahamian Dollar ($)", 
        languages: ["English"], motto: `"Forward, Upward, Onward, Together."`, neighbors: ["None"], 
        foodURL: "https://en.wikipedia.org/wiki/Bahamian_cuisine",
        food: [
            { name: "Bahamian Macaroni and Cheese", type: "Casserole", url: "https://www.trubahamianfoodtours.com/bites-of-nassau-food-tour/bahamian-macaroni-cheese/", date: "2018-10-16", 
              img: "macaroni.jpg", desc: "A very rich and filling baked macaroni and cheese dish. This ain't your mamma's macaroni and cheese, unless your mother is from the Bahamas, then it probably is.",
              diet: [
                { type: "Dairy", desc: "Butter, cheese, and evaporated milk are used in this recipe." },
                { type: "Egg", desc: "Egg is used for keeping things together." },
                { type: "Gluten", desc: "Macaroni usually has flour with gluten in it. If you can find/make gluten-free macaroni, then all is well." },
                { type: "Spicy", desc: "It can be spicy, but you can adjust how much pepper you want to use." }
              ],
              ingredients: ["macaroni", "butter", "cheddar cheese", "bell pepper", "onion", "eggs", "paprika", "habanero pepper", "evaporated milk"]
            },
            { name: "Switcha", type: "Beverage", url: "https://www.trubahamianfoodtours.com/tru-bahamian-must-eats/switcha/", date: "2018-10-18", 
              img: "switcha.jpg", desc: "Unsurprisingly it tastes like sweet, citrussy, and sour water. It is a bit refreshing but probably not the best thing to drink at night like I just did. Who needs sleep anyway?",
              diet: [
                { type: "Vegan", desc: "This bevvy is vegan-friendly without any substitutions." }
              ],
              ingredients: ["sugar", "lemon", "key lime", "grapefruit"]
            },
            { name: "Guava Duff", type: "Dessert", url: "https://www.trubahamianfoodtours.com/tru-bahamian-must-eats/guava-duff/", date: "2018-10-19", 
              img: "duff.jpg", desc: "The combination of boiled dough with mashed up guavas is very interesting. The combination of creamed butter and sugar to make the sauce is very delicious. I will definitely be using it on many non-duff foods.",
              diet: [
                  { type: "Dairy", desc: "Milk and butter are used in the dough and the sauce." },
                  { type: "Egg", desc: "Egg is used in the dough." },
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Alcohol", desc: "Rum or brandy are used in the sauce, but I substituted with vanilla and it was still tasty." }
              ],
              ingredients: ["guava", "sugar", "cinnamon", "allspice", "flour", "baking powder", "salt", "shortening", "milk", "egg", "butter", "rum", "brandy"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_the_Bahamas",
        music: [
            { name: "Baha Men - Night & Day", url: "https://www.youtube.com/watch?v=mXlzHjubkXg" },
            { name: "Julien Believe ft. Bunji Garlin - Live and Wine", url: "https://www.youtube.com/watch?v=e_mO4BKvrRs" },
            { name: "K.B. - Boy U Don't Know Me Eh?", url: "https://www.youtube.com/watch?v=leRJqvOlDGE" },
            { name: "Stileet - Shibby Bam Bam", url: "https://www.youtube.com/watch?v=c8oE3aoIPuo" },
            { name: "Baha Men - Off the Leash", url: "https://www.youtube.com/watch?v=fGUZgzq9Ocw", favorite: true },
            { name: "Angelique Sabrina - Right Now", url: "https://www.youtube.com/watch?v=bqcOHlzYFyo" }
        ]
    },
    "BH": { // 1.4m 
        focusArea: "QA", name: "Bahrain", desc: "The Kingdom of Bahrain is an Asian island country and the first post-oil economy in the Persian Gulf. Its capital is Manama, not to be confused with Mah Nà Mah Nà.",
        population: 1425171, popEstimate: 2016, area: 765.3, independence: "1971-08-15", indFrom: "Britain", demonym: "Bahrani", currency: "Bahraini Dinar (BD)", 
        languages: ["Arabic"], motto: `None`, neighbors: ["None"], 
        foodURL: "https://en.wikipedia.org/wiki/Bahraini_cuisine",
        food: [
            { name: "Chicken Machboos", type: "Rice", url: "https://www.geniuskitchen.com/recipe/traditional-bahraini-chicken-machboos-machbous-304034", date: "2018-10-23", favorite: true,  
              img: "machboos.jpg", desc: "There were a lot of flavors in this, and I think this may have been some of the best chicken I've ever eaten. I never would have thought to put cinnamon on chicken, but now I know the truth: it's tasty.",
              diet: [
                  { type: "Meat", desc: "This recipe uses chicken. You can probably also just not put chicken in it, and use vegetable broth to cook the rice in." },
                  { type: "Dairy", desc: "Butter is added to the rice. You can probably skip this or add a vegan substitute with no issue." }
              ],
              ingredients: ["basmati rice", "tomatoes", "chicken", "onion", "coriander", "cilantro", "pepper", "dried lime", "baharat", "turmeric", "cumin", "cinnamon", "cardamom", "garlic", "ginger", "butter", "lemon juice", "rose water"]
            },
            { name: "Balaleet", type: "Noodle", url: "https://www.youtube.com/watch?v=JTwOBFvfXP0", date: "2018-10-27", 
              img: "balaleet.jpg", desc: "If you want to have pasta for breakfast, but also want to have tons of sugar in your breakfast, balaleet has got you covered. Also, a tablespoon of cardamom is a lot, so if you're like me and think you're too cool to buy pre-ground cardamom, reconsider before making this recipe.",
              diet: [
                { type: "Gluten", desc: "Vermicelli is usually made with wheat flour." },
                { type: "Egg", desc: "Half of this dish is made with scrambled eggs or an omelette. You can omit this if you just want some sweet noodles." }
              ],
              ingredients: ["vermicelli", "egg", "saffron", "cardamom", "sugar", "oil"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Bahrain",
        music: [
            { name: "Hala Al Turk - Happy Happy", url: "https://www.youtube.com/watch?v=X_DeGCloQWg" },
            { name: "Hala ft. Julian - Ok Habibi", url: "https://www.youtube.com/watch?v=5cYMsaJGxls", favorite: true },
            { name: "Osiris - Myths & Legends", url: "https://www.youtube.com/watch?v=N2tcW6nFhr4" },
            { name: "Hot Laser - Crazy Angel", url: "https://www.youtube.com/watch?v=5oD9p8B1MNk" },
            { name: "Flamingods - Taboo Groves", url: "https://www.youtube.com/watch?v=KyxG2sIxDA0" }
        ]
    },
    "BD": {  // 162m
        name: "Bangladesh", desc: "The People's Republic of Bangladesh is a country in South Asia. It was part of British India when that was a thing, but fortunately the British eventually fucked off.",
        population: 162951560, popEstimate: 2016, area: 147570, independence: "1971-03-26", indFrom: "Pakistan", demonym: "Bangladeshi", currency: "Taka (৳)", 
        languages: ["Bengali"], motto: `"Victory to Bengal."`, neighbors: ["IN", "MM"], 
        foodURL: "https://en.wikipedia.org/wiki/Bangladeshi_cuisine",
        food: [
            { name: "Mughlai paratha", type: "Wrap", url: "https://hebbarskitchen.com/mughlai-paratha-recipe-moglai-porota/", date: "2018-11-03", favorite: true,
              img: "paratha.jpg", desc: "Unsurprisingly, a recipe that involves lots of spiced cheese in a fried dough wrapper is absolutely delicious.",
              diet: [
                { type: "Dairy", desc: "This dish contains paneer cheese. You can use other fillings, though." },
                { type: "Gluten", desc: "Wheat flour is used to make the dough." }
              ],
              ingredients: ["maida flour", "onion", "chili pepper", "ginger garlic paste", "bell pepper", "carrot", "turmeric", "chili powder", "coriander ground ", "cumin", "aamchur", "garam masala", "paneer cheese"]
            },
            { name: "Chomchom", type: "Dessert", url: "https://hebbarskitchen.com/chum-chum-recipe-cham-cham-sweet-recipe/", date: "2018-11-04", 
              img: "chom.jpg", desc: "Fresh cheese curds boiled in sugar syrup, stuffed with a sugary milk goo. I love milk but I was still not sold on this. The texture is uncomfortable.",
              diet: [
                { type: "Dairy", desc: "These things are almost entirely made of milk. If you don't eat dairy, this recipe is definitely not for you." },
                { type: "Gluten", desc: "Flour is an optional ingredient.", optional: true }
              ],
              ingredients: ["milk", "ghee", "cardamom", "saffron", "milk powder", "cream", "flour", "coconut"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Bangladesh",
        music: [
            { name: "Samina Chowdhury - Rup Dekhilam", url: "https://www.youtube.com/watch?v=BOf-0g4Pkc8" },
            { name: "Oyshee - Nalish", url: "https://www.youtube.com/watch?v=YwSabAEcrQ4" },
            { name: "Miles - Premer Agun", url: "https://www.youtube.com/watch?v=SGNcN4w8e5I" },
            { name: "Ferdous Wahid - Je Jon Premer Vaab", url: "https://www.youtube.com/watch?v=YqWeEN73PDw", favorite: true },
            { name: "Love Runs Blind - Nirobe", url: "https://www.youtube.com/watch?v=QGomNwVXT3I" },
            { name: "Anima Roy - Sey Valo Sey Valo", url: "https://www.youtube.com/watch?v=geGFT1Cm8WQ" },
            { name: "Ayub Bachchu - Jete Path", url: "https://www.youtube.com/watch?v=1Qbrw7Wo6OM" }
        ] //https://www.youtube.com/watch?v=hvK-XLbWUhg
    },
    "BB": { // 0.3m
        name: "Barbados", desc: "Barbados is an island country in the West Indies. They're still part of the Commonwealth, and are well known for inventing the international pop star and diplomat Her Excellency Dr. Rihanna.",
        population: 277821, popEstimate: 2010, area: 439, independence: "1966-11-30", indFrom: "Britain", demonym: "Barbadian", currency: "Barbadian Dollar ($)", 
        languages: ["English", "Bajan Creole"], motto: `"Pride and Industry"`, neighbors: ["None"], 
        foodURL: "https://en.wikipedia.org/wiki/Barbadian_cuisine",
        food: [
            { name: "Bajan Chicken and Potato Roti", type: "Wrap", url: "https://www.totallybarbados.com/articles/barbados-recipes/chicken-potato-roti-recipe/", date: "2018-11-10", 
              img: "roti.jpg", desc: "A winning combination of chicken, potato, jerk seasoning, and flatbread. I burnt my hand a bit when I was cooking the roti. Worth it.",
              diet: [
                  { type: "Meat", desc: "Chicken." },
                  { type: "Dairy", desc: "Butter can be used in the dough, but other types of shortening work, too." },
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Spicy", desc: "Peppies are used. You can use less spicy peppers, or no peppers at all, if that's how you want to roll." }
              ],
              ingredients: ["flour", "shortening", "butter", "chicken", "parsley", "thyme", "jerk seasoning", "onion", "garlic", "scotch bonnet pepper", "potatoes"]
            },
            { name: "Cheese Cutter", type: "Wrap", url: "https://www.barbadospocketguide.com/eat-and-drink-in-barbados/bajan-food-and-drinks/cheese-cutter.html", date: "2018-11-18", 
              img: "cutter.jpg", desc: "Composed of Bajan Salt Bread, Bajan Pepper Sauce, and cheddar cheese. A solid cheese sandwich. You can't go wrong with a cheese sandwich. Who doesn't like a cheese sandwich? Everybody wants a cheese sandwich.",
              diet: [
                  { type: "Gluten", desc: "Flour is used in the bread dough." },
                  { type: "Dairy", desc: "It's a cheese sandwich. You can use other fillings, though." },
                  { type: "Spicy", desc: "The sauce is spicy. You can just not add the pepper sauce, or tone down the pepper like I did, if you don't want that." }
              ],
              ingredients: ["flour", "sugar", "salt", "vegetable oil", "yeast", "scotch bonnet pepper", "onion", "turmeric", "mustard", "vinegar", "brown sugar", "cheddar cheese"]
            },
            { name: "Bajan Salt Bread", type: "Bread", url: "https://www.totallybarbados.com/articles/barbados-recipes/bajan-salt-recipe/", date: "2018-11-18", 
              img: "saltbread.jpg", desc: "It's a pretty solid bread. Good for sandwiches, which is what I used it for. Because I am a fool, mine was a bit more dense than it's supposed to be, but you can avoid this problem by not being bad at baking.",
              diet: [
                  { type: "Gluten", desc: "This is literally bread. Sorry." }
              ],
              ingredients: ["flour", "sugar", "salt", "vegetable oil", "yeast"]
            },
            { name: "Bajan Pepper Sauce", type: "Sauce", url: "http://eatlikeagirl.com/recipe-bajan-pepper-sauce", date: "2018-11-18", 
              img: "bajansaus.jpg", desc: "A nice spicy sauce. It's heavily turmeric'd, which gave it a great flavor that many hot sauces lack, so even if you aren't huge on spicy-for-the-sake-of-spicy, it's a nice flavorful sauce.",
              diet: [
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." },
                  { type: "Spicy", desc: "It's called Pepper Sauce for a reason, buddy." }
              ],
              ingredients: ["scotch bonnet pepper", "onion", "turmeric", "mustard", "vinegar", "brown sugar"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Barbados",
        music: [
            { name: "2 Mile Hill - Get Over", url: "https://www.youtube.com/watch?v=e2UhDErL2V0" },
            { name: "Krosfyah ft. Khiomal - Start De Madness", url: "https://www.youtube.com/watch?v=RjX4BZFZxnM" },
            { name: "Charles D. Lewis - Another Friday Night", url: "https://www.youtube.com/watch?v=F8wcku0zE2Y", favorite: true },
            { name: "Shontelle - Perfect Nightmare", url: "https://www.youtube.com/watch?v=3ZYRgehIIVg" },
            { name: "Krosfyah - Work It", url: "https://www.youtube.com/watch?v=DmOBwuhhQSc" }
        ]
    },
    "BY": { // 9.4m
        name: "Belarus", desc: "The Republic of Belarus is a country in Eastern Europe. They like potatoes as all good boys should. Their president has been the president since 1994, which means maybe it's time for him to let someone else have a turn.",
        population: 9491800, popEstimate: 2018, area: 207595, independence: "1990-07-27", indFrom: "Soviet Union", demonym: "Belarusian", currency: "Belarusian ruble (Br)", 
        languages: ["Belarusian", "Russian"], motto: `None`, neighbors: ["LV", "LT", "PL", "RU", "UA"], 
        foodURL: "https://en.wikipedia.org/wiki/Belarusian_cuisine",
        food: [
            { name: "Draniki", type: "Vegetable", url: "https://www.belarus.by/en/about-belarus/cuisine/draniki", date: "2018-11-19", 
              img: "draniki.jpg", desc: "Potato pancakes. I don't know what I did wrong but I somehow managed to completely ruin a frying pan making these. Pro-tip: don't do that.",
              diet: [
                { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["potato", "onion"]
            },
            { name: "Kalduny", type: "Dumpling", url: "https://windowstorussia.com/kalduny-recipe-a-pancake-and-or-a-dumpling.html", date: "2018-12-05", 
              img: "kalduny.jpg", desc: "Dumplings and/or stuffed pancakes, full of meat and onion. They're like <span style='text-decoration: line-through'>Uncrustables®</span> sealed crustless sandwiches, but with more potato.",
              diet: [
                  { type: "Meat", desc: "They're stuffed with meat. You can put something else in them, though." },
                  { type: "Egg", desc: "Egg is used in the dough. Honestly you probably don't need it.", optional: true },
                  { type: "Gluten", desc: "Flour is used in the dough, but probably isn't actually necessary.", optional: true }
              ],
              ingredients: ["potato", "onion", "flour", "chicken", "beef", "egg"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Belarus",
        music: [
            { name: "Krambambulya - Heta Nia Vietraź", url: "https://www.youtube.com/watch?v=W7w7MvqxdT4" },
            { name: "Angelica Agurbash - Ptichka", url: "https://www.youtube.com/watch?v=PAyecepprKE" },
            { name: "Nadezhda Misyakova - Sokal", url: "https://www.youtube.com/watch?v=StP4W-7gDcQ" },
            { name: "Open Space - Get Away", url: "https://www.youtube.com/watch?v=IVO4puEvJI0" },
            { name: "Brutto - Рокi", url: "https://www.youtube.com/watch?v=YoHBzEJ81yA", favorite: true },
            { name: "Alyona Lanskaya - Solayoh", url: "https://www.youtube.com/watch?v=N4S4m9R-ffA" },
            { name: "Fantastiques - Beautiful Terminator", url: "https://www.youtube.com/watch?v=tKsi5G1lUIM" },
            { name: "NAVIBAND - Abdymi Mianie", url: "https://www.youtube.com/watch?v=q9yHL_tcTik" },
            { name: "STARY OLSA - Vitaut", url: "https://www.youtube.com/watch?v=wJ64E9hWxcA" }
        ]
    },
    "BE": {  // 11.4m
        name: "Belgium", desc: "The Kingdom of Belgium is a country in Western Europe. The Global Peace Index considers it one of the most peaceful countries in the world, and it has very high standards of living, which means they're probably all a bunch of no-good commies.",
        population: 11420163, popEstimate: 2018, area: 30528, independence: "1839-04-19", indFrom: "the Netherlands", demonym: "Belgian", currency: "Euro (€)", 
        languages: ["Dutch", "French", "German"], motto: `"Unity makes Strength."`, neighbors: ["FR", "DE", "LU", "NL"], 
        foodURL: "https://en.wikipedia.org/wiki/Belgian_cuisine",
        food: [
            { name: "Liège Waffles", type: "Bread", url: "http://www.waffle-recipes.com/liege-waffle-recipe-gaufres-de-liege/", date: "2018-12-19", favorite: true,
              img: "liege.jpg", desc: "These were without a doubt the best waffles I have ever eaten, and perhaps one of the best sweet dough-based foods I've ever eaten, too. They were rich, crisp, caramelly, and delicious all around. If you have a free weekend and can get your hands on three different kinds of flour and a few other very specific ingredients, making these beautiful babies would be an excellent use of that time. The man behind <a href='http://www.waffle-recipes.com/'>waffle-recipes.com</a> is a waffle genius. Usually when I make a complicated or time-consuming dish I think \"that was good, but too much effort to make again.\" With these, they were a lot of effort, but it was all worth it.",
              diet: [
                  { type: "Gluten", desc: "This recipe calls for three different kinds of flour. It's safe to say there is gluten." },
                  { type: "Dairy", desc: "Cultured/European-style Butter is used in the dough." },
                  { type: "Egg", desc: "Eggs are used in the dough." },
                  { type: "Honey", desc: "Orange Blossom Honey is used in the dough." }
              ],
              ingredients: ["white pastry flour", "yeast", "egg", "mineral water", "whole wheat pastry flour", "dark rye flour", "cassonade", "sea salt", "orange blossom honey", "vanilla pods", "butter", "pearl sugar"]
            },
            { name: "Rijstevlaai", type: "Pastry", url: "https://www.thedutchtable.com/2010/01/rijstevlaai-rice-pie.html", date: "2018-12-15", 
              img: "rijstevlaai.jpg", desc: "If you've ever looked at rice pudding and wished it was baked in a pie crust, then your prayers have been answered by rijstevlaai, which is literally just that. I've never had rice pudding at all before, so the texture was an interesting new experience. The creaminess was appreciated. Pie crust is always good, so that was an added bonus.",
              diet: [
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Dairy", desc: "Butter is used in the dough, and the filling is mostly just milk." },
                  { type: "Egg", desc: "Egg is used in the dough and filling." }
              ],
              ingredients: ["milk", "rice", "sugar", "egg", "vanilla", "flour", "yeast", "butter"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Belgium",
        music: [
            { name: "AnnaGrace - Let The Feelings Go", url: "https://www.youtube.com/watch?v=eEmOSjGONuA" },
            { name: "Diablo Blvd - The Future Will Do What It's Told", url: "https://www.youtube.com/watch?v=QzG12wXR_6s" },
            { name: "Lio - Sage Comme Une Image", url: "https://www.youtube.com/watch?v=0Bywahz2zCo" },
            { name: "Stromae - Papaoutai", url: "https://www.youtube.com/watch?v=oiKj0Z_Xnjc", favorite: true },
            { name: "Gwyllions - I Can Hear Music", url: "https://www.youtube.com/watch?v=w4HZnOxIWD8" },
            { name: "Zap Mama - Miss Q'n", url: "https://www.youtube.com/watch?v=2rB6-GWmPOo" }
        ]
    },
    "BZ": { // 0.4m
        name: "Belize", desc: "Belize is a country in Central America. It's nice to have a country with just a one word name, y'know? It ain't the Kingdom of Belize. It's not the People's Democratic Republic of Belize and Friends. It's not the Adventures of Belize. Just Belize. Barbados and Antigua and Barbuda are like that, too, so maybe it's a Caribbean thing? Anyway, Belize is a cool place, and the only country to be in the Caribbean Community, Community of Latin American and Caribbean States, Central American Integration System, AND the Commonwealth, because Britain can't leave anything alone.",
        population: 387879, popEstimate: 2017, area: 22966, independence: "1981-09-21", indFrom: "Britain", demonym: "Belizean", currency: "Belize Dollar ($)", 
        languages: ["English"], motto: `"Under the shade I flourish."`, neighbors: ["GT", "MX"], 
        foodURL: "https://en.wikipedia.org/wiki/Belizean_cuisine",
        food: [
            { name: "Fry Jacks", type: "Bread", url: "https://www.geniuskitchen.com/recipe/fry-jacks-belize-499428", date: "2018-12-18", 
              img: "fryjack.jpg", desc: "You make some dough and then you fry the dough and then you eat the dough and it is a good tasty thing you can eat with honey or cheese or jam or any other good thing. That's what this is. I got two delicious breakfasts out of it, served with honey the first time and with, uh, cheese puffs, the second time.",
              diet: [
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["flour", "baking powder", "shortening", "oil"]
            },
            { name: "Chicken Legs Recado Rojo", type: "Meat", url: "https://www.splendidtable.org/recipes/chicken-legs-recado-rojo", date: "2018-12-15", 
              img: "chickenrecado.jpg", desc: "I accidentally spilled a bunch of the recado rojo braising liquid onto the door of my oven when I tried putting it in there. I should clean that soon. The end result was tasty, though, so it was probably worth it. Also I didn't have chicken legs so I used chicken breasts, so hopefully I don't go to chicken jail for my crimes.",
              diet: [
                  { type: "Meat", desc: "Surprise! This chicken dish has meat in it! You can use the recado rojo in empanada or tamale dough for a vegetarian meal, though." }
              ],
              ingredients: ["annato", "peppercorn", "cloves", "allspice", "oregano", "cumin", "cinnamon", "salt", "garlic", "orange juice", "vinegar", "fennel", "avocado leaves", "chicken legs", "apple cider vinegar"]
            },
            { name: "Recado Rojo", type: "Sauce", url: "https://www.whats4eats.com/sauces/recado-rojo-recipe", date: "2018-12-15", 
              img: "recadorojo.jpg", desc: "A sauce that, given its name, is probably supposed to be much more red than what I made. It was still very tasty though. I used it on chicken and mixed some of it with some Ranch dressing to make a much better Ranch dressing.",
              diet: [
                  { type: "Vegan", desc: "This sauce is vegan-friendly without any substitutions." }
              ],
              ingredients: ["annato", "peppercorn", "cloves", "allspice", "oregano", "cumin", "cinnamon", "salt", "garlic", "orange juice", "vinegar"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Belize",
        music: [
            { name: "Andy Palacio - Gi mi Punta Rock", url: "https://www.youtube.com/watch?v=lztsD-fBL8c" },
            { name: "Mr. Peters - Waves (Piano Version)", url: "https://www.youtube.com/watch?v=1IkZ1CodIgs", favorite: true },
            { name: "Shyne - Frank Matthews", url: "https://www.youtube.com/watch?v=dkaSmplaM7Y" },
            { name: "Umalali & The Garifuna Collective - Fuleisei", url: "https://www.youtube.com/watch?v=tVs6azqdqi4" },
            { name: "Bella Carib - I AM HURRICANE BELLA", url: "https://www.youtube.com/watch?v=0EUWFLM-geI" }
        ]
    },
    "BJ": { // 10.8m
        name: "Benin", desc: "The Republic of Benin is a country in West Africa. Before the French came in and ruined everything, there was a region in Benin known as the Kingdom of Dahomey, a kingdom with the best flag ever: <a href='https://en.wikipedia.org/wiki/File:Dahomey_kingdom_flag.png' target='_blank' rel='external nofollow noopener noreferrer'>an elephant with a crown</a>. The unrelated Kingdom of Benin, which is/was in present day Nigeria, <a href='https://en.wikipedia.org/wiki/File:Flag_of_the_Benin_Empire.svg' target='_blank' rel='external nofollow noopener noreferrer'>also has a great flag</a>.",
        population: 10872298, popEstimate: 2016, area: 144763, independence: "1960-08-01", indFrom: "France", demonym: "Beninese", currency: "West African CFA franc (CFA)", 
        languages: ["French"], motto: `"Fraternity, Justice, Labour."`, neighbors: ["BF", "NE", "NG", "TG"], 
        foodURL: "https://en.wikipedia.org/wiki/Benin_cuisine",
        food: [
            { name: "Wagasi in Sauce", type: "Other", url: "https://web.archive.org/web/20150424200135/www.celtnet.org.uk/recipes/miscellaneous/fetch-recipe.php?rid=misc-wagasi-sauce", date: "2018-12-18", 
              img: "wagasi.jpg", desc: "It's probably a cop-out to substitute wagasi cheese in a recipe literally called 'wagasi in sauce' but if you can find me a place to buy actual wagasi cheese in North America, you let me know and I will remake this recipe with the real thing. It was still tasty, though, as fried things and cheeses tend to be.",
              diet: [
                  { type: "Dairy", desc: "It's literally cheese." }
              ],
              ingredients: ["wagasi cheese", "port salut cheese", "tomatoes", "scotch bonnet peppers", "garlic", "onion"]
            },
            { name: "Peanut Soup", type: "Soup", url: "https://www.thefooddictator.com/hirshon-beninese-peanut-soup/", date: "2019-01-04", 
              img: "peanutsoup.jpg", desc: "It's got sweet potatoes, it's got coconut milk, it's got peanut butter, it's got spices, it's got soup. A very creamy soup that combines sweet and savory perfectly.",
              diet: [
                  { type: "Peanuts", desc: "You can't make an omelet without breaking a few eggs, and you can't make a peanut soup without breaking a few peanuts." },
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["peanut butter", "vegetable stock", "ginger", "onion", "green onions", "scallions", "celery", "jalapeno", "garlic", "turmeric", "sweet potato", "tomatoes", "smoked paprika", "maggi seasoning", "berbere", "cilantro"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Benin",
        music: [
            { name: "Angélique Kidjo - Once In A Lifetime", url: "https://www.youtube.com/watch?v=Z84rtbVbIEQ", favorite: true },
            { name: "Dibi Dobo - Kpêdé", url: "https://www.youtube.com/watch?v=ukfiIwK2GTk" },
            { name: "Blaaz - Petite soeur", url: "https://www.youtube.com/watch?v=CJQ49-2w2-U" },
            { name: "Angélique Kidjo - Bomba", url: "https://www.youtube.com/watch?v=R_OsCfXPFWg" },
            { name: "Zeynab - Si J'étais Riche", url: "https://www.youtube.com/watch?v=0F4iyMLESPo" }
        ]
    },
    "BT": {  // 0.8m
        name: "Bhutan", desc: "The Kingdom of Bhutan is a country in South Asia ruled by the Dragon King. As of January 2021, the current Dragon King - Jigme Khesar Namgyel Wangchuck - is the second youngest monarch in the world at 40 years old, after Rukidi IV of Toro, who is 28.",
        population: 797765, popEstimate: 2016, area: 38394, independence: "1949-08-08", indFrom: "Britain", demonym: "Bhutanese", currency: "Ngultrum (BTN)", 
        languages: ["Dzongkha"], motto: `None`, neighbors: ["CN", "IN", "CN-XZ"], 
        foodURL: "https://en.wikipedia.org/wiki/Bhutanese_cuisine",
        food: [
            { name: "Ema Datshi", type: "Rice", url: "https://www.196flavors.com/bhutan-ema-datshi/", date: "2019-01-06", favorite: true,
              img: "emadatshi.jpg", desc: "Cheese. Pepper. Rice. These were the ingredients chosen to create the perfect rice dish. Spiciness and cheesiness are a great combination.",
              diet: [
                  { type: "Spicy", desc: "One of the main ingredients is chili peppers. You can use whatever peppers you want (even bell peppers) to get a spiciness amount you are comfortable with." },
                  { type: "Dairy", desc: "Butter and cheese are used in this dish." }
              ],
              ingredients: ["chili peppers", "onion", "tomato", "garlic", "butter", "cheese", "rice"]
            },
            { name: "Momo", type: "Dumpling", url: "https://www.youtube.com/watch?v=RtLLiCaQeY8", date: "2019-01-09", 
              img: "momo.jpg", desc: "Hard to go wrong with steamed dumplings full of cheese. As soon as I master the art of folding and wrapping dumplings into various shapes you can bet your ass I'm gonna make a million YouTube videos abeut it.",
              diet: [
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Dairy", desc: "Cheese is used in these cheese dumplings. You can use other types of fillings." }
              ],
              ingredients: ["flour", "cheese", "cabbage", "onion", "garlic", "chili peppers", "coriander", "cilantro"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Bhutan",
        music: [
            { name: "Lama Gyurme & Sébastien Lucas - Mantra of Purification", url: "https://www.youtube.com/watch?v=Wpm4_RkhN14" },
            { name: "Yeshi Bidha ft. Kezang Dorji - Gokab", url: "https://www.youtube.com/watch?v=_VKqpZosho8" },
            { name: "Pema Dechen - 21 Tara Lullaby", url: "https://www.youtube.com/watch?v=dDkS4NVBeaM", favorite: true },
            { name: "Sonam Wangchen - Ya Taru Ma Taru", url: "https://www.youtube.com/watch?v=aJ9i2O-GvdA" },
            { name: "Kruxibles, Kinley Wangchuk, Karma Euden, JD, Kezang Dorji - Jabshu Machab", url: "https://www.youtube.com/watch?v=O-VKGexsHEk" }
        ]
    },
    "BO": { // 11.2m
        name: "Bolivia", desc: "The Plurinational State of Bolivia is a country in South America. Twenty percent of the world's glaciers are located within the country, so as you can guess, the Bolivians aren't particularly happy about climate change. Make a Bolivian happy, eat an oil company CEO.",
        population: 11248864, popEstimate: 2018, area: 1098581, independence: "1825-08-06", indFrom: "Spain", demonym: "Bolivian", currency: "Boliviano (BOB)", 
        languages: ["Spanish"], motto: `"Unity is Strength."`, neighbors: ["AR", "BR", "CL", "PY", "PE"], 
        foodURL: "https://en.wikipedia.org/wiki/Bolivian_cuisine",
        food: [
            { name: "Salteñas", type: "Pastry", url: "https://www.196flavors.com/bolivia-saltenas/", date: "2019-01-23", 
              img: "saltenas.jpg", desc: "The love child of soup dumplings and empanadas. The juiciness was a nice touch, and the annatto flavoring in the dough gave it a distinct taste.",
              diet: [
                  { type: "Meat", desc: "Beef, beef stock, and gelatin are ingredients in the filling. I used a vegan beef substitute and vegetable broth without any issue - but I have not tried using vegan gelatin substitutes." },
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Egg", desc: "Egg is used in the dough." },
                  { type: "Dairy", desc: "Butter is used in the filling and dough." }
              ],
              ingredients: ["beef", "gelatin", "broth", "butter", "turmeric", "annatto", "onion", "potato", "peas", "parsley", "sugar", "cumin", "oregano", "flour", "eggs", "food coloring"]
            },
            { name: "Sonso de Yuca", type: "Casserole", url: "http://chipabythedozen.com/en/zonzo-al-horno-baked-zonzo/", date: "2019-01-27",
              img: "sonso.jpg", desc: "Goopy and cheesy, just the way I like my food. REMEMBER TO PROPERLY COOK YOUR CASSAVA BEFORE EATING IT OR ELSE YOU WILL DIE FROM CYANIDE POISONING.",
              diet: [
                  { type: "Warning", desc: "Cassava must be cooked thoroughly to rid it of cyanide." },
                  { type: "Dairy", desc: "Cheese, butter and milk are used in this recipe." }
              ],
              ingredients: ["cassava", "mozzarella", "cheese", "butter", "milk"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Bolivia",
        music: [
            { name: "Mayra Gonzales - Más Que Eso", url: "https://www.youtube.com/watch?v=fGSGzGWU0Ow" },
            { name: "Tierra Alta - Estar Sin Ti", url: "https://www.youtube.com/watch?v=-hcbnL8bwPI" },
            { name: "Los Ronisch - Te Amo Te Extraño", url: "https://www.youtube.com/watch?v=Caqlj9Qxmc4", favorite: true },
            { name: "Chila Jatun - Boquita de Miel", url: "https://www.youtube.com/watch?v=Dqqgg22ljM8" },
            { name: "Octavia - Redención", url: "https://www.youtube.com/watch?v=EKYxAwVE-GA" },
            { name: "Avionica ft. Francisca Valenzuela - Distante   ", url: "https://www.youtube.com/watch?v=B2esmLQPzPU" }
        ]
    },
    "BA": {  // 3.5m
        name: "Bosnia and Herzegovina", desc: "Bosnia and Herzegovina is a country in Southeastern Europe. Some people call it \"the Heart-shaped Land\" because I guess the bar for what tourists find exciting is very low and triangles are kind of like hearts.",
        population: 3511372, popEstimate: 2013, area: 51129, independence: "1992-03-01", indFrom: "Yugoslavia", demonym: "Bosnian", currency: "Convertible Mark (BAM)", 
        languages: ["Bosnian", "Croatian", "Serbian"], motto: `None`, neighbors: ["HR", "ME", "RS"], 
        foodURL: "https://en.wikipedia.org/wiki/Bosnia_and_Herzegovina_cuisine",
        food: [
            { name: "Krofne", type: "Pastry", url: "https://mehtapozer.blogspot.com/2014/07/bosnian-doughnuts-aka-krofne.html", date: "2019-02-12", 
              img: "krofne.jpg", desc: "You get some donuts and you fry 'em up and you put some vanilla cream inside them and some powdered sugar outside them and it's good and that's what this is.",
              diet: [
                { type: "Gluten", desc: "Flour is used in the dough." },
                { type: "Egg", desc: "Egg is used in the dough." },
                { type: "Dairy", desc: "Milk is used in the dough." }
              ],
              ingredients: ["milk", "active yeast", "eggs", "sugar", "salt", "flour", "vanilla", "plum jam"]
            },
            { name: "Burek", type: "Pastry", url: "https://www.manusmenu.com/bosnian-burek", date: "2019-02-05", 
              img: "burek.jpg", desc: "The trend of \"getting some meat, spicing it up, stuffing it in some sort of dough, and cooking it\" will never get old, because it's always delicious.",
              diet: [
                  { type: "Meat", desc: "The primary ingredient of the filling is beef. I used a vegan beef alternative without any issue." },
                  { type: "Egg", desc: "Egg is used in the dough." },
                  { type: "Dairy", desc: "Butter is used in the dough." }
              ],
              ingredients: ["onion", "garlic", "beef", "parsley", "paprika", "phyllo dough", "butter", "sesame seeds", "egg"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Bosnia_and_Herzegovina",
        music: [
            { name: "Maya Berović - Opasne vode", url: "https://www.youtube.com/watch?v=vQYK4OXfHH0" },
            { name: "Maya Sar - Naša ljubav, naša kuća", url: "https://www.youtube.com/watch?v=NPwwQ-gQvr4" },
            { name: "Bijelo Dugme - Za Esmu", url: "https://www.youtube.com/watch?v=3lkJ8HRXTMw" },
            { name: "Dubioza kolektiv - No Escape (from Balkan)", url: "https://www.youtube.com/watch?v=jtgA0jvhp2A", favorite: true },
            { name: "Elvir Lakovic Laka - Piskila", url: "https://www.youtube.com/watch?v=yt3cRfsK3Rw" }
        ]
    },
    "BW": { // 2.2m
        name: "Botswana", desc: "The Republic of Botswana is a country in Southern Africa. Most of its land is part of the Kalahari Desert, which probably explains why it's one of the most sparsely populated countries in the world. Deserts ain't fun, y'all.",
        population: 2250260, popEstimate: 2016, area: 581730, independence: "1966-09-30", indFrom: "Britain", demonym: "Motswana (sing.), Batswana (pl.)", currency: "Pula (BWP)", 
        languages: ["English", "Setswana"], motto: `"Rain!"`, neighbors: ["NA", "ZA", "ZM", "ZW"], 
        foodURL: "https://en.wikipedia.org/wiki/Botswana_cuisine",
        food: [
            { name: "Vetkoek with Mince", type: "Bread", url: "https://sortedfood.com/recipe/4263", date: "2019-02-24", favorite: true,  
              img: "vetkoek.jpg", desc: "Gotta admit, the combination of curry powder, mango chutney, and cilantro makes for a very fine seasoning for beefs. The fried bread was also very delicious and complimented the mince well. A hearty dish all around.",
              diet: [
                  { type: "Meat", desc: "The primary ingredient of the filling is beef, and meat broth is used. I used a vegan beef alternative and vegetable broth without any issue." },
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Spicy", desc: "A little bit of peppies is in this recipe. You can omit this." }
              ],
              ingredients: ["flour", "yeast", "sugar", "onion", "chili peppers", "garlic", "beef", "curry powder", "tomatoes", "beef stock", "potatoes", "mango chutney", "coriander", "cilantro", "peas"]
            },
            { name: "Bogobe", type: "Other", url: "https://ethnicfoodsrus.com/around-the-world-recipes/african-cuisine/zimbabwean-cuisine/traditional-plain-zimbabwean-sadza/", date: "2019-02-24", 
              img: "bogobe.jpg", desc: "You get some cornmeal and you mix it with water and then you boil it and you get something like corn porridge or polenta. It tastes like corn.",
              diet: [
                { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["corn flour", "cornmeal"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Botswana",
        music: [
            { name: "Zeus - Im Out My Mind", url: "https://www.youtube.com/watch?v=AmVO8qblMlA" },
            { name: "MMP Family - Gao Tagilwe", url: "https://www.youtube.com/watch?v=f7PKUVuO6Y8" },
            { name: "Skinflint - Birds and Milk Bloody Milk", url: "https://www.youtube.com/watch?v=JUJxlT426No" },
            { name: "Charma Gal - Mokolodi", url: "https://www.youtube.com/watch?v=K1Fz1hTauFY", favorite: true }
        ]
    },
    "BR": { // 210m
        name: "Brazil", desc: "The Federative Republic of Brazil is the largest country in South America. It is divided into five regions, and is home to most of the Amazon rainforest, which accounts for over half of the remaining rainforests on Earth. Hopefully their new president gets kicked out of office before he destroys too much of it.",
        population: 210147125, popEstimate: 2019, area: 8515767, independence: "1822-09-07", indFrom: "Portugual", demonym: "Brazilian", currency: "Real (R$)", 
        languages: ["Brazilian Portuguese"], motto: `"Order and Progress."`, neighbors: ["AR", "BO", "CO", "FR", "GY", "PY", "PE", "SR", "UY", "VE"], 
        foodURL: "https://en.wikipedia.org/wiki/Brazilian_cuisine",
        food: [ // Southeast Brazil
            { name: "Pastel de Quiejo", type: "Pastry", url: "http://manisnacks.com/index.php/pastel-de-queijo/", date: "2019-03-10", 
              img: "pastel.jpg", desc: "As someone who goes to Panda Express almost exclusively for their cream cheese rangoons, it goes without saying that I am always down for fried dough full of creamy cheese, and that's exactly what these are. And I only burned myself with hot oil ONCE while making them! Progress!",
              diet: [
                  { type: "Egg", desc: "Egg is used in the dough." },
                  { type: "Alcohol", desc: "Cachaça is used in the dough. You can omit this and maybe just add a bit of baking powder or something to make the dough extra crunchy." },
                  { type: "Dairy", desc: "They're full of cheese. But you can put whatever you want in them to create Pastel de Whatever's-In-Your-Fridge." }
              ],
              ingredients: ["flour", "vegetable oil", "egg", "cachaça", "cheese"]
            }, // Center-West Brazil
            { name: "Galinhada", type: "Rice", url: "https://www.196flavors.com/brazil-galinhada/", date: "2019-03-11", 
              img: "galinhada.jpg", desc: "Chicken and rice with some nice herbage. Also saffron. A winning combination of people who like rice with meat in it.",
              diet: [
                  { type: "Meat", desc: "Chicken and chicken broth are used. Just don't put chicken in your chicken rice if you don't want to eat chicken." }
              ],
              ingredients: ["chicken", "chicken broth", "lemon", "oil", "scallion", "green onion", "garlic", "rice", "basmanti rice", "tomato", "bell pepper", "peas", "saffron", "parsley", "cilantro"]
            }, // North Brazil
            { name: "Escabeche", type: "Meat", url: "https://www.kroger.com/r/brazilian-fried-fish-with-onions-tomatoes-vinegar-recipe/201041", date: "2019-03-16", 
              img: "escabeche.jpg", desc: "You get some fish (or whatever you want to fry) and you marinate it in some acid and then you cook some onions in some acid and then you eat all of it and it tastes like delicious acid.",
              diet: [
                  { type: "Fish", desc: "Fish is the main part of this dish. I used chicken instead because I'd rather not trigger my allergies." },
                  { type: "Gluten", desc: "Flour is used in the breading." },
                  { type: "Egg", desc: "Egg is used in the breading." }
              ],
              ingredients: ["lime", "fish fillet", "olive oil", "onion", "tomato", "garlic", "bay leaf", "red wine vinegar", "flour", "cornmeal", "egg", "scallions", "green onions", "parsley"]
            }, // Southern Brazil
            { name: "Arroz Carreteiro", type: "Rice", url: "http://gourmetcentric.com/2016/02/arroz-carreteiro/", date: "2019-03-17", 
              img: "carreteiro.jpg", desc: "Nice beefy rice. Very filling, very hearty, very tasty. Also, fun fact: roasting your own bell peppers is a fun and easy way to make them taste better.",
              diet: [
                { type: "Meat", desc: "This is a meaty rice dish, but you can probably use fake meat or some vegetables or something." }
              ],
              ingredients: ["beef", "rice", "onion", "sausage", "red bell pepper", "parsley", "garlic", "oil"]
            }, // Northeast Brazil
            { name: "Tapioca Crepe", type: "Bread", url: "https://www.thespruceeats.com/tapioca-brazilian-crepes-3029703", date: "2019-03-20", 
              img: "tapioca.jpg", desc: "If you like crepes, then you'll like these! Because they're crepes. You can put crepe things in them. I used cheese. You can use chocolate. Or spinach. Or banangles. It's gonna be good. And gluten-free, if that's a thing your body cares about!",
              diet: [
                { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["tapioca"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Brazil",
        music: [
            { name: "Pabllo Vittar - Corpo Sensual", url: "https://www.youtube.com/watch?v=q6Lw6k7k9Rk" }, 
            { name: "Dream Team do Passinho - Oi Sumido", url: "https://www.youtube.com/watch?v=olQXbUe2fd8" }, 
            { name: "Anitta ft. Maluma - Sim Ou Não", url: "https://www.youtube.com/watch?v=7Yrghfw1eNo" },
            { name: "Supla - Garota de Berlim", url: "https://www.youtube.com/watch?v=2qk3IbODzIs" }, 
            { name: "Heavy Baile ft. Tati Quebra Barraco, Lia Clark - Berro", url: "https://www.youtube.com/watch?v=NzILPU8PG2s" },
            { name: "Skank - É Uma Partida De Futebol", url: "https://www.youtube.com/watch?v=7Ie4oL17Nwc" },
            { name: "Ludmilla - Sou Eu", url: "https://www.youtube.com/watch?v=8aQTjEotXVw" },
            { name: "Tim Maia - Descobridor Dos Sete Mares", url: "https://www.youtube.com/watch?v=W5ZCxHBh28k", favorite: true },
            { name: "Pitty - Teto de Vidro", url: "https://www.youtube.com/watch?v=hWhl6ijsAXw" },
            { name: "Os Paralamas do Sucesso - Cinema Mudo", url: "https://www.youtube.com/watch?v=qM0i7D8AOF8" }, 
            { name: "Legião Urbana - Há Tempos", url: "https://www.youtube.com/watch?v=8z-fxcdHmDE" }
        ]
    },
    "BN": {  // 0.4m
        name: "Brunei", desc: "The Nation of Brunei, the Abode of Peace, is an island-ish country in Southeast Asia, surrounded almost entirely by the Malaysian state of Sarawak. They recently legalized stoning gay people to death, so, y'know, now's a good time to donate to an organization like <a href='https://www.rainbowrailroad.com/'>Rainbow Railroad</a>.",
        population: 417200, popEstimate: 2015, area: 5765, independence: "1984-01-01", indFrom: "Britain", demonym: "Bruneian", currency: "Brunei dollar (B$)", 
        languages: ["Malay", "English"], motto: `"Always in service with God's guidance."`, neighbors: ["MY"], 
        foodURL: "https://en.wikipedia.org/wiki/Bruneian_cuisine",
        food: [
            { name: "Ambuyat", type: "Other", url: "https://mfchzhiwei.blogspot.com/2014/11/ambuyat-recipe.html", date: "2019-03-29", 
              img: "ambuyat.jpg", desc: "I consumed more milk than I did ambuyat thanks to the bird's eye peppers in the dipping sauce. The texture made me uncomfortable. I used tapioca starch instead of sago palm starch because I do not know how to acquire sago starch in California.",
              diet: [
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." },
                  { type: "Spicy", desc: "The dipping sauce is made with a lot of peppers." }
              ],
              ingredients: ["sago starch", "tapioca starch", "potato starch", "chili peppers", "garlic", "ginger", "vinegar"]
            },
            { name: "Nasi Katok", type: "Rice", url: "http://edexcelwafiy-blog.tumblr.com/post/107644473057/brunei-nasi-katok-recipe-sambal-nasi-katok", date: "2019-04-01",
              img: "nasikatok.jpg", desc: "Having never tasted tamarind before, I was not sure what to expect with the sauce on this dish. Fortunately, its flavor is a wonderful mix of extremely salty and extremely sweet. Also fortunately, I used half the recommended amount of shrimp paste, so my mouth did not get consumed by The Shrimp.",
              diet: [
                  { type: "Fish", desc: "The sambal paste uses shrimp paste as an ingredient." },
                  { type: "Meat", desc: "This dish is served with fried chicken, which can be omitted if you just want some rice with sauce." },
                  { type: "Spicy", desc: "This recipe uses chili peppers." }
              ],
              ingredients: ["onion", "garlic", "ginger", "chili peppers", "tomato paste", "shrimp paste", "tamarind", "sugar", "salt", "chicken", "white rice"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Brunei",
        music: [
            { name: "D'hask - Kamu, Adalah Mimpi Buruk Ku", url: "https://www.youtube.com/watch?v=kgpdgR2d9mY" },
            { name: "Eqah - If It Isn't With You", url: "https://www.youtube.com/watch?v=BotnvsUvWiE" },
            { name: "D'hask - Tempat Ku", url: "https://www.youtube.com/watch?v=bzK_t1q8dL4" },
            { name: "Ezah Hashim - Tertulis", url: "https://www.youtube.com/watch?v=IZP97l72kng" },
            { name: "Maria Aires - Kamu Menganggu", url: "https://www.youtube.com/watch?v=iO_zxJTHy5s", favorite: true }
        ]
    },
    "BG": { // 7m
        name: "Bulgaria", desc: "The Republic of Bulgaria is a country in Southeast Europe. As of 2018, it was the most corrupt country in the European Union, which is pretty impressive given the rest of the European Union.",
        population: 7050034, popEstimate: 2017, area: 110994, independence: "1908-10-05", indFrom: "Ottoman Empire", demonym: "Bulgarian", currency: "Lev (лв)", 
        languages: ["Bulgarian"], motto: `"Unity makes strength."`, neighbors: ["GR", "MK", "RO", "RS", "TR"], 
        foodURL: "https://en.wikipedia.org/wiki/Bulgarian_cuisine",
        food: [
            { name: "Garash Cake", type: "Pastry", url: "https://cookinglsl.com/garash-cake/", date: "2019-04-06", 
              img: "garash.jpg", desc: "A delicious *gluten-free* cake made almost entirely of walnuts, sugar, and eggs. It is very sweet, which is always a good thing when eating sweets. That's why they're called sweets, after all.",
              diet: [
                { type: "Dairy", desc: "Butter and heavy whipping cream are used in the ganache frosting." },
                { type: "Egg", desc: "Egg is used in the cake batter and the ganache filling." },
                { type: "Nuts", desc: "Walnuts are the main ingredient in this cake's batter." }
              ],
              ingredients: ["egg", "butter", "cocoa powder", "walnuts", "brown sugar", "heavy whipping cream"]
            },
            { name: "Moussaka", type: "Casserole", url: "https://www.findbgfood.com/recipe-moussaka", date: "2019-04-05", 
              img: "moussaka.jpg", desc: "You cook up some spiced meats and potatoes, then you pour some milky eggs on top and cook it all a bit more, and you get a custard-topped dream come true. I posted this with the hashtag \"custard\" on social media (alongside several other joke hashtags like #grungo and #spaghettiHyperloop) and then some frozen custard company store in Milwaukee followed me and commented \"what's up?\" Buddy, this is not the kind of custard you're looking for.",
              diet: [
                { type: "Meat", desc: "This recipe calls for ground meat, but I used a vegan ground beef without any issue." },
                { type: "Dairy", desc: "Milk is used in the topping." },
                { type: "Egg", desc: "Egg is is used in the topping." },
              ],
              ingredients: ["potato", "ground beef", "onion", "egg", "milk", "paprika"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Bulgaria",
        music: [
            { name: "Nasekomix - Amore Mio", url: "https://www.youtube.com/watch?v=IHhHGF7nvuQ" },
            { name: "Review - Poslanie", url: "https://www.youtube.com/watch?v=RvMY2UGJz3c", favorite: true },
            { name: "Mariana Popova ft. Miro - Kadosh", url: "https://www.youtube.com/watch?v=pGtueslCWiU" },
            { name: "Slav de Hren - Gnomus", url: "https://www.youtube.com/watch?v=CmdpJPxcVWU" },
            { name: "Petia - It's Not Heaven", url: "https://www.youtube.com/watch?v=2dQ4OOm-PYs" },
            { name: "Ostava - Leka Nosht", url: "https://www.youtube.com/watch?v=IhwrKsA9AmQ" },
            { name: "Ani Hoang - Stoy Dalech Ot Men", url: "https://www.youtube.com/watch?v=WinjLonSPns" }
        ]
    },
    "BF": { // 20m
        name: "Burkina Faso", desc: "Burkina Faso is a country in West Africa. They were French, then there were a handful of coup d'états, then Thomas Sankana came in and did a lot of revolutionary and Marxist things that made a lot of people happy and a few people with guns mad, so he got assassinated, so a few more coup d'états happened, and now things are going better probably!",
        population: 20107509, popEstimate: 2017, area: 274200, independence: "1960-08-05", indFrom: "France", demonym: "Burkinabé", currency: "West African CFA franc (CFA)", 
        languages: ["French", "Mossi", "Fula", "Dioula"], motto: `"Unity - Progress - Justice"`, neighbors: ["BJ", "CI", "GH", "ML", "NE", "TG"], 
        foodURL: "https://en.wikipedia.org/wiki/Burkinabe_cuisine",
        food: [
            { name: "Thiakry", type: "Dessert", url: "https://cookingrelax.wordpress.com/2013/07/31/degue-or-thiakry/", date: "2019-04-13", 
              img: "degue.jpg", desc: "It's a sweet and tart pudding-esque dish. Pretty tasty. It is gluten-free but if you use couscous instead of millet then it stops being gluten-free. However, this is true of all recipes when you substitute an ingredient for one that contains gluten.",
              diet: [
                  { type: "Dairy", desc: "This dish is mostly dairy. You could maybe make a vegan version with plant milk and yoghurt." }
              ],
              ingredients: ["couscous", "millet", "degue", "marscapone", "cream cheese", "yoghurt", "powdered milk", "sugar", "vanilla extract", "nutmeg", "pineapple extract", "lemon juice"]
            },
            { name: "Ragoût d'igname", type: "Soup", url: "https://www.peacecorps.gov/educators/resources/recipe-ragout-digname/", date: "2019-04-12", 
              img: "yamstew.jpg", desc: "You get a lot of yams and you cook 'em in some beef broth and what do you get? A delicious stew!",
              diet: [
                { type: "Meat", desc: "This recipe calls for lots of beef, but I used a vegan ground beef and boullion without any issue." }
              ],
              ingredients: ["yam", "beef", "onion", "tomatoes", "garlic", "boullion", "beef broth"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Burkina_Faso",
        music: [
            { name: "Bebeto Bongo - Zongou Zongou", url: "https://www.youtube.com/watch?v=P3XJwnc2v3o" },
            { name: "Greg Burkimbila - F'pada Porin", url: "https://www.youtube.com/watch?v=tk5LFS2TB1g" },
            { name: "Farafina - Miribali", url: "https://www.youtube.com/watch?v=OcMMIiIV3pM" },
            { name: "Tiness La Deesse - Dans la joie", url: "https://www.youtube.com/watch?v=49FVDISk-ag", favorite: true },
            { name: "Imilo Lechanceux - Warb Nooma", url: "https://www.youtube.com/watch?v=cRiSCj_Ewcc" }
        ]
    },
    "BI": { // 10m
        name: "Burundi", desc: "The Republic of Burundi is a small country between East and Central Africa. Less than a fifth of the population lives in urban areas, and the majority of the citizens belong to one of three tribes: the Hutu, Tutsi, and Twa.",
        population: 10524117, popEstimate: 2016, area: 27834, independence: "1962-07-01", indFrom: "Belgium", demonym: "Burundian", currency: "Burundian franc (BIF)", 
        languages: ["Kirundi", "French", "English"], motto: `"Union, Work, Progress."`, neighbors: ["CD", "RW", "TZ"], 
        foodURL: "https://en.wikipedia.org/wiki/Burundian_cuisine",
        food: [
            { name: "Anise Bread", type: "Bread", url: "https://humoroutcasts.com/2017/anise-bread-and-the-lost-pyramid-of-burundi/", date: "2019-04-20", 
              img: "anusbread.jpg", desc: "Fun fact: anise just tastes exactly like (black) licorice. Which means this bread just tastes like licorice. If you're a fan of licorice, you'll like this bread. If you're not, you still might like it anyway! I hate licorice and I still thought this bread was pretty good.",
              diet: [
                  { type: "Gluten", desc: "It's bread." },
                  { type: "Egg", desc: "An egg wash is used on the dough, but this is optional.", optional: true }
              ],
              ingredients: ["flour", "yeast", "sugar", "anise seeds", "vegetable oil", "egg"]
            },
            { name: "Boko Boko Harees", type: "Meat", url: "https://www.geniuskitchen.com/recipe/boko-boko-harees-burundi-484415", date: "2019-04-21", 
              img: "boko.jpg", desc: "Butter makes everything better, and this is true of grains as well. Buttery (or ghee-ey?) grains with chicken, onions, and lots of turmeric makes for a very filling meal.",
              diet: [
                  { type: "Meat", desc: "Chicken is a key component to this dish." },
                  { type: "Gluten", desc: "Bulgur wheat is used in this recipe." },
                  { type: "Dairy", desc: "Ghee is used to fry everything." }
              ],
              ingredients: ["bulgur wheat", "chicken", "onion", "turmeric", "sugar", "ghee"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Burundi",
        music: [
            { name: "Ashley Diva - Siku Mbili", url: "https://youtu.be/MCSVxZgbj0o" },
            { name: "Khadja Nin - Wale Watu", url: "https://www.youtube.com/watch?v=wGJBdZHaEqA" },
            { name: "Happy Famba - My Time", url: "https://www.youtube.com/watch?v=UASi3JGdLhE" },
            { name: "Sat-B - Satura Amabafle", url: "https://www.youtube.com/watch?v=-VPOVBQdbUc", favorite: true },
            { name: "Happy Famba ft. Krazy Bright & Channy Queen - Collabo", url: "https://www.youtube.com/watch?v=BYnQfd9JaRs" }
        ]
    },
    "CV": { // 0.5m
        name: "Cabo Verde", desc: "The Republic of Cabo Verde is an island country west of continental Africa. They have declared that their official English name is \"Cabo Verde\" but that doesn't stop people from calling it \"Cape Verde\" still because calling things by their names is hard apparently. It consists of ten islands whose geography contributes to powerful hurricanes that travel west to hit the Americas. <s>Maybe they'll stop once Americans start getting their name right.</s>",
        population: 539560, popEstimate: 2016, area: 4033, independence: "1975-07-05", indFrom: "Portugal", demonym: "Cape Verdean, Cabo Verdean", currency: "Cape Verdean escudo (CVE)", 
        languages: ["Portuguese, Cape Verdean Creole"], motto: `"Unity, Work, Progress."`, neighbors: ["None"], 
        foodURL: "https://en.wikipedia.org/wiki/Cape_Verdean_cuisine",
        food: [
            { name: "Chamuças", type: "Pastry", url: "https://www.youtube.com/watch?v=2mjGUaV_d_A", date: "2019-05-26", 
              img: "chamucas.jpg", desc: "Samosas, but Portuguese. Beefy, spicy, buttery, tasty.",
              diet: [
                  { type: "Meat", desc: "The primary ingredient of the filling is ground beef. You can use a vegan beef substitute without any issue" },
                  { type: "Alcohol", desc: "White wine is used in the filling, but the alcohol is cooked off." },
                  { type: "Dairy", desc: "Butter is used in the dough and filling." }
              ],
              ingredients: ["ground beef", "cardamom", "cumin", "turmeric", "butter", "onion", "garlic", "coconut flakes", "white wine", "phyllo dough"]
            },
            { name: "Bolinhos de mandioca com mel", type: "Dessert", url: "https://expressodasilhas.cv/lifestyle/2019/03/06/para-variar-bolinhos-de-mandioca-com-mel/62664", date: "2019-06-02", 
              img: "bolinhos.jpg", desc: "So this recipe is in Portuguese and omits several important things like the amount of flour to use and the baking time and temperature, so I had to improvise. And use wheat flour since I ran out of cassava flour. So I probably didn't ACTUALLY make this dish, but I made something probably similar perhaps, and it was still tasty! So, hoorah. If you want to make whatever the hell I made, follow this recipe but then keep adding flour until it forms a batter, then cook at 185 degrees Celcius for 15 minutes.",
              diet: [
                  { type: "Egg", desc: "Egg is used in the dough." },
                  { type: "Alcohol", desc: "Brandy is used in the dough." }
              ],
              ingredients: ["cassava flour", "manioc flour", "egg", "baking soda", "olive oil", "molasses", "brandy"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Cape_Verde",
        music: [
            { name: "Finaçon - Si manera", url: "https://www.youtube.com/watch?v=Lalc1AE9Vv4" },
            { name: "Jenifer Solidade - Largam da mon", url: "https://www.youtube.com/watch?v=hJ-0F_KHLf8" },
            { name: "Jennifer Dias ft. Elji Beatzkilla - Loco", url: "https://www.youtube.com/watch?v=Ma_2SJTwcQU" },
            { name: "Elida Almeida ft. Djodje - É Zonban", url: "https://www.youtube.com/watch?v=JcjZPBN2MXE", favorite: true },
            { name: "Suzanna Lubrano - Tudo Pa Bo", url: "https://www.youtube.com/watch?v=gAgnhSt-e5Q" },
            { name: "Tcheka - Djan Bedja", url: "https://www.youtube.com/watch?v=INNclmmsSe4" },
            { name: "Gil Semedo - Disusperu", url: "https://www.youtube.com/watch?v=iORJUlas9Y0" },
            { name: "Neuza - Volta Pa Mim", url: "https://www.youtube.com/watch?v=XfZgTPnKE_M" },
            { name: "Nelson Freitas - Nubian Queen", url: "https://www.youtube.com/watch?v=rpuwnSxy-40" }
        ]
    },
    "KH": { // 16m
        name: "Cambodia", desc: "The Kingdom of Cambodia is a country in Southeast Asia. They had some bad times, as many countries that got colonized did, including four years of extremely bad times (genocide) and now they're slowly getting better! Unfortunately, there are still a lot of landmines scattered throughout the country which sometimes makes that difficult.",
        population: 16245729, popEstimate: 2018, area: 181035, independence: "1953-11-09", indFrom: "France", demonym: "Cambodian", currency: "Riel (៛)", 
        languages: ["Khmer"], motto: `"Nation, Religion, King."`, neighbors: ["LA", "TH", "VN"], 
        foodURL: "https://en.wikipedia.org/wiki/Cambodian_cuisine",
        food: [
            { name: "Lok Lak", type: "Meat", url: "https://www.196flavors.com/cambodia-lok-lak/", date: "2019-05-01", favorite: true, 
              img: "loklak.jpg", desc: "A very tasty marinade and fancy dipping sauce brings this meat into true Yum In My Tum territory. I only burned the meat a little bit! Well, a little bit, total. No burning on one side and a lotta burning on the other. Still tasty! Shout out to Marcin for finding this recipe while I was busy panicking about how every Cambodian dish I could find was seafood-based. Surprise, now you know why none of the recipes on this site are fish dishes!",
              diet: [
                { type: "Meat", desc: "This is a steak dish. Chicken broth powder is used in the marinade as well. You can probably soak some tofu or seitan in the marinade and have it work, too." },
                { type: "Fish", desc: "The beef marinade and the sauce use fish sauce, which can be substituted with an anchovy-free Worcestershire sauce if you don't do the fish thing." },
                { type: "Soy", desc: "The beef marinade uses soy sauce, which can be substituted with coconut aminos and everything will be A-OK." }
              ],
              ingredients: ["beef", "scallions", "tomato sauce", "soy sauce", "garlic", "fish sauce", "kampot pepper", "sugar", "vegetable oil", "chicken broth powder", "potato starch", "paprika", "lime juice", "lettuce", "tomato", "rice"]
            },
            { name: "Chicken Amok", type: "Curry", url: "https://ethnicspoon.com/how-to-make-cambodian-chicken-amok/", date: "2019-04-28", favorite: true, 
              img: "amok.jpg", desc: "You know what's always good and never bad? Curry. You know what this is? Curry. It's good. The lemongrass and mint give it a very fresh cool flavor that complements the spiciness very well. A crowd-pleaser.",
              diet: [
                { type: "Meat", desc: "This is a chicken curry, but you can use fish or pretty much whatever you want that is good in a curry." },
                { type: "Fish", desc: "Fish sauce is used in this dish, but it can be substituted with an anchovy-free Worcestershire sauce to de-fish the dish." },
                { type: "Spicy", desc: "It IS a curry. One red chilli pepper is used, but you can tone down the spice as desired by using less or picking a not-so-spicy peppie." }
              ],
              ingredients: ["lemongrass", "mint", "ginger", "shallot", "garlic", "chili", "turmeric", "coconut milk", "palm sugar", "chicken", "fish sauce", "lime zest", "rice"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Cambodia",
        music: [
            { name: "Sokun Nisa - Di Da Da", url: "https://www.youtube.com/watch?v=hCNjgMFwUyw" },
            { name: "Laura Mam - Tear Me Down", url: "https://www.youtube.com/watch?v=PvBIVywaH8M" },
            { name: "Adda Angel - Like Like", url: "https://www.youtube.com/watch?v=6GSc_E7cIrM", favorite: true },
            { name: "Meas Soksophea - Single", url: "https://www.youtube.com/watch?v=Oi638vRiB2c" },
            { name: "Laura Mam ft. Andrew Mam - Since You've Been Gone", url: "https://www.youtube.com/watch?v=l_QXc16yNnE" },
            { name: "Khemarak Sereymun - Sad Man", url: "https://www.youtube.com/watch?v=FdiTw78KuMI" }
        ]
    },
    "CM": { // 23m
        name: "Cameroon", desc: "The Republic of Cameroon is a country in Central Africa. Its diverse climates range from beaches to deserts to rainforests to mountains. ",
        population: 23439189, popEstimate: 2016, area: 475442, independence: "1960-01-01", indFrom: "France", demonym: "Cameroonian", currency: "Central African CFA Franc (XAF)", 
        languages: ["English", "French"], motto: `"Peace - Work - Fatherland."`, neighbors: ["CF", "TD", "CG", "GQ", "GA", "NG"], 
        foodURL: "https://en.wikipedia.org/wiki/Cameroonian_cuisine",
        food: [
            { name: "Koki Corn", type: "Dumpling", url: "https://www.africanbites.com/koki-corn-african-fresh-corn-tamales/", date: "2019-05-08", 
              img: "koki.jpg", desc: "I've literally never seen a tamale before in my life. Which is strange because I live in California, but somehow I have lived 29 years never seeing an actual tamale. But I guess this is an actual tamale. And it was good. Therefore, tamales are good.",
              diet: [
                { type: "Warning", desc: "This recipe calls for red palm oil. Please make sure you are buying sustainable palm oil if you make this recipe." },
                { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["corn", "corn meal", "spinach", "palm oil"]
            },
            { name: "Vitumbua", type: "Bread", url: "https://www.africanbites.com/vitumbarice-pancakes/", date: "2019-05-19", 
              img: "vitumbua.jpg", desc: "Tasty coconutty pancake babies with an equally tasty coconut milk caramel sauce. I have a lot of that caramel sauce left over so I'm just going to put it on everything I eat for the next day or two. The healthy choice.",
              diet: [
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." },
                  { type: "Nuts", desc: "This recipe uses almond extract, but you can also just not put that in. You do you, babe." }
              ],
              ingredients: ["rice", "yeast", "coconut milk", "coconut flakes", "sugar", "cardamom", "nutmeg", "almond extract", "brown sugar", "vanilla extract"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Cameroon",
        music: [
            { name: "Charlotte Mbango - Nguina mulema", url: "https://www.youtube.com/watch?v=BQF52c0JYuw" },
            { name: "Gasha ft. Zegeman - The Date", url: "https://www.youtube.com/watch?v=0sVNk4AyJ_Y", favorite: true }, 
            { name: "Lapiro de Mbanga - Over Done", url: "https://www.youtube.com/watch?v=pzBbHqhLQi0" }, 
            { name: "Eddy Bee - Shake", url: "https://www.youtube.com/watch?v=U8_uj01ifZg" },
            { name: "Naomi Achu - Alhadji", url: "https://www.youtube.com/watch?v=Le9u29UtvaM" },
            { name: "Wax Dey - Will You Be My Wifey", url: "https://www.youtube.com/watch?v=byl-F7aFJ9I" }
        ]
    },
    "CA": { // 37m
        name: "Canada", desc: "Canada is a country in North America. A lot of people think it's a really good country and everyone is nice, but when your neighbor is basically just a slightly more racist and violent version of you it's not hard to see why. Despite being the second largest country in the world, it isn't even in the top 30 most populated, because a lot of that land is just way too cold.",
        population: 37314442, popEstimate: 2019, area: 9984670, independence: "1867-07-01", indFrom: "Britain", demonym: "Canadian", currency: "Canadian Dollar ($CAD)", 
        languages: ["English", "French"], motto: `"From Sea to Sea."`, neighbors: ["US"], 
        foodURL: "https://en.wikipedia.org/wiki/Canadian_cuisine",
        food: [
            { name: "Poutine", type: "Other", url: "https://www.seasonsandsuppers.ca/authentic-canadian-poutine-recipe/", date: "2019-05-18", 
              img: "pooteen.jpg", desc: "Gravy, squeaky cheese, and french fries. What more could you ask for in life? Well, lots of things. But what more could you ask for in a meal? Not much.",
              diet: [
                  { type: "Meat", desc: "Gravy is one of three ingredients in this recipe, but I used use vegan boullions to make the gravy without any issue." },
                  { type: "Dairy", desc: "Cheddar cheese curds are one of the three ingredients in this recipe, and butter is also used in the gravy." },
                  { type: "Gluten", desc: "Flour is used in the gravy. You can use a gluten-free thickener if you want, though." }
              ],
              ingredients: ["corn starch", "butter", "flour", "beef broth", "chicken broth", "potatoes", "cheese curds"]
            },
            { name: "Butter Tart", type: "Pastry", url: "https://www.rockrecipes.com/best-classic-canadian-butter-tarts/", date: "2019-05-24",
              img: "butttart.jpg", desc: "This should probably be obvious from the name but these bad boys were very buttery. I was only able to eat one after dindin, because the rich buttery goodness consumed me. And I, in turn, consumed it. A very tasty pastry.",
              diet: [
                  { type: "Dairy", desc: "Butter is used in the dough and filling." },
                  { type: "Egg", desc: "Egg is used in the filling." },
                  { type: "Gluten", desc: "Flour is used in the dough." }
              ],
              ingredients: ["flour", "brown sugar", "salt", "shortening", "butter", "water", "corn syrup", "egg", "vanilla extract", "raisins"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Canada",
        music: [
            { name: "Gazoline - Parfaite", url: "https://www.youtube.com/watch?v=RudcpdkRWtE" },
            { name: "Snotty Nose Rez Kids - Clash of the Clans", url: "https://www.youtube.com/watch?v=W4UersvGsIs" },
            { name: "Eekwol - Too Sick", url: "https://www.youtube.com/watch?v=0XuYikRUl7g" },
            { name: "Inez Jasper - Dancin' on the Run", url: "https://www.youtube.com/watch?v=QgOluBcedw0", favorite: true },
            { name: "Trans-X - Through the Eyes of the 90's", url: "https://www.youtube.com/watch?v=fOOOu_DqWuc" },
            { name: "Dionysos - Vancouver", url: "https://www.youtube.com/watch?v=FHc-Tnb2-5Y" },
            { name: "Yelo Molo - Malaise", url: "https://www.youtube.com/watch?v=bAiGvbWh5mk" },
            { name: "The Jerry Cans - Qanurli Isumavit", url: "https://www.youtube.com/watch?v=LKYsAI6WYaU" }, 
            { name: "Northern Haze - Nutaraq", url: "https://www.youtube.com/watch?v=mrg4LYl72vc" },
            { name: "JB The First Lady - Planting Seeds", url: "https://www.youtube.com/watch?v=T1a1MsVu6X8" }
        ]
    },
    "CF": { // 4.5m
        name: "Central African Republic", desc: "The Central African Republic is a landlocked country in South Asia. Haha, just kidding, it's in Central Africa. That joke was to lighten the mood, because as of this writing, there is an ongoing civil war in the country, and it is one of the poorest nations in the world. The joke was necessary because if you read more about this country elsewhere, you're not going to find much in the way of good news. Colonialism is bad and does lasting damage to former colonies, everybody.",
        population: 4594621, popEstimate: 2016, area: 622984, independence: "1960-08-13", indFrom: "France", demonym: "Central African", currency: "Central African CFA Franc (XAF)", 
        languages: ["French", "Sango"], motto: `"Unity, Dignity, Work."`, neighbors: ["CM", "TD", "CG", "CD", "SS", "SD"], 
        foodURL: "https://en.wikipedia.org/wiki/Cuisine_of_the_Central_African_Republic",
        food: [
            { name: "Kanda", type: "Meat", url: "https://www.196flavors.com/central-african-republic-kanda/", date: "2019-06-11", favorite: true, 
              img: "kanda.jpg", desc: "The pumpkin seed powder mixed into the meatballs gave them a pretty wild flavor that was guaranteed goodtimes for my mouth. I usually just buy frozen meatballs on the rare occassion I need meatballs, but next time I may just make these instead.",
              diet: [
                  { type: "Meat", desc: "They're meatballs. You can probably use vegan meat substitutes but getting them to stick into balls may require some additional ingredients then." },
                  { type: "Spicy", desc: "Chili peppers are used; you can adjust the amount or omit them entirely to your preference." }
              ],
              ingredients: ["ground beef", "pumpkin seeds", "onions", "garlic", "tomatoes", "chilli peppers", "parsley"]
            },
            { name: "Fulani Boullie", type: "Rice", url: "https://web.archive.org/web/20180301223703/http://www.congocookbook.com/rare_recipes/peace_corps_car.html", date: "2019-06-15", 
              img: "fulani.jpg", desc: "This is what happens when you get peanut butter and rice, like that one Reese's Peanut Butter Cup commercial but one guy just has a huge vat of rice or something. Burnt peanut butter may be permanently stuck on one of my pots.",
              diet: [
                  { type: "Nuts", desc: "This is a peanut butter rice dish." },
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions. Milk is an optional ingredient." }
              ],
              ingredients: ["peanut butter", "rice", "rice flour", "lemon juice"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_the_Central_African_Republic",
        music: [
            { name: "Laetitia Zonzambé - Dodo", url: "https://www.youtube.com/watch?v=aFneqqCgt_o" },
            { name: "HK ft. Idylle Mamba, P Wayne - A ké ti", url: "https://www.youtube.com/watch?v=yUFJnDeABF0" },
            { name: "Idylle Mamba - Sango et Vous", url: "https://www.youtube.com/watch?v=F_oaHMAU9v4" },
            { name: "Umoya - Kalisia (Lord of the Forest)", url: "https://www.youtube.com/watch?v=bbuoByt3rHw" },
            { name: "Laetitia Zonzambé - Messia (Mademoiselle)", url: "https://www.youtube.com/watch?v=ShhjHerJ8-Y", favorite: true }
        ]
    } ,
    "TD": { // 13m
        name: "Chad", desc: "The Republic of Chad is a country in north-central Africa. They're going through some bad times, and one of the websites I grabbed a recipe from had this, so <a href='http://www.tchad.org/aid/solutions.html' target='_blank' rel='external nofollow noopener noreferrer'>here's a listing of several Chad-related NGOs you can donate to</a>.",
        population: 13670084, popEstimate: 2015, area: 1284000, independence: "1960-08-11", indFrom: "France", demonym: "Chadian", currency: "Central African CFA Franc (XAF)", 
        languages: ["Arabic", "French"], motto: `"Unity, Work, Progress"`, neighbors: ["CM", "CF", "LY", "NE", "NG", "SD"], 
        foodURL: "https://en.wikipedia.org/wiki/Chadian_cuisine",
        food: [
            { name: "Jarret de Boeuf", type: "Soup", url: "https://books.google.com/books?id=FJxlWwrVcKcC&pg=PA162", date: "2019-06-22", 
              img: "jarret.jpg", desc: "It's a good old-fashioned beef stew. The presence of sweet potatoes is always appreciated, both in stews and just in general..",
              diet: [
                  { type: "Meat", desc: "It's beef stew." }
              ],
              ingredients: ["beef", "onion", "garlic", "cayenne pepper", "cloves", "carrots", "eggplant", "aubergine", "leek", "sweet potato"]
            },
            { name: "Karkanji", type: "Beverage", url: "http://www.tchad.org/research/cook.html#karkanji", date: "2019-06-22", 
              img: "karkanji.jpg", desc: "It's sweet and made with hibiscus. Hello-biscus.",
              diet: [
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["hibiscus flowers", "sugar", "ginger root", "cinnamon", "cloves"]
            },
            { name: "Bouillie", type: "Rice", url: "https://aussietaste.com.au/african-cuisine/bouillie-chadian-porridge/", date: "2019-06-23", 
              img: "bouillie.jpg", desc: "I realized moments after making this that the dish was very similar to the fulani boullie I made for the Central African Republic. But it's definitely a completely different peanut butter rice porridge dish, so it's okay. Don't worry about it. This one didn't ruin my saucepan, so I like it more.",
              diet: [
                  { type: "Nuts", desc: "This is a peanut butter rice dish." },
                  { type: "Dairy", desc: "There's milk. You can skip it..", optional: true }
              ],
              ingredients: ["rice", "milk", "peanut butter", "millet", "sugar", "lemon"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Chad",
        music: [
            { name: "Clément Masdongar - Yondaka", url: "https://www.youtube.com/watch?v=nxjnyGFUWJY" },
            { name: "Mounira Mitchala - Tourabi", url: "https://www.youtube.com/watch?v=7L5t0xJDkIc" },
            { name: "IZra & Élété - Yang'ha Yangha Girls", url: "https://www.youtube.com/watch?v=qillpm0u72k" },
            { name: "Mounira Mitchala - Zarlie", url: "https://www.youtube.com/watch?v=eeLg11IE2v0" },
            { name: "Mawndoé ft. Djamila - Djobo", url: "https://www.youtube.com/watch?v=0QurOBwccNs", favorite: true }
        ]
    },
    "CL": { // 17.6m
        name: "Chile", desc: "The Repubic of Chile is a country on the west coast of South America. For a while they were ruled by the Pinochet dictatorship, which is a bad thing unless you're one of those dipshits who share helicopter memes on social media in which case please leave this website and learn how to be a decent human. Fortunately, he's dead now and Chile is one of the most prosperous countries in South America, and has the second lowest homicide rate in America after Canada.",
        population: 17574003, popEstimate: 2017, area: 756096, independence: "1810-09-18", indFrom: "Spain", demonym: "Chilean", currency: "Peso (CLP)", 
        languages: ["Spanish"], motto: `"By Right or Might."`, neighbors: ["AR", "BO", "PE"], 
        foodURL: "https://en.wikipedia.org/wiki/Chilean_cuisine",
        food: [
            { name: "Mote con huesillo", type: "Beverage", url: "https://www.cookingchanneltv.com/recipes/mote-con-huesillos-2119869", date: "2019-06-30", 
              img: "mote.jpg", desc: "It's uhhh like if you had a boba/bubble tea but instead of sweat tapioca balls it's a bunch of grains and also there is a peach in there. For some reason.",
              diet: [
                    { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." },
                    { type: "Gluten", desc: "Wheat or barley are used in this recipe, but can be substituted with corn mote or omitted entirely if you don't want grains in your bevvie.", optional: true }
              ],
              ingredients: ["dried peaches", "sugar", "cinnamon", "orange peel", "water", "wheat berries", "pearled barley"]
            },
            { name: "Ensalada chilena", type: "Salad", url: "https://www.thespruceeats.com/chilean-tomato-and-onion-salad-3029588", date: "2019-06-26", 
              img: "ensalada.jpg", desc: "Fun fact: if you soak onions in water for a while they don't hurt as much when you eat them! That fun fact is what makes this a good salad.",
              diet: [
                    { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["tomato", "onion", "lime", "cilantro", "coriander", "olive oil"]
            },
            { name: "Conejos", type: "Pastry", url: "https://www.chileanfoodandgarden.com/rabbits-chilean-conejos/", date: "2019-06-30", favorite: true, // https://www.foodnetwork.com/recipes/alton-brown/dulce-de-leche-recipe-1948282
              img: "conejos.jpg", desc: "Dulce de leche is the perfect food, and sweet pastry buns are the perfect container for food. Thus, a combination of the two is a beautiful thing.",
              diet: [
                    { type: "Dairy", desc: "Butter and milk are used in the dough and filling." },
                    { type: "Egg", desc: "Egg is used in the dough." },
                    { type: "Gluten", desc: "Flour is used in the dough." }
              ],
              ingredients: ["milk", "flour", "yeast", "sugar", "butter", "eggs", "baking soda", "vanilla"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Chile",
        music: [
            { name: "Electrodomésticos - El calor", url: "https://www.youtube.com/watch?v=86aVN9YzxPM" }, 
            { name: "Los Prisioneros - Corazones Rojos", url: "https://www.youtube.com/watch?v=zNEqNxwQGDo" }, 
            { name: "Javiera Mena - Espada", url: "https://www.youtube.com/watch?v=GqNTdNCU2y8" }, 
            { name: "La Mano Ajena - Favella", url: "https://www.youtube.com/watch?v=xnkXO6J-djc" }, 
            { name: "Camila Silva - Estrella Con Travesia", url: "https://www.youtube.com/watch?v=IxcMyMJJa4o" }, 
            { name: "Pscuala Ilabaca y Fauna - Ya no Esperes Más", url: "https://www.youtube.com/watch?v=W1Grj3_qdZI" }, 
            { name: "Movimiento Original - Natural", url: "https://www.youtube.com/watch?v=L7Jx-VHxMEU" }, 
            { name: "Denise Rosenthal - Bye Bye", url: "https://www.youtube.com/watch?v=pbw-aCNjTE4" },
            { name: "Alex Anwandter - Cordillera", url: "https://www.youtube.com/watch?v=oSXWXeFa-cs" }, 
            { name: "MediaBanda - El Sofá", url: "https://www.youtube.com/watch?v=FgBoGceWDxg" },
            { name: "Denise Rosenthal - Déjate llevar", url: "https://www.youtube.com/watch?v=phaMeTBoJiM", favorite: true },
            { name: "Guachupé - Josefina", url: "https://www.youtube.com/watch?v=Iti2cFTp5IY" }, 
            { name: "Amanitas - Me Desvelo", url: "https://www.youtube.com/watch?v=Tp6A89ROBCM" },
            { name: "Ana Tijoux - Shock", url: "https://www.youtube.com/watch?v=177-s44MSVQ" } 
        ]
    },
    "CN": {  // 1.4b
        name: "China", desc: "The People's Republic of China is a country in East Asia. By pretty much every metric, it is what one might call \"very big.\" I think it's safe to say you probably know a thing or two about China, and it is possible that you are waiting for me to give an opinion about China's government so you can argue with me. Well, guess what? I agree with you on every issue about China, so take that! Well, except all the ones you're wrong about. But all the other opinions I agree with 100%.",
        population: 1403500365, popEstimate: 2016, area: 9596961, independence: "1949-10-01", indFrom: "Kuomintang", demonym: "Chinese", currency: "Yuan (¥)", 
        languages: ["Mandarin", "Mongolian", "Uyghur", "Tibetan", "Zhuang", "Cantonese", "many others"], motto: `None`,
        neighbors: ["AF", "BT", "IN", "KZ", "KY", "LA", "MN", "MM", "NP", "KP", "PK", "RU", "TJ", "VN"], 
        foodURL: "https://en.wikipedia.org/wiki/Chinese_cuisine",
        food: [
            { name: "Egg Dumplings", type: "Dumpling", url: "https://www.youtube.com/watch?v=jdOua-VHPPU", date: "2019-07-10", 
              img: "eggdump.jpg", desc: "These are basically just tiny omelets. Which is not a bad thing, if you like omelets. Omelets covered in soy sauce.",
              diet: [
                  { type: "Egg", desc: "Come on." },
                  { type: "Soy", desc: "Soy sauce is used to flavor everything" },
                  { type: "Spicy", desc: "Chilli peppers are an ingredient that you can omit if you don't want to spice yourself up." },
                  { type: "Meat", desc: "Pork is the traditional primary filling. You can just not use pork. Rice works, too.", optional: true }
              ],
              ingredients: ["egg", "ginger", "garlic", "green onion", "soy sauce", "chilli pepper", "sugar", "pork"]
            }, // https://en.wikipedia.org/wiki/Anhui_cuisine
            { name: "Coconut Bar", type: "Dessert", url: "https://bigflavorstinykitchen.com/coconut-jelly/", date: "2019-07-08", 
              img: "coconutgun.jpg", desc: "Nice little jelly cubes. They're creamy, they're coconutty, they're good. Would recommend.",
              diet: [
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["coconut milk", "agar agar powder", "sugar", "coconut cream", "rose water"]
            }, // https://en.wikipedia.org/wiki/Cantonese_cuisine
            { name: "Ngo hiang", type: "Meat", url: "https://www.misstamchiak.com/recipe/ngoh-hiang/", date: "2019-07-09", 
              img: "ngo.jpg", desc: "I had never heard of bean curd skins/wrappers before this, but I gotta say that they make good eggroll-esque vehicles for transferring fried food into your mouth. Good stuff, but I have also learned that I am not a fan of water chestnuts.",
              diet: [
                  { type: "Soy", desc: "The filling contains soy sauce and the wrappers are made of soybean." },
                  { type: "Meat", desc: "A primary ingredient of the filling is pork. You can use something else, like I did." },
                  { type: "Egg", desc: "Egg is used in the filling." },
                  { type: "Fish", desc: "A primary ingredient of the filling is shrimp. You can use something else, like I did." },
                  { type: "Gluten", desc: "Flour is used in the filling." }
              ],
              ingredients: ["bean curd skin", "pork", "shrimp", "water chestnut", "egg", "garlic", "shallot", "soy sauce", "flour", "white pepper", "five spice powder"]
            }, // https://en.wikipedia.org/wiki/Fujian_cuisine
            { name: "Dong'an Chicken", type: "Meat", url: "https://whattocooktoday.com/dongan-chicken.html", date: "2019-07-07", 
              img: "dongan.jpg", desc: "I can't tell if my spice tolerance is increasing or if I'm just underspicing things subconsciously because I am a baby. Probably the second one. Either way, very tasty chicken.",
              diet: [
                  { type: "Alcohol", desc: "Shaoxing wine is used to cook the chicken." },
                  { type: "Meat", desc: "It's chicken." },
                  { type: "Spicy", desc: "Hunan cuisine is known for being very hot." },
                  { type: "Nuts", desc: "Peanut oil is a recommended oil to cook this in. You can use lard or some other oil instead, though.", optional: true }
              ],
              ingredients: ["chicken stock", "chicken", "ginger", "green onions", "chilli", "dried chillis", "shaoxing wine", "rice vinegar", "sichuan peppercorns", "corn starch", "sesame oil", "peanut oil"]
            }, // https://en.wikipedia.org/wiki/Hunan_cuisine
            { name: "Dazhu gansi", type: "Soup", url: "https://www.youtube.com/watch?v=jVzdfGC1xxs", date: "2019-07-15", 
              img: "chickentofusoup.jpg", desc: "What if chicken noodle soup was still chicken noodle soup, but instead of nice wheat strings, the noodles were instead thinly-sliced tofu strips? Then you'd have this. If you like chicken noodle soup and aren't morally opposed to tofu, you'll like this.",
              diet: [
                  { type: "Soy", desc: "The ingredients in this dish vary, but one of the ingredients that's pretty much 100% necessary is tofu." },
                  { type: "Meat", desc: "And the other 100% necessary ingredient is chicken stock. Fortunately, vegan alternatives to chicken stock exist, which can be used instead. Ham is a common, but optional, ingredient." },
                  { type: "Fish", desc: "Shrimp is another common ingredient. But, again, you can just put whatever you want in this soup." }
              ],
              ingredients: ["tofu", "chicken", "mushrooms", "ham", "shrimp", "bamboo shoots", "ginger"]
            }, // https://en.wikipedia.org/wiki/Jiangsu_cuisine
            { name: "Básī dìguā", type: "Dessert", url: "https://homeeconomics.pixnet.net/blog/post/83245387-269.%E6%8B%94%E7%B5%B2%E5%9C%B0%E7%93%9C", date: "2019-07-15", 
              img: "sugarpotato.jpg", desc: "If you wanty eat some sweet potatos but are disappointed with how they aren't as sweet as their name might suggest, you can try frying them and then stirring them into a very hot sugar syrup. Then you can VERY CAREFULLY pull a sticky stringy chunk of sweet potato out of the pile, dip it into some ice water to cool and solidify the hot sugar, and then crunch into yum!", 
              diet: [
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["sweet potato", "sugar", "oil", "water"]
            }, // https://en.wikipedia.org/wiki/Shandong_cuisine
            { name: "Hot and Sour Noodles", type: "Noodle", url: "https://www.chinasichuanfood.com/hot-and-sour-sweet-potato-noodles/", date: "2019-07-02", 
              img: "hotsournoodz.jpg", desc: "They were less hot and less sour than I expected, which was nice. The fried peanuts were very delicious. The zha cai was interesting. The noodles were sweet potatoey. Wild times all around.",
              diet: [
                  { type: "Soy", desc: "Soy sauce is used in the seasoning. Deep fried soy beans are a potential ingredient." },
                  { type: "Spicy", desc: "It's in the name." },
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." },
                  { type: "Nuts", desc: "Roasted peanuts are a potential ingredient, and peanut oil can be used to cook the dish. You can use a different kind of oil without any issues.", optional: true }
              ],
              ingredients: ["sweet potato noodles", "peanuts", "green onions", "coriander", "cilantro", "Sichuan vegetable", "garlic", "Sichuan peppercorn", "five spice powder", "chili oil", "vinegar", "soy sauce", "sesame oil"]
            }, // https://en.wikipedia.org/wiki/Sichuan_cuisine
            { name: "Dongpo Pork", type: "Meat", url: "https://rasamalaysia.com/braised-pork-belly-dong-po-rou/", date: "2019-07-13", 
              img: "donpo.jpg", desc: "As a disclaimer, I don't actually like pork. This dish did not change my mind. I also probably cooked this dish wrong because I've never cooked pork before and it was harder than expected to find pork belly. Having said all that... s'fine. 'Sa fine dish. Probably better if you can find pork belly that isn't pre-sliced and you actually like pork, but even without that, s'fine.",
              diet: [
                  { type: "Meat", desc: "It's pork. I don't know enough about braising to say if substituting something for it would be viable." },
                  { type: "Soy", desc: "The pork is braised in soy sauce." },
                  { type: "Alcohol", desc: "The pork is ALSO braised in wine." }
              ],
              ingredients: ["pork belly", "scallions", "green onions", "ginger", "soy sauce", "dark soy sauce", "shaoxing wine", "rock sugar", "brown sugar"]
            } // https://en.wikipedia.org/wiki/Zhejiang_cuisine
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_China",
        music: [
            { name: "Jane Zhang - Rúguǒ Zhè Jiùshì Àiqíng", url: "https://www.youtube.com/watch?v=iA0Uxzs_Qow" },
            { name: "Birdstriking - Ka Ka Ka Ka", url: "https://www.youtube.com/watch?v=ak_3lJTXQKk" },
            { name: "Hang On the Box - Ass Hole, I'm Not Your Baby", url: "https://www.youtube.com/watch?v=FmhTV8srQWU", favorite: true },
            { name: "Ada Zhuang - Liǎng Gè Rén De Huíyì Yīgèrénguò ", url: "https://www.youtube.com/watch?v=cJ9MVn2_yLw" },
            { name: "Tang Dynasty - Yuè Mèng", url: "https://www.youtube.com/watch?v=-wJVoDcPVWk" },
            { name: "Demerit - Fuck the Schemers", url: "https://www.youtube.com/watch?v=_60AFrD4ZrU" },
            { name: "Black Panther - Don't Break My Heart", url: "https://www.youtube.com/watch?v=WLUbs0rCQlI" },
            { name: "G.E.M. - Dàoshǔ", url: "https://www.youtube.com/watch?v=ma7r2HGqwXs" },
            { name: "Chinese Football - Electric Girl", url: "https://www.youtube.com/watch?v=fYIRRGZdrTo" },
            { name: "Barque of Dante - Ocean of Dreams", url: "https://www.youtube.com/watch?v=kHRbvmGcCB8" },
            { name: "S.I.N.G - Moonlight Thoughts", url: "https://www.youtube.com/watch?v=rbUzPzlcboU" },
            { name: "SMZB - Scream for Life", url: "https://www.youtube.com/watch?v=yEMLJly5l74" },
            { name: "Feng Timo - Zàijiàn Qiánrèn", url: "https://www.youtube.com/watch?v=k2U24baTUb8" },
            { name: "GriffO - TAMAGOTCHI", url: "https://www.youtube.com/watch?v=CBZy6_sf80E" },
            { name: "VOOID - Into the Void", url: "https://www.youtube.com/watch?v=K5-WVW73ji4" },
            { name: "Ekin Cheng - Yǒuqíng Suìyuè", url: "https://www.youtube.com/watch?v=4X32WZ7EuO8" },
            { name: "Dou Wei - Ō! Guāi", url: "https://www.youtube.com/watch?v=NBhyRzoNJpw" },
            { name: "Jacky Cheung ft. Francesca Kao - Nǐ Zuì Zhēnguì", url: "https://www.youtube.com/watch?v=1DBXr3VgJnQ" },
            { name: "Hedgehog - Tree", url: "https://www.youtube.com/watch?v=kto8oONBQHo" },
            { name: "Jackie Chan & KUN - Yīqǐ Xiào Chūlái", url: "https://www.youtube.com/watch?v=OaPnQS6SLjI" },
            { name: "FAMA - Jǔ Gāo Zhī Shǒu", url: "https://www.youtube.com/watch?v=b7-o2JqLzVk" },
            { name: "SMZB - The Chinese Are Coming", url: "https://www.youtube.com/watch?v=AQ_DccQKj0Q" },
            { name: "The Marshmallow Kisses - Everyone Else Is Ahead Far Ahead", url: "https://www.youtube.com/watch?v=pJLX5C4mpxE" },
            { name: "8 Eye Spy - Conditioning", url: "https://www.youtube.com/watch?v=0A5Y2wSKpfs" },
            { name: "Doc Talk Shock - Futurist", url: "https://www.youtube.com/watch?v=WvxafxBZmHY" },
            { name: "Feng TiMo - Shì Shíwù Zhě Wéi Jùnjié", url: "https://www.youtube.com/watch?v=PIYva_5d6gg" },
            { name: "Silence Wang - Yīxiào Qīngchéng", url: "https://www.youtube.com/watch?v=dCqqqyeZGjM" },
            { name: "Xie Tianxiao - Rén Wú Xìngmíng", url: "https://www.youtube.com/watch?v=nau23Nv0Vts" },
            { name: "Rainbow Danger Club - Once Upon a Time", url: "https://www.youtube.com/watch?v=FvQl0G9LDtE" }
        ]
    },
    "CO": { // 48.2m
        name: "Colombia", desc: "The Republic of Colombia is a country in northwest South America. It is one of the most ethnically, linguistically, and biologically diverse countries in the world, combining native South American, European, and African cultures with rainforests, grasslands, deserts, and islands, ensuring that all of those people can take their pick of what kind of climate they want to live in.",
        population: 48258494, popEstimate: 2019, area: 1141748, independence: "1810-07-20", indFrom: "Spain", demonym: "Colombian", currency: "Peso (COL$)", 
        languages: ["Spanish"], motto: `"Freedom and Order."`, neighbors: ["BR", "EC", "PA", "PE", "VE"], 
        foodURL: "https://en.wikipedia.org/wiki/Colombian_cuisine",
        food: [
            { name: "Pandebonos", type: "Bread", url: "https://www.sweetysalado.com/en/2013/06/pandebonos-colombian-cheese-bread.html", date: "2019-07-17", favorite: true,
              img: "pandebonos.jpg", desc: "Tastyesgoodelicousperfectgoodtasty. I'm really tired right now because it's 1am so I should probably wait until later to write this but in my sleep-deprived state I feel like I'm qualified to speak my emotions and my emotions for these cheesy bread babies are nothing but positive ones. Even though mine got a bit flat and burnt on the bottom they were still extremely - and I emphasize EXTREMELY - delicious. If you eat cheese, eat these.",
              diet: [
                  { type: "Dairy", desc: "Lots of cheese is used in the dough, as well as butter and milk." },
                  { type: "Egg", desc: "Egg is used in the dough." },
                  { type: "Gluten", desc: "Flour CAN BE used in the dough, but you can also use corn meal.", optional: true }
              ],
              ingredients: ["cassava flour", "cassava starch", "tapioca flour", "tapioca starch", "corn meal", "flour", "baking powder", "sugar", "queso fresco", "feta", "butter", "egg", "milk"]
            },
            { name: "Hot Chocolate", type: "Beverage", url: "https://blosh.nz/colombian-hot-chocolate-cheese-recipe/", date: "2019-07-19", // http://www.kikucorner.com/2015/09/30/colombian-hot-chocolate-with-cheese/ 
              img: "hotchocky.jpg", desc: "Hot chocolate. With cheese. I'm not a man who likes the whole \"salty and sweet\" trend with all the salted caramel and salted chocolate chip garbage that's all the rage these days, but this is primarily creamy and bitter, with a bit of sweetness and a bit of saltiness in the background. It's pretty good.",
              diet: [
                  { type: "Dairy", desc: "I'm one of those guys who has opinions on hot chocolate. My opinion is \"you gotta use milk, not water.\" The country of Colombia agrees with me. They also add cheese to theirs, so, like, it's still gonna have dairy in it either way." }
              ],
              ingredients: ["milk", "dark chocolate", "turbinado sugar", "cinnamon", "white cheese"]
            },
            { name: "Carimañolas", type: "Pastry", url: "https://www.mycolombianrecipes.com/meat-and-cheese-stuffed-yuca-carimanolas-de-carne-y-de-queso", date: "2019-07-21", favorite: true, 
              img: "carimanolas.jpg", desc: "A delicious thing that is perfect and good and yes. They're basically croquettes but better in every possible way, and made with yuca instead of mashed potatoes. Which is a plus in my book. Cumin once again proves it is a spice to be reckoned with.",
              diet: [
                  { type: "Meat", desc: "A potential filling for these includes meat. You can also not use meat, or use a meat substitute like I did.", optional: true },
                  { type: "Dairy", desc: "A potential filling for these is cheese. You can also not use cheese, or use a cheese substitute.", optional: true }
              ],
              ingredients: ["yuca", "mozzarella", "garlic", "red bell pepper", "onion", "scallion", "green onion", "cumin", "tomato paste", "ground beef"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Colombia",
        music: [
            { name: "Karol G - Mi Cama", url: "https://www.youtube.com/watch?v=8-mloCL49vs" },
            { name: "I.R.A. - Nueva Esclavitud", url: "https://www.youtube.com/watch?v=vW-ZTPsUbMU" },
            { name: "Bonka ft. Cali Y El Dandee - La Botella", url: "https://www.youtube.com/watch?v=Lfyl9Y-YWWU", favorite: true },
            { name: "Odio a Botero - Salchipapas y Rock N' Roll", url: "https://www.youtube.com/watch?v=MnDa0_jzI24" },
            { name: "Bomba Estéreo - Bailar Conmigo", url: "https://www.youtube.com/watch?v=jR3WTRDV1bA" },
            { name: "Marce - Jenny", url: "https://www.youtube.com/watch?v=JFyTsySBAR4" }, 
            { name: "Emily Has Fallen - Amor En Las Rocas", url: "https://www.youtube.com/watch?v=skDOxhlcHow" },
            { name: "ChocQuibTown - Hasta Que Amanezca", url: "https://www.youtube.com/watch?v=BzWxiOaDLKc" },
            { name: "Chite - La Punkera de Mi Barrio", url: "https://www.youtube.com/watch?v=X9KJHc_LseM" },
            { name: "La Severa Matacera - Noche de Perdición", url: "https://www.youtube.com/watch?v=JrTAHKq1JBA" },
            { name: "Nadie - Emilio Dice", url: "https://www.youtube.com/watch?v=jRN1E_75ZpU" },
            { name: "Mauricio & Palo de Agua - Dame Tu Amor", url: "https://www.youtube.com/watch?v=2iYZEKlsrzU" },
            { name: "Sidestepper - Mas Papaya", url: "https://www.youtube.com/watch?v=QAF5Dbah3rw" },
            { name: "Sin Pudor - Hijos del cemento", url: "https://www.youtube.com/watch?v=qYdOLonNcrc" }
        ]
    },
    "KM": { // 0.85m
        name: "Comoros", desc: "The Union of the Comoros is a country in the Indian Ocean. It consists of several small islands, 3 main islands, and maybe one other main island, but that island is still under French rule so, y'know, there's that whole thing going on.",
        population: 850688, popEstimate: 2018, area: 1659, independence: "1975-07-06", indFrom: "France", demonym: "Comorian", currency: "Comorian franc (KMF)", 
        languages: ["Comorian", "Arabic", "French"], motto: `"Unity - Solidarity - Development."`, neighbors: ["None"], 
        foodURL: "https://www.worldtravelguide.net/guides/africa/comoros/food-and-drink/",
        food: [
            { name: "Ladu", type: "Dessert", url: "http://deborahotoole.com/FoodFare/ladu.htm", date: "2019-07-28", // https://recipes.fandom.com/wiki/Comorian_Ladu
              img: "ladu.jpg", desc: "Balls of cooked rice, sugar, cardamom, black pepper, and ghee. I will go on the record and say that I burnt the rice a bit, or a lot. It tasted like sweet burnt rice. Bone App the Teeth.",
              diet: [
                  { type: "Dairy", desc: "Ghee is used to help things stick together." }
              ],
              ingredients: ["rice", "powdered sugar", "ghee", "cardamom", "black pepper"]
            },
            { name: "Pilaou au Poulet", type: "Rice", url: "http://sameera.over-blog.com/2015/01/pilaou-au-poulet.html", date: "2019-07-28", // http://travelbystove.palfreymedia.com/comoros-recipes-pilaou.asp
              img: "pilaou.jpg", desc: "Rice + Spice = Nice. This is the formula for a good number of dishes I've cooked so far and this dish is just more proof of its correctness. It makes a yumyum in my tumtum, with special note given to the nice carmelized onions in every bite.",
              diet: [
                  { type: "Meat", desc: "You can beef or chicken this dish. You could also just not do that." },
                  { type: "Dairy", desc: "Fermented butter is used in this dish." }
              ],
              ingredients: ["chicken", "beef", "smen butter", "onion", "tomato paste", "turmeric", "cumin", "cloves", "cardamom", "basmati rice"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_the_Comoros",
        music: [
            { name: "Goulam - Mama", url: "https://www.youtube.com/watch?v=9d82v7luoas", favorite: true },
            { name: "Sourette - M'épouser", url: "https://www.youtube.com/watch?v=WPGjMbZb2hQ" },
            { name: "Says'z - Idéal", url: "https://www.youtube.com/watch?v=GgfYibhvmvc" },
            { name: "Chamsia Sagaf ft. Naïma - Moina", url: "https://www.youtube.com/watch?v=yPBhQmmA0Qc" }
        ]
    },
    "CG": { // 5.1m
        name: "Congo-Brazzaville", desc: "The Republic of the Congo is a country on the coast of Central Africa. It is the tinier of the two Congos. Why are there two Congos, you ask? Well, the one word answer is \"politics.\" The three word answer is \"colonialism and politics.\" Any more words and you're better off consulting literally any resource that isn't some white dude's cooking and music site.",
        population: 5125821, popEstimate: 2016, area: 342000, independence: "1960-08-15", indFrom: "France", demonym: "Congolese", currency: "Central African CFA Franc (XAF)", 
        languages: ["French", "Kitumba", "Kikongo", "Lingala"], motto: `"Unity, Work, Progress."`, neighbors: ["AO", "CM", "CF", "CD", "GA"], 
        foodURL: "https://www.worldtravelguide.net/guides/africa/republic-of-congo/food-and-drink/",
        food: [
            { name: "Yassa Chicken", type: "Meat", url: "https://www.africanbites.com/yassa-chickenpoulet-au-yassa/", date: "2019-08-03", 
              img: "yassa.jpg", desc: "In my adventures in foreign foods, I am also discovering not-very-foreign-at-all things that I have somehow never tried before. Like mustard. Yeah, I've never had mustard before. Yes I was a 29 year old U.S. American as of this writing. Unfortunately, I have now reached the conclusion that I do not like mustard with chicken. This is unforunate because this is chicken in a mustard sauce.",
              diet: [
                  { type: "Meat", desc: "Just make Yassa Tofu if you don't eat chicken." },
                  { type: "Spicy", desc: "Scotch Bonnet Peppers or cayenne powder are used. Adjust to your taste." }
              ],
              ingredients: ["chicken", "lemon", "onion", "garlic", "bay leaf", "maggie", "bouillon", "dijon mustard", "scotch bonnet pepper", "cayenne", "chicken stock"]
            },
            { name: "Moambé Chicken", type: "Meat", url: "https://www.marga.org/food/int/congo/mwamba.html", date: "2019-08-03", // serves 4; https://www.internationalcuisine.com/congo-moambe-chicken/
              img: "moambe.jpg", desc: "Guess who, just now, as he started writing this, realized that this dish is probably identical to the Moamba de Galinha he made for Angola? This guy! Fortunately, the two recipes are pretty different as this one called for peanut butter as the prize ingredient as opposed to the Angolan version's palm oil. When trying to find recipes for this, I found an article that, in the comments, had a Congolese person angrily stating that the peanut butter recipe was bullshit and that the aunthetic Congolese version was very different. Sadly, I can no longer find her version because that website up and fucking vanished in the like three days between me finding it and me trying to make this. The site itself exists in the Wayback Machine but the recipe page was not saved, so, whoopsie! Either way, I don't think I like peanut butter chicken. I think that Congolese woman's recipe was probably better.",
              diet: [
                  { type: "Meat", desc: "Just make Moabé Tofu if you don't eat chicken." },
                  { type: "Spicy", desc: "A wee bit spicy. Not too bad though. Just don't add the red peppie flakes if you don't wanty spice up your life." },
                  { type: "Peanuts", desc: "Peanut butter is used in the sauce." }
              ],
              ingredients: ["chicken", "palm oil", "onion", "garlic", "tomato paste", "ginger", "tomato", "red pepper flakes", "peanut butter"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_the_Republic_of_the_Congo",
        music: [
            { name: "Pierrette Adams - Mama Africa", url: "https://www.youtube.com/watch?v=d_ecIYEQNII" }, 
            { name: "Niasony - Koluka - Your Voice", url: "https://www.youtube.com/watch?v=q9npnAMQRLM", favorite: true },
            { name: "Bisso na Bisso - Show ce soir", url: "https://www.youtube.com/watch?v=F10ZOAVuclQ" },
            { name: "Youlou Mabiala - Maka", url: "https://www.youtube.com/watch?v=IlVJqkJ8w18" },
            { name: "Dany Engobo - Akouli", url: "https://www.youtube.com/watch?v=UWkZxCFsixg" }
        ]
    },
    "CD": { // 91.9m
        name: "Congo-Kinshasa", desc: "The Democratic Republic of the Congo is a country in Central Africa and the second largest country in all of Africa. Formerly known as Zaire, they became the Congo in 1997 after the First Congo War ended and the new president declared the name change. It's clear that then-president Laurent Kabila knew that people like me would be doing shit like this in alphabetical order in the future, hence the move from Z up to C.",
        population: 91931000, popEstimate: 2019, area: 2345409, independence: "1960-06-30", indFrom: "Belgium", demonym: "Congolese", currency: "Congolese Franc (CDF)", 
        languages: ["French", "Lingala", "Kikingo", "Swahili", "Tshiluba"], motto: `"Justice - Peace - Work."`, neighbors: ["AO", "BI", "CF", "CG", "RW", "SS", "TZ", "UG", "ZM"], 
        foodURL: "https://en.wikipedia.org/wiki/Democratic_Republic_of_the_Congo_cuisine",
        food: [
            { name: "Mikate", type: "Dumpling", url: "https://www.youtube.com/watch?v=7Q7I10hAtmE", date: "2019-09-01", favorite: true, 
              img: "mikate.jpg", desc: "A crispy slightly coconutty outside with a soft fluffy vanilla-ey inside. Such a simple dough creates such a beautiful treat.",
              diet: [
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["flour", "yeast", "sugar", "vanilla extract", "vegetable oil", "coconut oil"]
            },
            { name: "Fumbwa", type: "Soup", url: "https://www.thespruceeats.com/fumbwa-recipe-congolese-wild-spinach-stew-39465", date: "2019-09-01", 
              img: "fumbwa.jpg", desc: "It smells better than it tastes and it tastes better than it looks, but it tastes less-than-great. Smells like peanut butter, though, which is always a plus.",
              diet: [
                  { type: "Warning", desc: "This recipe calls for red palm oil. Please make sure you are buying sustainable palm oil if you make this recipe." },
                  { type: "Meat", desc: "This recipe calls for a chicken stock cube, but you can use a vegetarian stock like I did without issue." },
                  { type: "Nuts", desc: "Peanuts are used in this dish." },
                  { type: "Fish", desc: "This recipe calls for smoked catfish. If you're like me and don't eat that sort of thing, you can omit it." }
              ],
              ingredients: ["spinach", "onions", "garlic", "green onions", "tomatoes", "chicken stock", "catfish", "red palm oil", "peanuts"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_the_Democratic_Republic_of_the_Congo",
        music: [
            { name: "Cindy le Coeur ft. Koffi Olomide - Koupé", url: "https://www.youtube.com/watch?v=9VYnBT3Wtnw" },
            { name: "Icha Kavons ft. Kambua - Miracle Baba", url: "https://www.youtube.com/watch?v=QeduHERnLR4" },
            { name: "Awilo Longomba ft. Tiwa Savage - Esopi Yo", url: "https://www.youtube.com/watch?v=cUmPcT26Hjo" },
            { name: "Barbara Kanam ft. Fally Ipupa - Noir et Blanc", url: "https://www.youtube.com/watch?v=oGYvRrqqLhA" },
            { name: "Nathalie Makoma - Jump For Life", url: "https://www.youtube.com/watch?v=k7dDUolVMeo" },
            { name: "Diblo Dabala - Stoya", url: "https://www.youtube.com/watch?v=EkDzITA_Cw0" },
            { name: "Kalash Criminel - Piano Sombre", url: "https://www.youtube.com/watch?v=UVb2AE78uS0" },
            { name: "Icha Kavons - Testimony", url: "https://www.youtube.com/watch?v=NCwpHamvoHA" },
            { name: "Kaysha - Diamonds", url: "https://www.youtube.com/watch?v=eJ0_qMhKurM" },
            { name: "Innoss'B ft. Koffi Olomide - Elengi", url: "https://www.youtube.com/watch?v=ckONJNODHW8" },
            { name: "Maître Gims - Est-ce que tu m'aimes?", url: "https://www.youtube.com/watch?v=6TpyRE_juyA", favorite: true }
        ]
    },
    "CK": { // 0.02m
        focusArea: "FJ", name: "Cook Islands", desc: "The Cook Islands are an island country in the Pacific Ocean. They are in Free Association with New Zealand, which, summarized (to the best of my abilities) means New Zealand is in charge of some things like defense, and all Cook Islands citizens are New Zealand citizens - but not the other way around! According to Wikipedia they're sovereign states, which is good enough for me. They're currently planning on changing the name of the country, since being named after James Cook - the British cartographer who first mapped the islands and then got killed by Hawai'ians after trying to kidnap their king - is not something a lot of Cook Islanders like.",
        population: 17459, popEstimate: 2016, area: 237, independence: "1965-08-04", indFrom: "New Zealand", demonym: "Cook Islanders", currency: "Cook Islands Dollar ($CKD)", 
        languages: ["English", "Cook Islands Māori"], motto: `None.`, neighbors: ["None"], 
        foodURL: "https://en.wikipedia.org/wiki/Culture_of_the_Cook_Islands#Cuisine",
        food: [
            { name: "Poke", type: "Dessert", url: "https://www.food.com/recipe/poke-cook-islands-part-deux-461407", date: "2019-09-03", 
              img: "poke.jpg", desc: "This is basically just a creamy papaya pudding. If you like papayas and pudding, this is the thing for you. If you don't like either of those things, maybe don't make this. That's the lesson I learned here.",
              diet: [
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["arrowroot", "papaya", "coconut cream"]
            },
            { name: "Curried PawPaw Salad + Dressing", type: "Salad", url: "http://www.destination-cook-islands.com/Curried-Pawpaw.html", date: "2019-09-03", 
              img: "currypapaya.jpg", desc: "Tasted like papayas, mayonnaise, and curry powder. Which is not three things I'd usually want to taste at the same time. This is no exception.",
              diet: [
                  { type: "Honey", desc: "Honey can be used in the dressing." },
                  { type: "Egg", desc: "Mayonnaise is used in the salad. You can use a vegan substitute like I did because I will never buy mayo." }
              ],
              ingredients: ["papaya", "mayonnaise", "curry powder", "vinegar", "onion", "honey", "mustard", "chilli"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_the_Cook_Islands",
        music: [
            { name: "Family In Trust - Yummy", url: "https://www.youtube.com/watch?v=Cjscm6naN44" },
            { name: "T'Angelo - Tamaka-Spike", url: "https://www.youtube.com/watch?v=2GYHvJ_-OrU" },
            { name: "Zerynah Hugs - Shifty", url: "https://www.youtube.com/watch?v=N-_4Th3hiqU", favorite: true },
            { name: "2 Pouz Fynist - Osana / Te Pati Akatengu Atu Nei", url: "https://www.youtube.com/watch?v=NcrySDB0Msc" },
            { name: "Melissa Gosselin - Rarotonga Ipukarea / Just One Look", url: "https://www.youtube.com/watch?v=XGprooBJaWw" },
            { name: "Mehara - Haruru Te Patiri", url: "https://www.youtube.com/watch?v=9cjIVBzploA" }
        ]
    },
    "CR": { // 4.9m
        name: "Costa Rica", desc: "The Republic of Costa Rica is a country in Central America. They are the largest country in the world to not have a military, which they abolished after their last war in 1948, and then allocated their military budget to healthcare and education. Weirdly, Costa Rica has some of the highest literacy rates and life expectancies in Latin America. Hmm... replacing their military budget with funding for education and healthcare, and then their people are very well educated and healthy... WONDER IF THERE'S ANY CORRELATION THERE. I SAID, <strong>I WONDER IF THERE'S ANY CORRELATION THERE. <em>I WONDER IF THERE'S ANY--</em></strong>",
        population: 4857274, popEstimate: 2016, area: 51100, independence: "1821-09-15", indFrom: "Spain", demonym: "Costa Rican", currency: "Costa Rican colón (₡)", 
        languages: ["Spanish", "Mekatelyu", "Bribri", "Patois"], motto: `None.`, neighbors: ["PA", "NI"], 
        foodURL: "https://en.wikipedia.org/wiki/Costa_Rican_cuisine",
        food: [
            { name: "Picadillo de Papa", type: "Meat", url: "https://www.centralamerica.com/experiencing/eating/costa-rica-picadillo-de-papa-recipe/", date: "2019-09-08", 
              img: "picadillo.jpg", desc: "A hash of potatoes and meat, but mostly potatoes, which are the real winner of any recipe including potatoes. The seasonings were good times. The potatoes were good times. It was all good times.",
              diet: [
                  { type: "Meat", desc: "It's a mince dish. You can substitute with fake beef and/or also skip the bacon. Or just go full potato." },
                  { type: "Spicy", desc: "Some red peppers are in the recipe, but no one's judging you if you just use bell peppers like I did." }
              ],
              ingredients: ["potatoes", "beef", "bacon", "onions", "red pepper", "cilantro", "garlic", "oregano", "achiote paste"]
            },
            { name: "Proprietary Ice Cream Sandwich", type: "Dessert", url: "https://neverendingeverywhere.wordpress.com/2016/11/28/a-thing-called-trits/", date: "2019-09-14", 
              img: "trit.jpg", desc: "Graham crackery and ice creamy. Hard to go wrong with that, unless ice cream gives you a brain freeze. Which it does for me, but, hey, the cookies were still tasty!",
              diet: [
                  { type: "Egg", desc: "Both the cookies and ice cream call for eggies. You can use/make a vegan ice cream and use a vegan baking-egg-alternative." },
                  { type: "Dairy", desc: "Ice cream. You can use a vegan ice cream instead. Margarine can be used instead of butter." },
                  { type: "Gluten", desc: "Graham crackers usually have gluten in them. If you can find/make gluten free ones, go for it!" }
              ],
              ingredients: ["margarine", "butter", "egg", "graham crackers", "sugar", "ice cream", "heavy cream", "milk", "vanilla extract"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Costa_Rica",
        music: [
            { name: "Malas Palabras - Despreocúpese Ante el Merengue", url: "https://www.youtube.com/watch?v=b7mhRSH6pSQ" },
            { name: "Éditus - Día y Noche", url: "https://www.youtube.com/watch?v=0FHgoHVMcrY" },
            { name: "Moonlight Dub Xperiment - Global Warning", url: "https://www.youtube.com/watch?v=D9MBBM04bf0", favorite: true },
            { name: "Gandhi - Lo Que Más Dolió", url: "https://www.youtube.com/watch?v=up4n9ARdKG8" },
            { name: "Guadalupe Urbina - Antonio", url: "https://www.youtube.com/watch?v=2fNQNFGayt4" },
            { name: "Cocofunka - Chúcaro", url: "https://www.youtube.com/watch?v=gqqY2A9VDoo" },
            { name: "Las Robertas - Ghost Lover", url: "https://www.youtube.com/watch?v=U7rAshiRFUE" },
            { name: "Cocofunka - Siente", url: "https://www.youtube.com/watch?v=nvLXjOdluL4" },
            { name: "Marfil - Nah Going Home", url: "https://www.youtube.com/watch?v=DqQaDLlfD6Q" },
            { name: "MishCatt - Another Dimension", url: "https://www.youtube.com/watch?v=ItfKw9kqEIE" },
            { name: "Maribel Guardia - Hay Que Venir al Sur", url: "https://www.youtube.com/watch?v=fcDtJ6jiCLs" },
            { name: "Los Cuchillos - Isla Macabro", url: "https://www.youtube.com/watch?v=JVazvNWa6gs" },
            { name: "Patterns - Dangerous Intentions", url: "https://www.youtube.com/watch?v=o73cFKx4lIU" },
            { name: "Los Waldners - Papalotes", url: "https://www.youtube.com/watch?v=rauhinT9cQI" },
            { name: "Tango India - Paz", url: "https://www.youtube.com/watch?v=ZznrtWdBIKw" }
        ]
    },
    "CI": { // 23m
        name: "Côte d'Ivoire", desc: "The Côte d'Ivoire is a country in West Africa. Lots of English-speaking people call it \"Ivory Coast\" because speaking French is apparently too hawd for their widdle baby moufs. The official English name is \"Côte d'Ivoire!\" They produce a lot of cocoa and coffee, and used to export a lot of that one thing that comes from elephant tusks. You know, the hard white material. I can't remember the name right now.",
        population: 23740424, popEstimate: 2018, area: 322463, independence: "1960-08-07", indFrom: "France", demonym: "Ivorian", currency: "West African CFA franc (CFA)", 
        languages: ["French"], motto: `"Unity - Discipline - Work."`, neighbors: ["BF", "GH", "GN", "LR", "ML"], 
        foodURL: "https://en.wikipedia.org/wiki/Ivorian_cuisine",
        food: [
            { name: "Kedjenou Chicken", type: "Meat", url: "https://www.africanbites.com/kedjenou-chicken/", date: "2019-10-01", 
              img: "kedjenou.jpg", desc: "The combination of spices here makes for some smooth chicken dish. Nothing amazing, but definitely tasty.",
              diet: [
                  { type: "Meat", desc: "Kedjenou CHICKEN. You can use tofu maybe I dunno. I'm no tofuologist." },
                  { type: "Spicy", desc: "Habanero is optional don't worry.", optional: true }
              ],
              ingredients: ["chicken", "onion", "garlic", "pepper", "tomato", "ginger paste", "garlic puree", "thyme", "bay leaf", "smoked paprika", "chicken bouillon", "habanero"]
            },
            { name: "Riz au Gras", type: "Rice", url: "https://www.tropicalfoodies.com/2012/01/22/riz-au-gras-or-the-biggest-misnomer-in-culinary-history/", date: "2019-09-23", 
              img: "rizaugras.jpg", desc: "It's tomatoey rice. With some beef and shrampies in it. Or no shrampies if you were lazy like me. Still tasty.",
              diet: [
                  { type: "Meat", desc: "It's got stew beef. You can probably omit or replace this." },
                  { type: "Fish", desc: "Shrimp is used. You can also not use shrimp, like I did!" },
                  { type: "Spicy", desc: "The Scotch Bonnett pepper is optional don't worry.", optional: true }
              ],
              ingredients: ["stew beef", "shrimp", "rice", "tomato sauce", "carrot", "onion", "garlic", "cabbage", "squash", "scotch bonnet chilli"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Ivory_Coast",
        music: [
            { name: "Métisse - Therapy", url: "https://www.youtube.com/watch?v=xYmnW_-is0Q" },
            { name: "Paco Sery - Donne moi une chance", url: "https://www.youtube.com/watch?v=atxQENGHC6s", favorite: true },
            { name: "Sur-Choc - On est là pour danser", url: "https://www.youtube.com/watch?v=VelIndwHa4E" },
            { name: "Monique Seka - 900 kg d'amour", url: "https://www.youtube.com/watch?v=yByzzYyIcc0" },
            { name: "Nayanka Bell - Chogologo", url: "https://www.youtube.com/watch?v=lKC6D5bzWc0" },
            { name: "Kiff No Beat ft. DJ Arafat - Approchez Regardez", url: "https://www.youtube.com/watch?v=-LdbZLSUj6k" },
            { name: "Dobet Gnahoré - Afrika", url: "https://www.youtube.com/watch?v=BSIhQipnzWQ" },
            { name: "Tiken Jah Fakoly - Pourquoi nous fuyons", url: "https://www.youtube.com/watch?v=tDIIVTuxvuA" },
            { name: "Nayanka Bell ft. Koffi Olomide - Je t'aime moi non plus", url: "https://www.youtube.com/watch?v=MGPaaaNSlBU" },
            { name: "Magic System - Un gaou à Oran", url: "https://www.youtube.com/watch?v=vL7BvJ3Qd_0" },
            { name: "Meiway - Golgotha", url: "https://www.youtube.com/watch?v=XCpFLxIn9Lc" },
            { name: "Serge Beynaud - Kota na Koto", url: "https://www.youtube.com/watch?v=hv7zREjc9f0" }
        ]
    },
    "HR": { // 4m
        name: "Croatia", desc: "The Republic of Croatia is a country in Central-Southeast Europe. They got a lot of shoreline and over a thousand islands but a lot of them are very tiny and unpopulated but that doesn't mean you can't jokingly claim one as your own country and then get arrested for it. Yes that is a thing that has happened before and will happen again as soon as I renew my passport.",
        population: 4076246, popEstimate: 2019, area: 56594, independence: "1991-06-25", indFrom: "Yugoslavia", demonym: "Croatian", currency: "Kuna (HRK)", 
        languages: ["Croatian"], motto: `None.`, neighbors: ["BA", "HU", "ME", "RS", "SI"], 
        foodURL: "https://en.wikipedia.org/wiki/Croatian_cuisine",
        food: [
            { name: "Povitica", type: "Bread", url: "https://www.allrecipes.com/recipe/235811/grandmas-povitisa-po-vuh-teet-zuh-povitica-croatian-nut-bread/", date: "2019-10-06", 
              img: "povitica.jpg", desc: "A tasty spiraly bread with a very pretty cross-section and a very tasty eat-section. Flavors of walnuts, lemons, and vanillis mix well with the soft fluffy bread.",
              diet: [
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Nuts", desc: "This is a walnut bread. You can replace it with another nut maybe, but this dish is nuts." },
                  { type: "Egg", desc: "Egg is used in the dough and filling." },
                  { type: "Dairy", desc: "Butter and milk are used in the filling and dough." }
              ],
              ingredients: ["yeast", "milk", "sugar", "shortening", "egg", "flour", "brown sugar", "butter", "vanilla", "lemon", "walnuts"]
            },
            { name: "Kremšnita", type: "Pastry", url: "https://www.196flavors.com/croatia-kremsnita/", date: "2019-10-09",
              img: "kremspita.jpg", desc: "A fluffy creamy combination of custardy whippedcreamy puffpastry-y goodness.",
              diet: [
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Egg", desc: "Egg is used in the filling." },
                  { type: "Dairy", desc: "Milk is used in the filling." },
                  { type: "Alcohol", desc: "Rum is used in the filling. This can be omitted.", optional: true }
              ],
              ingredients: ["flour", "egg", "sugar", "whipped cream", "whipping cream", "vanilla", "milk", "rum", "icing sugar"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Croatia",
        music: [
            { name: "Postolar Tripper - Kruva Bez Motike", url: "https://www.youtube.com/watch?v=YRIXNtrA2Uo" },
            { name: "Novi Fosili - E Moj Saša", url: "https://www.youtube.com/watch?v=IbJMA5uRwPc" },
            { name: "Cacadou Look - Gledam Ga Dok Spava", url: "https://www.youtube.com/watch?v=jL6MgWCrW7M" },
            { name: "Ljupka Dimitrovska - Robot", url: "https://www.youtube.com/watch?v=g9xUyz4owfs" },
            { name: "Crooks & Straights - Red Robin", url: "https://www.youtube.com/watch?v=ajNr8YB5aPA" },
            { name: "Vanna - U Tebi", url: "https://www.youtube.com/watch?v=i0lRqYHiTBA" },
            { name: "Osmi Putnik - Tajna", url: "https://www.youtube.com/watch?v=-E-gWKI2Oes" },
            { name: "Dino Jelusic - You Are My One And Only", url: "https://www.dailymotion.com/video/x2qyve" },
            { name: "Riva - Kiss Me", url: "https://www.youtube.com/watch?v=pUJ1GR3CF8w" },
            { name: "Omega Lithium - Dance With Me", url: "https://www.youtube.com/watch?v=OPC4oirxVbc", favorite: true },
            { name: "Denis & Denis - Program Tvog Kompjutera", url: "https://www.youtube.com/watch?v=pldDuqnPP1s" },
            { name: "Jelena Rozga - Dobitna Kombinacija", url: "https://www.youtube.com/watch?v=WRdAf9fKQpI" },
            { name: "KUD Idijoti - Blago", url: "https://www.youtube.com/watch?v=RRrpvoU588A" },
            { name: "Magazin - Žena, A Ne Broj", url: "https://www.youtube.com/watch?v=vdxRGUp8cko" },
            { name: "Flyer - Nismo Rekli Ne", url: "https://www.youtube.com/watch?v=69WChyANLI4" }
        ]
    },
    "CU": { // 11.2m
        name: "Cuba", desc: "The Republic of Cuba is an island country in North America. They have excellent healthcare and education, but this is bad actually because good things are only good if the USA does it, I guess.",
        population: 11209628, popEstimate: 2018, area: 109884, independence: "1902-05-20", indFrom: "United States of America", demonym: "Cuban", currency: "Peso (CUC)", 
        languages: ["Spanish"], motto: `"Homeland or Death, we shall overcome!"`, neighbors: ["None"], 
        foodURL: "https://en.wikipedia.org/wiki/Cuban_cuisine",
        food: [
            { name: "Yuca con Ajo", type: "Salad", url: "https://icuban.com/food/yuca_con_ajo.html", date: "2019-10-19", 
              img: "yucajo.jpg", desc: "Tastes like potatoes and garlic, with some acidity from the citrus juices. A tasty treat made slightly less delicious by my anxieties about getting cyanide poisoning from eating undercooked cassava.",
              diet: [
                  { type: "Warning", desc: "Cassava must be cooked thoroughly to remove the cyanide." },
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["yuca", "garlic", "lime juice", "lemon juice", "olive oil", "onion"]
            },
            { name: "Pastelitos de Guayaba", type: "Pastry", url: "https://www.mybigfatcubanfamily.com/2016/07/pastelitos-de-guayaba-recipe/", date: "2019-10-19", 
              img: "cubanpastry.jpg", desc: "It's pastry full of guava paste and cream cheese. That's what I call a good food to eat in your mouth. Sweet and a bit savory.",
              diet: [
                  { type: "Dairy", desc: "Butter is used in puff pastry dough. Cream cheese is used in the filling." },
                  { type: "Gluten", desc: "Flour is used in puff pastry dough." },
                  { type: "Egg", desc: "You can put an egg wash on top, but you don't have to.", optional: true }
              ],
              ingredients: ["puff pastry", "flour", "butter", "guava", "cream cheese"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Cuba",
        music: [
            { name: "Anima Mundi - The Hunter", url: "https://www.youtube.com/watch?v=6ONAEQ_CbB4" },
            { name: "Burbles - Canción por los Perros", url: "https://www.youtube.com/watch?v=Jp5151WkKpc" },
            { name: "Addy Mercedes - Too Hot for Revolution", url: "https://www.youtube.com/watch?v=t0sktm2i4sc" },
            { name: "Lissette - Eclipse Total Del Amor", url: "https://www.youtube.com/watch?v=340MHMHaVmY" },
            { name: "Krudas Cubensi - En el Solar", url: "https://www.youtube.com/watch?v=D0LCwU6gQXY", favorite: true },
            { name: "Obsesión - Los Pelos", url: "https://www.youtube.com/watch?v=vgOX_6wZzSM" },
            { name: "Danay Suárez - Yo Aprendí", url: "https://www.youtube.com/watch?v=GqLhLDbm0d8" },
            { name: "Buena Fe - Nalgas", url: "https://www.youtube.com/watch?v=Fee7jrn9oH8" },
            { name: "Guy Cuevas - Ebony Game", url: "https://www.youtube.com/watch?v=gxJD2mwwDlQ" },
            { name: "Irakere - Bacalao Con Pan", url: "https://www.youtube.com/watch?v=kBeXIfwRpog" }
        ]
    },
    "CY": { // 1.1m
        name: "Cyprus", desc: "The Republic of Cyprus is an island country in the eastern Mediterranean Sea in Europe. There's a Greek half and a Turkish half and according to my half-assed internet searches, the consensus among many of them seems to be that reunification seems like it'd be cool. Turkey, however, may disagree. What, you want my opinion? I've never even been to Europe, why the hell should my opinion on this matter at all? I think they should unify and change their name to Ultra Cyprus and donate 10% of their GDP to me. How's that sound to you? Is that what you wanted?",
        population: 1170125, popEstimate: 2016, area: 9251, independence: "1960-10-01", indFrom: "Britain", demonym: "Cypriot", currency: "Euro (€)", 
        languages: ["Greek", "Turkish"], motto: `None`, neighbors: ["None"], 
        foodURL: "https://en.wikipedia.org/wiki/Cypriot_cuisine",
        food: [
            { name: "Hellimli", type: "Bread", url: "https://www.therecipehunters.com/hellimli", date: "2019-10-27", 
              img: "hellimli.jpg", desc: "This is a very intense bread full of lots of flavors and textures in every bite. If you can handle its power, you will find a very delicious, cheesy, and filling bread.",
              diet: [
                  { type: "Gluten", desc: "Bread. It uses flour. Sorry." },
                  { type: "Dairy", desc: "Melk is used in the dough. Oh, yeah, also cheese. It's a cheese bread. Full of cheese." }
              ],
              ingredients: ["flour", "milk", "active dry yeast", "sugar", "halloumi cheese", "mint", "onion", "nigella seeds", "sesame seeds"]
            },
            { name: "Shiamishi", type: "Pastry", url: "https://www.kopiaste.org/2007/11/shiamishi/", date: "2019-11-01", 
              img: "shiamishi.jpg", desc: "Happy Feast Day of Kosmas and Damianos! To celebrate like the Orthodox Cypriots might, whip up some wet flour that has been wrapped around some wetter, different flour, and then fried! The result? Pretty tasty!",
              diet: [
                  { type: "Gluten", desc: "It's made of flour and it's filled with flour." },
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["flour", "semolina", "sugar", "mastic resin", "orange blossom water", "powdered sugar"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Cyprus",
        music: [
            { name: "Michalis Hatzigiannis - To Kalokairi Mou", url: "https://www.youtube.com/watch?v=gozxtZUkZhQ" },
            { name: "Eleftheria Eleftheriou - Nychtes Kaftes", url: "https://www.youtube.com/watch?v=jicB3KEfP2U" },
            { name: "I%C5%9Fın Karaca - Dert Bende Derman Sende", url: "https://www.youtube.com/watch?v=oFXvo-f3h0s" },
            { name: "Ziynet Sali - Ağlar mıyım? Ağlamam", url: "https://www.youtube.com/watch?v=WyGnyJZN3bI", favorite: true },
            { name: "One - Gimme", url: "https://www.youtube.com/watch?v=Q1AWVb4oYFA" },
            { name: "Minus-One - Alter Ego", url: "https://www.youtube.com/watch?v=k8LcNrqiIFE" },
            { name: "Babutsa - Yanayım Yanayım", url: "https://www.youtube.com/watch?v=TUJLnlNzDzE" },
            { name: "Evridiki - Comme Ci Comme Ca", url: "https://www.youtube.com/watch?v=ge3Rfoxs1N0" },
            { name: "Evdokia Kadi - Taxidepse Me", url: "https://www.youtube.com/watch?v=UMS4by2NGg4" },
            { name: "Genco Ecer - Kandıramazsın", url: "https://www.youtube.com/watch?v=W57RBUQchlE" },
            { name: "Nil Burak - Bir Garip Olur İçim", url: "https://www.youtube.com/watch?v=kf8jhrQXueU" },
            { name: "Yuri Melikov - You Got Me (Aha Aha)", url: "https://www.youtube.com/watch?v=vJLs6o0svVY" },
            { name: "Sophia Patsalides - Made of Gold", url: "https://www.youtube.com/watch?v=Vt0Kbm0Pexs" },
            { name: "Methysos - Andvaranaut", url: "https://www.youtube.com/watch?v=XpfiHIKzVvQ" },
            { name: "Monsieur Doumani - Where Shall I Bang It?", url: "https://www.youtube.com/watch?v=m2oA6tLGZAk" }
        ]
    },
    "CZ": { // 10.6m
        name: "Czechia", desc: "The Czech Republic is a country in Central Europe. They have the lowest unemployment rate in the European Union and they drink the most beer per capita in the world. Coincidence? Normally I'd say yes, since you should all know by now that correlation does not imply causation, but I've been sort of doing a running gag in these country descriptions where I say, like, \"oh this country does these obviously good things and also has all of these good attributes I wonder if they're related\" so, in keeping with that theme, I will instead say: not coincidence! The takeaway you should get from this is that beer causes employment.",
        population: 10649800, popEstimate: 2019, area: 78866, independence: "1993-01-01", indFrom: "Czechoslovakia", demonym: "Czech", currency: "Koruna (Kč)", 
        languages: ["Czech"], motto: `"Truth prevails."`, neighbors: ["AT", "DE", "PL", "SK"], 
        foodURL: "https://en.wikipedia.org/wiki/Czech_cuisine",
        food: [
            { name: "Knedlíky", type: "Dumpling", url: "https://www.196flavors.com/czech-republic-knedliky/", date: "2019-11-03",
              img: "knedliky.jpg", desc: "It's like bread... but boiled. So it kind tastes and feels like wet bread. Since it's not baked, it lacks that distinct Maillard reaction flavor that bread usually has. Very good for soaking up soup, though!",
              diet: [
                  { type: "Dairy", desc: "Milk is used in the dough." },
                  { type: "Egg", desc: "Egg is used in the dough." },
                  { type: "Gluten", desc: "Flour is used in the dough." }
              ],
              ingredients: ["flour", "milk", "egg", "yeast", "sugar", "salt"]
            },
            { name: "Česnečka", type: "Soup", url: "http://www.tresbohemes.com/2019/07/cesnecka-traditional-czech-garlic-soup/", date: "2019-11-03", favorite: true,
              img: "garlicsoup.jpg", desc: "A very hearty, very garlicky soup. Especially if you more than double the recommended amount of garlic in it like I did. What? It's literally a garlic soup. I ain't gonty skimp out on the GARLIC. But it was delicious. Cured all my ailments and status effects.",
              diet: [
                  { type: "Dairy", desc: "Butter can be used to fry the onions, but you can also use oil. Grated cheese is an optional topping.", optional: true },
                  { type: "Meat", desc: "This uses chicken or beef broth, but you can use a vegetarian broth like I did. Lard can be used to fry the onions.", optional: true }
              ],
              ingredients: ["butter", "lard", "onion", "garlic", "stock", "broth", "potatoes", "marjoram", "caraway seeds", "croutons", "parsley", "grated cheese"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_the_Czech_Republic",
        music: [
            { name: "Pražský Výběr - Na Václavském Václaváku", url: "https://www.youtube.com/watch?v=CEl2_XEF_-0" },
            { name: "Sto Zvířat - Nikdy Nic Nebylo", url: "https://www.youtube.com/watch?v=Ugj2a0EFIHc" },
            { name: "Marpo & Wohnout - Zvedám", url: "https://www.youtube.com/watch?v=kTEwwV6Lfpg" },
            { name: "Gipsy.cz - Romano Hip Hop", url: "https://www.youtube.com/watch?v=he06HwALx3M" },
            { name: "Klara ft. Edna Green - Home", url: "https://www.youtube.com/watch?v=P9ZyJnzxro8" },
            { name: "Kabát - Burlaci", url: "https://www.youtube.com/watch?v=H0zC_juYGLs" },
            { name: "Lake Malawi - Chinese Trees", url: "https://www.youtube.com/watch?v=p8WbcPsMkEw" },
            { name: "Toxique - Field Lines", url: "https://www.youtube.com/watch?v=b-AWvpmigWE" },
            { name: "Čechomor - Gorale", url: "https://www.youtube.com/watch?v=lUhf3VaaHH4", favorite: true },
            { name: "Krucipüsk - Máme Se", url: "https://www.youtube.com/watch?v=YAjFHd6ru70" },
            { name: "MIDI Lidi - Žižla", url: "https://www.youtube.com/watch?v=EUkykH4jl10" },
            { name: "Gabriela Gunčíková - Časy Jsou Zlé", url: "https://www.youtube.com/watch?v=Wyp0CdX6wlc" },
            { name: "Yellow Sisters - Trpaslíci Hledaj Zlato", url: "https://www.youtube.com/watch?v=3jyZ-NF9vJQ" },
            { name: "Zuby Nehty - Dneska", url: "https://www.youtube.com/watch?v=UDXiRTlNhs4" },
            { name: "The Plastic People of the Universe - Samson", url: "https://www.youtube.com/watch?v=3Xijf-Os9ZY" }
        ]
    },
    "DK": { // 5.8m
        name: "Denmark", desc: "The Kingdom of Denmark is a Nordic country in Northern Europe. They have been to war with Sweden very many times \"for little or no political reason,\" to quote <a href='https://en.wikipedia.org/wiki/Denmark%E2%80%93Sweden_relations' target='_blank' rel='external nofollow noopener noreferrer'>Wikipedia</a>. The kingdom spans the country of Denmark itself, as well as the Faroe Islands and Greenland. Two more completely unrelated fun facts about Denmark: they are one of the most heavily taxed countries in the world and one of the happiest countries in the world.",
        population: 5814461, popEstimate: 2019, area: 43933, independence: "Unified since the 8th Century", indFrom: "X", demonym: "Danish", currency: "Krone (kr.)", 
        languages: ["Danish", "Faroese", "Greenlandic", "German"], motto: `"God, King and Fatherland."`, neighbors: ["DE"], 
        foodURL: "https://en.wikipedia.org/wiki/Danish_cuisine",
        food: [
            { name: "Vaniljekranse", type: "Dessert", url: "https://mydanishkitchen.com/tag/vaniljekranse/", date: "2019-11-16", favorite: true, 
              img: "dansk.jpg", desc: "What us Americans know as the delicious butter cookies from the blue tins that are often full of sewing supplies, are actually just delicious butter cookies... from Denmark! Trying to get the ring shape failed after my piping bag burst, so I settled for making several in regular disk shapes. Still delicious!",
              diet: [
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Dairy", desc: "Butter is used in the dough." },
                  { type: "Egg", desc: "Egg is used in the dough." },
                  { type: "Nuts", desc: "Almond flour is used in the dough." }
              ],
              ingredients: ["vanilla bean", "sugar", "butter", "egg", "flour", "almond flour"]
            },
            { name: "Boller i Karry", type: "Curry", url: "https://nordicfoodliving.com/danish-meatballs-in-curry-sauce-boller-i-karry/", date: "2019-11-10", 
              img: "boller.jpg", desc: "If anyone was expecting a Scandinavian curry to be mind-blowing, it wasn't me, and for good reason. I mean, it's curry, so it's still delicious, but apple isn't a thing I'd have thought to put into curry, and going forward I will never do so again.",
              diet: [
                  { type: "Meat", desc: "It's got meatballs. You can use fake meat. Or things that aren't even trying to be meat, as long as they're in ball form." },
                  { type: "Egg", desc: "Egg is used to bind the meatballs." },
                  { type: "Dairy", desc: "Milk is used to bind the meatballs." },
                  { type: "Gluten", desc: "Flour is used to bind the meatballs and thicken the curry sauce." },
                  { type: "Spicy", desc: "Could be spicy, depending on the curry powder you use.", optional: true }
              ],
              ingredients: ["pork", "onion", "egg", "milk", "flour", "curry powder", "apple"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Denmark",
        music: [
            { name: "Oh Land - Renaissance Girls", url: "https://www.youtube.com/watch?v=zFCYo3XocIM" },
            { name: "Kira Skov - Hollywood", url: "https://www.youtube.com/watch?v=sEOEmVABhIE" },
            { name: "PuKuut - Tummeqqat Ammukartut", url: "https://www.youtube.com/watch?v=GSX4EIFXC0g" },
            { name: "HorrorPops - Ghouls", url: "https://www.youtube.com/watch?v=O7z170H0jUc" },
            { name: "Cut 'N' Move - Spread Love", url: "https://www.youtube.com/watch?v=dZX2UOGnpJ0" },
            { name: "Me & My - Dub-I-Dub", url: "https://www.youtube.com/watch?v=XTjJ2_P5P4U" },
            { name: "Lis Sørensen - Forvandling", url: "https://www.youtube.com/watch?v=am8OrLh8o9o" },
            { name: "Laban - Love In Siberia", url: "https://www.youtube.com/watch?v=2CWRDZGehWI" },
            { name: "Alphabeat - 10.000 Nights of Thunder", url: "https://www.youtube.com/watch?v=ySHHdO-YTK4", favorite: true },
            { name: "Leæther Strip - Evil Speaks", url: "https://www.youtube.com/watch?v=LwFAzmqwrT0" },
            { name: "Cryoshell - Bye Bye Babylon", url: "https://www.youtube.com/watch?v=RBJ2l4vospQ" },
            { name: "Guðrið Hansdóttir - Stjørnur", url: "https://www.youtube.com/watch?v=maZsU-jKA1M" },
            { name: "Rasmus Lyberth - Inuunerup oqarfigaanga", url: "https://www.youtube.com/watch?v=NTCAm6_1ZP0" }
        ]
    },
    "DJ": { // 0.9m
        name: "Djibouti", desc: "The Republic of Djibouti is a country in Northeast Africa, in the Horn of Africa. If you wanna get to the Red Sea, you gotta go by Djibouti, so it's a hoppin' place to be for shipping ships. And also military bases because what good is a gulf if you can't kill people around it?",
        population: 884017, popEstimate: 2018, area: 23200, independence: "1977-06-27", indFrom: "France", demonym: "Djiboutian", currency: "Djiboutian Franc (DJF)", 
        languages: ["French", "Arabic", "Somali", "Afar"], motto: `"Unity, Equality, Peace."`, neighbors: ["ER", "ET", "SO", "SO-SM"], 
        foodURL: "https://en.wikipedia.org/wiki/Djiboutian_cuisine",
        food: [
            { name: "Skoudehkaris", type: "Rice", url: "https://www.196flavors.com/djibouti-skoudehkaris/", date: "2017-12-17", 
              img: "skoudehkaris.jpg", desc: "A soupy rice bowl that's fun for the whole family. This recipe calls for cardamom pods and doesn't specify to grind them up first, so I got a few bites of cardamom that were P U R E F L A V O R.",
              diet: [
                  { type: "Meat", desc: "It's meaty rice. You can use fake meat or tofu or something." }
              ],
              ingredients: ["lamb", "beef", "chicken", "fish", "rice", "tomatoes", "tomato paste", "red onion", "onion", "garlic", "chili powder", "cumin", "cardamom", "cinnamon", "cilantro"]
            },
            { name: "Lahooh", type: "Bread", url: "https://www.internationalcuisine.com/djibouti-canjeero/", date: "2017-12-17", 
              img: "lahooh.jpg", desc: "Spongy bread. Soaks up broth and such very well, but extremely bland on its own.",
              diet: [
                  { type: "Gluten", desc: "It's bread." },
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["sorghum millet", "teff flour", "white corn meal", "instant dry yeast", "self-rising flour", "sugar"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Djibouti",
        music: [
            { name: "Awale Adan - OH Yeah", url: "https://www.youtube.com/watch?v=L4Iov5_Xz0Q", favorite: true },
            { name: "Shay Lia - Good Together", url: "https://www.youtube.com/watch?v=939u4KE78tU" },
            { name: "Iskilaaji & Deeqa Ahmed - Bidhaan Qurux", url: "https://www.youtube.com/watch?v=vBZkXJRkN60" },
            { name: "Hani Uk - Korkayga Bal Taabo a Naaji", url: "https://www.youtube.com/watch?v=NWBGbaDPAZo" }
        ]
    },
    "DM": { // 0.1m
        name: "Dominica", desc: "The Commonwealth of Dominica is an island country in the West Indies. It's one of two countries to use the color purple on its flag, as their national bird - the lovely and purple sisserou parrot - is in the center of it.",
        population: 71625, popEstimate: 2018, area: 750, independence: "1978-11-03", indFrom: "Britain", demonym: "Dominican", currency: "East Caribbean Dollar (XCD)", 
        languages: ["English"], motto: `"After God is the earth."`, neighbors: ["None"], 
        foodURL: "https://en.wikipedia.org/wiki/Dominica_cuisine",
        food: [
            { name: "Cush Cush Biscuits", type: "Bread", url: "http://www.caribbeanchoice.com/recipes/recipe.asp?recipe=871", date: "2019-12-18", // https://www.realcajunrecipes.com/recipe/cosh-cosh-or-cush-cush-or-couche-couche/ 
              img: "cush.jpg", desc: "Some nice slightly sweet slightly savory biscuits. Good in my book.",
              diet: [
                  { type: "Dairy", desc: "Butter and milk are used in the dough." },
                  { type: "Gluten", desc: "Flour is used in the dough." }
              ],
              ingredients: ["cornmeal", "baking powder", "milk", "flour", "butter", "brown sugar"]
            },
            { name: "Callaloo Soup", type: "Soup", url: "https://thatgirlcookshealthy.com/caribbean-callaloo-soup/", date: "2019-12-18", 
              img: "callaloo.jpg", desc: "A creamy green soup. I used spinach because I could not find callaloo, which seems like a sin given the name of the dish, but the recipe itself says spinach is a valid substitute, so I'm innocent of all crimes!",
              diet: [
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." },
                  { type: "Spicy", desc: "It's got scotch bonnet or habanero peppie in it, but you can also just not do that.", optional: true }
              ],
              ingredients: ["callaloo", "spinach", "sweet potato", "butternut squash", "onion", "garlic", "thyme", "scotch bonnet pepper", "scallion", "okras", "vegetable stock", "coconut milk"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Dominica",
        music: [
            { name: "Asa Bantan - We Making a Mess", url: "https://www.youtube.com/watch?v=w9zVrluaRRE" },
            { name: "Carlyn XP - Liquor Family", url: "https://www.youtube.com/watch?v=M-RndIExl_o" },
            { name: "Mr. Benji & MarzVille - Stush", url: "https://www.youtube.com/watch?v=603HehEevmY", favorite: true },
            { name: "Gramacks - Paka Largez", url: "https://www.youtube.com/watch?v=Ztlwos-N-y0" },
            { name: "Ras Jumbo - Still in Love", url: "https://www.youtube.com/watch?v=IwLTpPJjiXo" },
            { name: "Exile One - La Dominique", url: "https://www.youtube.com/watch?v=KQTw4HQvIVY" }
        ]
    },
    "DO": { // 10m
        name: "Dominican Republic", desc: "The Dominican Republic is country in the Caribbean. Christopher Columbus - the bastard man who didn't discover shit - did a lot of genocide here. Now they're a big hotspot in the Caribbean, sharing their island with Haiti - a country they don't hate now but wowie do not look up Rafael Trujillo if the thought of Dominicans and Haitians being friends is very important to you.",
        population: 10735896, popEstimate: 2018, area: 48671, independence: "1844-02-27", indFrom: "Haiti", demonym: "Dominican", currency: "Peso (RD$)", 
        languages: ["Spanish"], motto: `"God, Homeland, Freedom."`, neighbors: ["HT"], 
        foodURL: "https://en.wikipedia.org/wiki/Dominican_Republic_cuisine",
        food: [
            { name: "Morir Soñando", type: "Beverage", url: "https://www.dominicancooking.com/976-morir-sonando-milk-and-orange-juice.html", date: "2019-12-19", 
              img: "morirsonando.jpg", desc: "Milky, orangey, tasty. But if you're going to follow this recipe, don't add any sugar until after you've tasted it without any first because wowie was that too much sugar.",
              diet: [
                  { type: "Dairy", desc: "Half of the beberage is evaporated milk. You can swap it for a plant milk, though." }
              ],
              ingredients: ["orange juice", "evaporated milk", "sugar", "vanilla extract", "ice"]
            },
            { name: "Kipes", type: "Dumpling", url: "https://www.dominicancooking.com/55-quipes-deep-fried-bulgur-roll.html", date: "2019-12-20", 
              img: "kipe.jpg", desc: "Delicious dumples. The fried bulghur shells provided a unique texture that was definitely appreciated.",
              diet: [
                  { type: "Gluten", desc: "Bulghur wheat is used in the dough." },
                  { type: "Meat", desc: "Ground beef is the main filling, but you can replace it with like chickpeas or something. There's a link to a vegan baked version in the linked recipe." }
              ],
              ingredients: ["bulgur", "bulghur", "ground beef", "bell pepper", "basil", "onion", "tomato sauce", "raisins"]
            },
            { name: "Domplines", type: "Dumpling", url: "https://www.dominicancooking.com/16924-domplines-recipe-dominican-style-dumplings.html", date: "2019-12-20", 
              img: "domplines.jpg", desc: "Basically pasta but the dough has butter in it so it's not technically a pasta dough. The bell pepper and cheddar sauce was very tasty, too. I got a bunch left over to use on macaroni later!",
              diet: [
                  { type: "Dairy", desc: "They got cheese, milk, and butter in the sauce. You can make a different sauce. Butter is also used in the dough." },
                  { type: "Gluten", desc: "Flour is used in the dough." }
              ],
              ingredients: ["cheddar", "bell pepper", "butter", "milk", "flour", "parsley"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_the_Dominican_Republic",
        music: [
            { name: "MULA - Nunca paran", url: "https://www.youtube.com/watch?v=efdV69FLxfg" },
            { name: "Alih Jey ft. Cuñao - Mi Debilidad", url: "https://www.youtube.com/watch?v=7qUytGoNHMY" },
            { name: "Miriam Cruz - La Mala Soy Yo", url: "https://www.youtube.com/watch?v=ltlZHRcDm74" },
            { name: "Rita Indiana y los Misterios - El Juidero", url: "https://www.youtube.com/watch?v=LBVLvIjBFko", favorite: true },
            { name: "Toque Profundo - Mi País", url: "https://www.youtube.com/watch?v=54KP_NEZHks" },
            { name: "Monchy y Alexandra - No Es una Novela", url: "https://www.youtube.com/watch?v=PeMBlLEmVqE" },
            { name: "Giselle Tavera - Time After Time", url: "https://www.youtube.com/watch?v=E5Oh7IkAGWQ" },
            { name: "Las Acevedo - Reloj De Arena", url: "https://www.youtube.com/watch?v=g5ey2_ur1vo" },
            { name: "42-01 - Viper Bites", url: "https://www.youtube.com/watch?v=R7ClrCS7fMo" },
            { name: "Ingco Crew - Ganzta", url: "https://www.youtube.com/watch?v=lga5RFHRSLk" },
            { name: "JLS - La Onda Fatal", url: "https://www.youtube.com/watch?v=kfYppGS2aFk" }
        ]
    },
    "EC": { // 17.1m
        name: "Ecuador", desc: "The Republic of Ecuador is a country in northwest South America. It is the first country to give constitutional rights to nature, which, given how badly some countries are destroying the environment, is probably a pretty good idea.",
        population: 17084358, popEstimate: 2018, area: 283561, independence: "1822-05-24", indFrom: "Spain", demonym: "Ecuadorian", currency: "US Dollar ($)", 
        languages: ["Spanish", "Kichua", "Shuar"], motto: `"God, Homeland, and Freedom."`, neighbors: ["CO", "PE"], 
        foodURL: "https://en.wikipedia.org/wiki/Ecuadorian_cuisine",
        food: [
            { name: "Llapingachos", type: "Vegetable", url: "https://www.thespruceeats.com/ecuadorian-potato-pancakes-llapingachos-3029638", date: "2020-01-06", // https://www.laylita.com/recipes/llapingachos-or-stuffed-potato-patties/ 
              img: "llapingachos.jpg", desc: "It's hard to go wrong with a recipe that's mostly fried potatoes, sauteed onions, and melted cheese. Empires were built on that combination of ingredients.",
              diet: [
                  { type: "Dairy", desc: "These are stuffed with cheese." },
                  { type: "Gluten", desc: "Flour can be added to keep things stuck together, but you can also use a gluten-free starch for binding, or none at all!", optional: true }
              ],
              ingredients: ["potato", "onion", "achiote", "cumin", "mozzarella", "queso fresco"]
            },
            { name: "Salsa de Mani", type: "Sauce", url: "https://www.laylita.com/recipes/salsa-de-mani-or-peanut-sauce/", date: "2020-01-06", 
              img: "salsademani.jpg", desc: "A savory and slightly sweet peanut sauce that goes very well with the cheesy fried llapingachos.",
              diet: [
                  { type: "Peanuts", desc: "Peanut sauce. Come on. Don't make this if you have a peanut allergy. You can't sue me, it won't work." },
                  { type: "Dairy", desc: "Milk is used in the sauce, and butter can be used to cook the onions. You can use coconut milk or something, it'll be fine." },
                  { type: "Egg", desc: "You can put a hard-boiled egg in it if you want to.", optional: true },
                  { type: "Spicy", desc: "You can add a hot pepper if you want to.", optional: true }
              ],
              ingredients: ["peanut butter", "milk", "onion", "cumin", "achiote", "peanut oil", "butter", "cilantro", "pepper", "egg"]
            },
            { name: "Humitas", type: "Dumpling", url: "https://www.laylita.com/recipes/humitas/", date: "2020-01-10", 
              img: "humitas.jpg", desc: "Tastes like corn and cheese, because that's largely what it is. Pretty good vehicle to deliver corn and cheese to your mouth.",
              diet: [
                  { type: "Dairy", desc: "Heavy cream is used in the dough." },
                  { type: "Egg", desc: "Egg is used in the dough." }
              ],
              ingredients: ["corn", "mozzarella", "farmer's cheese", "onion", "coriander", "garlic", "corn meal", "heavy cream", "egg"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Ecuador",
        music: [
            { name: "Las Chicas Dulces - Llueve", url: "https://www.youtube.com/watch?v=85WU4WacSBQ" },
            { name: "Mirella Cesa - Eclipse", url: "https://www.youtube.com/watch?v=zUwz1YJIqas" },
            { name: "Swing Original Monks - Hora Pico", url: "https://www.youtube.com/watch?v=t7fb6Y-NQ_A" },
            { name: "Kiruba - Quisiera", url: "https://www.youtube.com/watch?v=pl0gHKKcKNU" },
            { name: "Norka + Peter Romo - El Juego", url: "https://www.youtube.com/watch?v=JZA1IVYgZ-M" },
            { name: "Leo Rojas - Nature Spirits", url: "https://www.youtube.com/watch?v=I0rFs8IbK2I" },
            { name: "Gaby de K - Psycho", url: "https://www.youtube.com/watch?v=bR3KtVMlitY" },
            { name: "Delfín Quishpe - Todo Hombre es un Minero", url: "https://www.youtube.com/watch?v=sxM4bCxQLsA" },
            { name: "Las Lolas - Vete", url: "https://www.youtube.com/watch?v=9Q1LCR7mygg" },
            { name: "La Máquina Camaleón - El Amuleto", url: "https://www.youtube.com/watch?v=1Aa_CBYKOGM" },
            { name: "RoCola Bacalao - Cita en el Averno", url: "https://www.youtube.com/watch?v=MrFmc0d3SNQ", favorite: true },
            { name: "Tierra Canela - El Amor No Es Asi", url: "https://www.youtube.com/watch?v=Jo-pKG3I3LA" },
            { name: "Guerreros de Cartón - El Otro Lado de las Cosas", url: "https://www.youtube.com/watch?v=YFlcVxsQNik" }
        ]
    },
    "EG": { // 99.5m
        name: "Egypt", desc: "The Arab Republic of Egypt is a country in Northeast Africa. It's obviously well-known for, like, all of the pyramids and heiroglyphs and mythology, and just generally being one of the oldest - if not the oldest - civilizations. If you want to know more, I recommend doing some actual research, or, if you're too lazy for that, check out <a target='_blank' href='https://hauntedbees.itch.io/beegypt' rel='external nofollow noopener noreferrer'>the educational beekeeping video game, Beegypt, that I made in August 2019</a>. It's free, probably at least <em>mostly</em> historically accurate, and has bees!",
        population: 99581200, popEstimate: 2019, area: 1010408, independence: "1922-02-28", indFrom: "Britain", demonym: "Egyptian", currency: "Egyptian Pound (E£)", 
        languages: ["Egyptian Arabic"], motto: `None`, neighbors: ["IL", "LY", "PS", "SD"], 
        foodURL: "https://en.wikipedia.org/wiki/Egyptian_cuisine",
        food: [
            { name: "Hawawshi", type: "Wrap", url: "https://burmaspice.com/recipes/hawawshi-egyptian-stuffed-pita/", date: "2020-01-18", favorite: true,
              img: "hawawshi.jpg", desc: "A hearty and flavorful meal, made more challenging to make and eat due to the fact that that, apparently, Arabic pita has pockets to stuff with meat and Greek pita does not. I wish I had known that before I had bought Greek pita. Even with the challenge of halving pitas manually (and not accidentally cutting myself in the process, hooray!), these were still delicious.",
              diet: [
                  { type: "Meat", desc: "It's full of meat, you can put fake-meat or something else inside." },
                  { type: "Spicy", desc: "It's spicy. Just don't put the spice in if you don't want to." },
                  { type: "Gluten", desc: "Pita bread is usually glutinous." },
                  { type: "Dairy", desc: "Ghee or melted butter can be brushed inside the pita. Or you can just use olive oil.", optional: true }
              ],
              ingredients: ["flour", "oil", "tomato", "bell pepper", "onion", "ground beef", "ground lamb", "allspice", "coriander ground", "aleppo pepper", "thai chili", "paprika"]
            },
            { name: "Om Ali", type: "Dessert", url: "https://cleobuttera.com/middle-eastern/best-ever-om-ali-egyptian-bread-pudding/", date: "2020-01-22", 
              img: "omali.jpg", desc: "This dish marks the first time I've set off a smoke alarm in my life, and if you can see the picture it should be very obvious as to why. Burnt parts aside, it was pretty tasty.",
              diet: [
                  { type: "Dairy", desc: "There's a lot of milk and cream in this." },
                  { type: "Gluten", desc: "It's a bread pudding." },
                  { type: "Nuts", desc: "Hazelnuts and pistachios are optional toppings.", optional: true }
              ],
              ingredients: ["palmiers", "milk", "sugar", "clotted cream", "hazelnuts", "pistachios", "raisins", "coconut flakes"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Egypt",
        music: [
            { name: "Carmen Soliman - Habibi Mosh Habibi", url: "https://www.youtube.com/watch?v=Iw3XFYF7VNI" },
            { name: "Mai Kassab - Shel Da Men Da", url: "https://www.youtube.com/watch?v=pxjZ3iiREe4" },
            { name: "Bushra - Kobra", url: "https://www.youtube.com/watch?v=K8KdyYWzKFc" },
            { name: "Ramy Essam - El Horreya lel Geda'an", url: "https://www.youtube.com/watch?v=RKWmkSUGpk8" },
            { name: "Somaya El Khashab - Wana Wayak", url: "https://www.youtube.com/watch?v=St71HirXIO8" },
            { name: "Black Theama - Enta Fakerny Hendy", url: "https://www.youtube.com/watch?v=0YdPeAAqTxc" },
            { name: "Hesham Abbas - Fenoh", url: "https://www.youtube.com/watch?v=x-4Gwh8ujdg" },
            { name: "Haidy Moussa - So2al", url: "https://www.youtube.com/watch?v=COHPjkmSM_M" },
            { name: "Massive Scar Era - Pray", url: "https://www.youtube.com/watch?v=qu9VAG9ffAQ", favorite: true },
            { name: "Nesma Mahgoub - Albi W Horra Fih", url: "https://www.youtube.com/watch?v=TlF5yQ6Gf48" },
            { name: "Ehab Tawfik - Sahrany", url: "https://www.youtube.com/watch?v=8yzcPiZ2Z2M" },
            { name: "Dina El Wedidi - The Moon", url: "https://www.youtube.com/watch?v=cuqe0bBZRyk" },
            { name: "Ruby - Mesheet Wara Ehsasy", url: "https://www.youtube.com/watch?v=HS6Xv9o2LiY" },
            { name: "Shaza ft. Oka Wi Ortega - Strong Independent Woman", url: "https://www.youtube.com/watch?v=yxdLnZyHBaY" },
            { name: "Cairokee ft. Umm Kulthum - Kan Lak Ma'aya", url: "https://www.youtube.com/watch?v=ixeWiRGspM0" },
            { name: "Gehan Rateb - Ma Tigy Ahebak", url: "https://www.youtube.com/watch?v=9BXDIJUI_ME" },
            { name: "Hamaki - Ya Sattar", url: "https://www.youtube.com/watch?v=FBo8LCQqODQ" },
            { name: "Ramy Sabry - Ta'ali", url: "https://www.youtube.com/watch?v=AGNG7eg-BdI" },
            { name: "Mostafa Hagag - Khatwa", url: "https://www.youtube.com/watch?v=Dn4kubLjiBg" }
        ]
    },
    "SV": { // 6.4m
        name: "El Salvador", desc: "The Republic of El Salvador is the smallest country in Central America. Even after their long and bloody civil war ended, they still have the highest murder rate in the world, with most murders related to gang activity. The country also has a lot of volcanos. Unsurprisingly, a lot of the violence - especially during the civil war - can be blamed on the USA. We can, however, safely assume the volcanos are unrelated to US involvement for the time being.",
        population: 6420746, popEstimate: 2018, area: 21041, independence: "1821-09-15", indFrom: "Spain", demonym: "Salvadoran", currency: "US Dollar ($)", 
        languages: ["Spanish"], motto: `"God, Unity, Freedom"`, neighbors: ["GT", "HN"], 
        foodURL: "https://en.wikipedia.org/wiki/Salvadoran_cuisine",
        food: [
            { name: "Pupusas", type: "Wrap", url: "https://www.allrecipes.com/recipe/257631/basic-cheese-pupusas/", date: "2020-02-02", databee: "pupusa", favorite: true, 
              img: "pupusas.jpg", desc: "Extremely delicious and Very Yum. The crispy corny exterior blends perfectly with the creamy cheesy interior. The fermented cabbage and onion topping - curtido - gave it an excellent tanginess as well.",
              diet: [
                  { type: "Dairy", desc: "Extremely full of cheese. You can put beans and stuff inside instead. There's no wrong way to fill a pupusa." }
              ],
              ingredients: ["cabbage", "apple cider vinegar", "onion", "carrot", "oregano", "red pepper flakes", "masa harina", "ricotta", "mozzarella", "heavy cream", "scallion"]
            },
            { name: "Atol de Elote", type: "Beverage", url: "http://globaltableadventure.com/recipe/creamy-sweet-corn-drink-atol-de-elote/", date: "2020-01-28", databee: "atol",
              img: "atol.jpg", desc: "When I first finished making this, it smelled so much like sweet corn that it worried me. But alas, it tastes very soothing when warm.",
              diet: [
                  { type: "Dairy", desc: "Milk and corn. Milk substitutes probably work fine, too. The main ingredient is the corn, after all." }
              ],
              ingredients: ["corn", "milk", "cinnamon", "sugar"]
            },
            { name: "Nuégados de Yuca", type: "Pastry", url: "https://www.196flavors.com/salvador-nuegados-de-yuca/", date: "2020-01-28", databee: "nuegados", 
              img: "nuegados.jpg", desc: "The panela honey I dipped these in was delicious, but perhaps a bit sweet for these very salty fritters.",
              diet: [
                  { type: "Egg", desc: "Egg is used in the dough." },
                  { type: "Dairy", desc: "Cheese is used in the dough." }
              ],
              ingredients: ["cassava", "eggs", "baking powder", "cheese", "panela sugar", "cinnamon", "cloves"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_El_Salvador",
        music: [
            { name: "Salsa Clave - El Sombrero Azul", url: "https://www.youtube.com/watch?v=Vz-uxAAglPA" },
            { name: "Nadine Masri - Raíces", url: "https://www.youtube.com/watch?v=6MLr-j8OlgA" },
            { name: "Mago Barú - El Show de la Enfermedad", url: "https://www.youtube.com/watch?v=QoWilQwz7No", favorite: true },
            { name: "Vibrass Ska Ensamble - Delorean Back to Ska", url: "https://www.youtube.com/watch?v=TEXpEjUwGjM" },
            { name: "Polly Class - Neptuno", url: "https://www.youtube.com/watch?v=NEy4xHRkonw" },
            { name: "King Flyp - Abandonado", url: "https://www.youtube.com/watch?v=L_EqPFfZUlU" },
            { name: "Arquimedes Reyes - Hazme Olvidarla", url: "https://www.youtube.com/watch?v=Pau5lpU4V9M" },
            { name: "Adhesivo - Sin Fronteras", url: "https://www.youtube.com/watch?v=qub5K0vweL4" }
        ]
    },
    "GQ": { // 1.3m
        name: "Equatorial Guinea", desc: "The Republic of Equatiorial Guinea is a country in western Central Africa. It is the sole Spanish-speaking country in Africa, and as of January 2021, it has had the same president since 1979. ¡Dios mio!",
        population: 1308975, popEstimate: 2018, area: 28050, independence: "1968-10-12", indFrom: "Spain", demonym: "Equatoguinean", currency: "Central African CFA Franc (XAF)", 
        languages: ["Spanish", "French", "Portuguese", "Fang", "Bube", "Combe", "Pidgin English", "Annobonese", "Igbo"], motto: `"Unity, Peace, Justice."`, neighbors: ["CM", "GA"], 
        foodURL: "https://en.wikipedia.org/wiki/Cuisine_of_Equatorial_Guinea",
        food: [
            { name: "Nkate Cake", type: "Dessert", url: "https://www.196flavors.com/equatorial-guinea-nkate-cake-kongodo/", date: "2020-02-12", databee: "kongodo",
              img: "nkate.jpg", desc: "Nothing too exciting to say about this one. Do you like peanuts? Do you like sugar? If so, you'll like this. It's basically just peanut brittle. You like that, you'll like this.",
              diet: [
                  { type: "Peanuts", desc: "This thing is pretty much entirely peanuts." },
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["peanut", "lemon", "water", "sugar"]
            },
            { name: "Ginger Millet Porridge", type: "Other", url: "http://globaltableadventure.com/recipe/ginger-millet-porridge/", date: "2020-02-09", databee: "porridge",
              img: "porij.jpg", desc: "I am generally skeptical of porridges or any foods with the texture of \"not quite liquid, not quite solid,\" but the cinnamonny gingery flavor of this was a pleasant surprise. Good Flavor Combo/10.",
              diet: [
                  { type: "Dairy", desc: "Milk is used to cream things up." }
              ],
              ingredients: ["millet flour", "ginger root", "sugar", "water", "milk"]
            },
            { name: "Ginja Beer", type: "Beverage", url: "https://www.196flavors.com/equatorial-guinea-ginger-beer-ginja-beer/", date: "2020-02-11", databee: "ginja",
              img: "ginja.jpg", desc: "This tastes like ginger and yeast. I was too afraid of the bottle exploding while it was fermenting so I kept opening the bottle to let gas out, so the end result was a bit flat. Still tasted fine, though.",
              diet: [
                  { type: "Vegan", desc: "This beberage is vegan-friendly without any substitutions." }
              ],
              ingredients: ["sugar", "ginger", "yeast", "lemon juice", "water"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Equatorial_Guinea",
        music: [
            { name: "Fistong Boy - Mi Juventud", url: "https://www.youtube.com/watch?v=qvdVwmEmfPI" },
            { name: "Pepito Polo - Crisis", url: "https://www.youtube.com/watch?v=FT7VTmtPvAY" },
            { name: "Hijas del Sol - A ba 'ele (Los Extranjeros)", url: "https://www.youtube.com/watch?v=Hj7DmUoDGoM" },
            { name: "Yolanda Eyama - Nzanga", url: "https://www.youtube.com/watch?v=PdfBJG7HWiU" },
            { name: "Paloma del Sol - Atrévete a Ser Feliz", url: "https://www.youtube.com/watch?v=k3NSQfbd-ho", favorite: true }, 
            { name: "Maele - Saturnino", url: "https://www.youtube.com/watch?v=t2wt89TDVbo" },
            { name: "Barón Ya Búk-Lu - Cándida", url: "https://www.youtube.com/watch?v=shgJIzDFse0" },
            { name: "Kraze Negroze - Barrio Balsamo", url: "https://www.youtube.com/watch?v=rTm2BaG45oI" }
        ]
    },
    "ER": { // 5.8m
        name: "Eritrea", desc: "The State of Eritrea is a country in East Africa. It was one of the few African countries colonized by Italy, and was part of Ethiopia for a while because the Allies (from World War II) were like \"hey yeah we don't know what to do with Eritrea now that the Italians are gone so let's make it part of Ethiopia!\" The Eritreans didn't like that. After a 40-year war that led to hundreds of thousands of deaths (mostly Eritrean civilians), they finally regained their independence in 1991.",
        population: 5750433, popEstimate: 2018, area: 117600, independence: "1991-05-24", indFrom: "Ethiopia", demonym: "Eritrean", currency: "Nafka (Nkf)", 
        languages: ["English", "Arabic", "Tigrinya", "Beja", "Tigre", "Kunama", "Saho", "Bilen", "Nara", "Afar"], motto: `"State of Eritrea"`, neighbors: ["DJ", "ET", "SD"], 
        foodURL: "https://en.wikipedia.org/wiki/Eritrean_cuisine",
        food: [
            { name: "Zigni Spaghetti", type: "Noodle", url: "https://thespiceisland.blogspot.com/2010/04/spaghetti-in-zingi-sauce_05.html", date: "2020-02-12", favorite: true, 
              img: "zigni.jpg", desc: "Mamma mia! That's a spicy pasta! This reminds me a lot of pasta arrabbiata in that they're both spicy tomato sauces, but using berbere seasoning instead of just chili peppers makes it slightly less spicy but significantly more flavorful. I'm never making regular ol' arrabbiata again after this!", databee: "zigni",
              diet: [
                { type: "Gluten", desc: "It's pasta, but you can use gluten-free noodles." },
                { type: "Spicy", desc: "Berbere is spicy!" },
                { type: "Vegan", desc: "This version of the recipe is vegan if you don't top it with parmesan cheese." },
                { type: "Dairy", desc: "Parmesan cheese is technically optional.", optional: true }
              ],
              ingredients: ["onion", "garlic", "tomatoes", "berbere", "sea salt", "cayenne", "lemon", "spaghetti", "tempeh", "tvp", "parmesan cheese"]
            },
            { name: "Tsebhi Sega", type: "Meat", url: "https://www.storyofakitchen.com/meat-recipes/tsebhi-sega-spicy-eritrean-meat-recipe/", date: "2020-02-15", favorite: true,
              img: "sega.jpg", desc: "I've never had ground lamb before this and am unlikely to ever have it again because A: I'm trying to cut back on meat, B: it's not as easy to find in stores here, and C: I'm always paranoid about cooking meats so they don't kill me and the internet said that you gotta cook ground lamb to 160ºF and my thermometers both gave different temperatures and I can't handle that much stress in my life. BUT. This was delicious as hell. I will remember lamb favorably and definitely try using these spice combinations again in other dishes in the future.", databee: "tsebhi",
              diet: [
                { type: "Meat", desc: "It's meat." },
                { type: "Dairy", desc: "Clarified Butter is used to cook the meat." },
                { type: "Spicy", desc: "Berbere is spicy!" }
              ],
              ingredients: ["clarified butter", "onion", "berbere", "tomato puree", "ground lamb", "ginger", "garlic"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Eritrea",
        music: [
            { name: "Rutha Abraham - Tegemirin's Aleka", url: "https://www.youtube.com/watch?v=noIu2VATkys" },
            { name: "Bsrat Aregay - Tizta", url: "https://www.youtube.com/watch?v=kOW7TZ29xD0" },
            { name: "Fitsum Zemichael - Tirsochen", url: "https://www.youtube.com/watch?v=Ymid8zblulI", favorite: true },
            { name: "Tesfaldet Mesfin - Delina", url: "https://www.youtube.com/watch?v=bk6ebwiBTtU" },
            { name: "Abeba Haile - Nay Men Dika", url: "https://www.youtube.com/watch?v=aCPxF9Mct-E" },
            { name: "Jemal Romodan - Ghezana", url: "https://www.youtube.com/watch?v=f1aXABSmvcw" }
        ]
    },
    "EE": { // 1.3m
        name: "Estonia", desc: "The Republic of Estonia is a country in Northern Europe. They're half-Baltic, half-Nordic, all-Estonian. I pitched that to them as a possible country motto since they don't have one and their president politely asked me to leave her house and also asked how I got into her house, but I don't speak Estonian so I just thanked her for her time and left. Also literally half of the country is forest, which is pretty cool.",
        population: 1328360, popEstimate: 2020, area: 45227, independence: "1918-02-24", indFrom: "Russian Empire", demonym: "Estonian", currency: "Euro (€)", 
        languages: ["Estonian"], motto: `None`, neighbors: ["LV", "RU"], 
        foodURL: "https://en.wikipedia.org/wiki/Estonian_cuisine",
        food: [
            { name: "Kana-kodujuustukotletid", type: "Pastry", url: "https://estoniancuisine.com/2019/11/03/cottage-cheese-and-chicken-fritters/", date: "2020-02-19", 
              img: "fritties.jpg", desc: "These are exactly the sum of their parts. Don't get me wrong, these were very tasty, but I probably could have saved some time by just eating handfuls of chicken, cottage cheese, and bread crumbs without bothering to mix any of it together.", databee: "cottage",
              diet: [
                  { type: "Dairy", desc: "Ingredient One: Cottage Cheese." },
                  { type: "Meat", desc: "Ingredient Two: Chicken." },
                  { type: "Gluten", desc: "Bread crumbs are used, but you can use some gluten-free ones." }
              ],
              ingredients: ["chicken", "turkey", "onion", "garlic", "egg", "sunflower seeds", "pumpkin seeds", "flax seeds", "sesame seeds", "bread crumbs"]
            },
            { name: "Kohuke", type: "Dessert", url: "https://www.youtube.com/watch?v=gS153553pkA", date: "2020-02-20", 
              img: "kohuke.jpg", desc: "Tasty. Chocolatey. Proteiny. The healthy candy bar. I am proud of myself for successfully tempering chocolate on my first try, but less proud of myself for failing to form these into actual bars.", databee: "kohuke",
              diet: [
                  { type: "Dairy", desc: "It's mostly cheese." }
              ],
              ingredients: ["cheese curd", "butter", "lemon peel", "vanilla", "sugar", "chocolate"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Estonia",
        music: [
            { name: "Vanilla Ninja - Don't Go Too Fast", url: "https://www.youtube.com/watch?v=dGqWljmM9fk" },
            { name: "Winny Puhh - Nägija", url: "https://www.youtube.com/watch?v=-YDgMEeaOV4" },
            { name: "The Tuberkuloited - Läänemere Aknal", url: "https://www.youtube.com/watch?v=be-wq2LpmuQ" },
            { name: "Liis Lemsalu - Sinuga koos", url: "https://www.youtube.com/watch?v=WdTlonxTMks" },
            { name: "X-Panda - Rise up to Fly", url: "https://www.youtube.com/watch?v=T-MbjGufFJM" },
            { name: "Ewert and The Two Dragons - [In The End] There's Only Love", url: "https://www.youtube.com/watch?v=w5W_JYI-BgM" },
            { name: "Laura Põldvere - Don't Shut Me Out", url: "https://www.youtube.com/watch?v=5dvUGi-VU9w" },
            { name: "Terminaator - 13 Sammu", url: "https://www.youtube.com/watch?v=Q94XnDkEcVs" },
            { name: "Triinu Kivilaan - Fallen", url: "https://www.youtube.com/watch?v=XT7yFGTo8Fo" },
            { name: "Nexus - Tormituuled", url: "https://www.youtube.com/watch?v=T3Sq1Mh8g2I", favorite: true },
            { name: "Caater ft. Hannah - Sinuta", url: "https://www.youtube.com/watch?v=51WZQhnsr-0" },
            { name: "Ollie ft. Uku Suviste - Bonfire", url: "https://www.youtube.com/watch?v=7EDQnEN00PY" },
            { name: "Marya Roxx - Land of Dreams", url: "https://www.youtube.com/watch?v=gk0EMqZXkzk" },
            { name: "Suntribe - Let's Get Loud", url: "https://www.youtube.com/watch?v=q84BGGwdNPY" },
            { name: "J.M.K.E. - Tont seda teab", url: "https://www.youtube.com/watch?v=Dg0IVGCacm4" }
        ]
    },
    "SZ": { // 1.1m
        name: "Eswatini", desc: "The Kingdom of Eswatini is a country in south Africa, and also in South Africa. Because it's almost entirely surrounded by South Africa. That's the joke. Formerly known as Swaziland, now its name in the Swazi langauge - eSwatini - starts with a lowercase letter! Wild! Non-name related facts about this country include \"over a third of its population is 14 years old or younger\" and \"it is a diarchy ruled by both the king and his mom.\"",
        population: 1136281, popEstimate: 2018, area: 17364, independence: "1968-09-06", indFrom: "Britain", demonym: "Swazi", currency: "Lilangeni (SZL)", 
        languages: ["Swazi", "English"], motto: `"We are a fortress."`, neighbors: ["MZ", "ZA"], 
        foodURL: "https://en.wikipedia.org/wiki/Cuisine_of_Eswatini",
        food: [
            { name: "Mealie Bread", type: "Bread", url: "https://www.africanbites.com/mealie-bread-south-african-corn-bread/", date: "2020-02-25", 
              img: "mealiebread.jpg", desc: "Cornbread with BONUS TEXTURE from having actual corn chunks inside. A tasty corny treat.", databee: "mealie",
              diet: [
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Dairy", desc: "Milk, sour cream, and butter are used in the dough." },
                  { type: "Egg", desc: "Egg is used in the dough." }
              ],
              ingredients: ["corn", "flour", "corn meal", "baking powder", "baking soda", "sugar", "sour cream", "milk", "eggs", "basil", "smoked paprika", "butter"]
            },
            { name: "Slaai", type: "Salad", url: "https://www.196flavors.com/eswatini-slaai/", date: "2020-02-25", databee: "slaai",
              img: "slaai.jpg", desc: "Full disclosure, I don't like avocado. But if you soak it in a lemon juice and ginger marinade for a bit and top it with peanuts? It's pretty alright! If you like avocado, give it a try some why not!",
              diet: [
                  { type: "Peanuts", desc: "This salad is topped with peanuts." },
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["lemon juice", "ginger", "avocado", "peanuts", "radishes"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Eswatini",
        music: [
            { name: "Bholoja - Indzawo Yami", url: "https://www.youtube.com/watch?v=sNZ8hBetWbI", favorite: true },
            { name: "Tendaness ft. Zanda Zakuna - Over the Moon", url: "https://www.youtube.com/watch?v=k0XLJ7Lkay8" },
            { name: "S-Tone ft. Simmy - Vuka Africa", url: "https://www.youtube.com/watch?v=PvP7eX1APYw" },
            { name: "Nothando - Tibonakalise", url: "https://www.youtube.com/watch?v=t6NiP6qSGaM" },
            { name: "King Siso - Ibantu Jive", url: "https://www.youtube.com/watch?v=YuMSERgo8t0" }
        ]
    },
    "ET": { // 109.2m
        name: "Ethiopia", desc: "The Federal Democratic Republic of Ethiopia is a country in east Africa, and one of the only two African countries to never be colonized by Europeans. Italy occupied it for a bit during World War II, but the distinction between \"occupation\" and \"colonization\" is probably more complicated than I can convey here, so just look it up with a Search Engine™ like I did.",
        population: 109224414, popEstimate: 2018, area: 1104300, independence: "Unified since the 12th Century", indFrom: "X", demonym: "Ethiopian", currency: "Lilangeni (SZL)", 
        languages: ["Amharic"], motto: `None`, neighbors: ["DJ", "ER", "KE", "SO", "SO-SM", "SS", "SD"], 
        foodURL: "https://en.wikipedia.org/wiki/Ethiopian_cuisine",
        food: [
            { name: "Kicha FitFit", type: "Bread", url: "http://www.tefforama.com/recipes/traditional/kicha-fitfit/", date: "2020-03-08", databee: "kitcha",
              img: "kitcha.jpg", desc: "Kind of like shredded up pancakes, but instead of maple syrup it's spicy syrup. Too hot for me, but still good.",
              diet: [
                  { type: "Dairy", desc: "It's full of butter and topped with yoghurt." },
                  { type: "Spicy", desc: "Berbere is spicy!" }
              ],
              ingredients: ["teff flour", "berbere", "niter kibbeh", "greek yoghurt"]
            },
            { name: "Niter Kibbeh", type: "Sauce", url: "https://www.whats4eats.com/sauces/niter-kibbeh-recipe", date: "2020-02-15", 
              img: "niterkibbeh.jpg", desc: "It's like ghee with bonus flavor. I am a fan. I'm not sure what I'm gonna use the rest for, but I'm glad I have it in my fridge.", databee: "niterkibbeh",
              diet: [
                  { type: "Dairy", desc: "It's literally butter." },
                  { type: "Spicy", desc: "Berbere is spicy!" }
              ],
              ingredients: ["butter", "onion", "garlic", "ginger", "cardamom", "cinnamon", "cloves", "fennugreek", "turmeric"]
            },
            { name: "Doro Wat", type: "Soup", url: "https://www.daringgourmet.com/doro-wat-spicy-ethiopian-chicken-stew/", date: "2020-03-06", 
              img: "dorowat.jpg", desc: "It's a nice spicy chicken stew.", databee: "wat",
              diet: [
                  { type: "Meat", desc: "It's chicken stew. You can substitute with a different broth and omit the chicken, though." },
                  { type: "Dairy", desc: "Butter is used heavily." },
                  { type: "Egg", desc: "Hard-boiled eggs are added to the stew." },
                  { type: "Honey", desc: "Honey Wine is used to cook everything." },
                  { type: "Alcohol", desc: "Honey Wine is used to cook everything." },
                  { type: "Spicy", desc: "Berbere is spicy!" }
              ],
              ingredients: ["chicken", "lemon juice", "niter kibbeh", "butter", "olive oil", "onion", "garlic", "ginger", "berbere", "salt", "honey wine", "white wine", "honey", "chicken stock", "egg"]
            },
            { name: "Injera", type: "Bread", url: "https://www.daringgourmet.com/authentic-injera-ethiopian-flatbread/", date: "2020-03-06", 
              img: "injera.jpg", desc: "Very hard to make, but the \"close enough, probably\" version I made was still very good! The slightly sour flavor went well with the Doro Wat.",
              diet: [
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["teff flour"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Ethiopia",
        music: [
            { name: "Jano Band - Darigne", url: "https://www.youtube.com/watch?v=hyHALnmGr5A", favorite: true },
            { name: "Selamawit Yohannes - Senay", url: "https://www.youtube.com/watch?v=H4uWOZL4IwQ" },
            { name: "Dag Daniel - Ye Balewa Konjo", url: "https://www.youtube.com/watch?v=-WrcRgxnQnQ" },
            { name: "Abel Mulugeta - Gebach alu Gedam", url: "https://www.youtube.com/watch?v=HHH8qzne_AA" },
            { name: "Mahlet G - Emhilelu", url: "https://www.youtube.com/watch?v=qAcLQFTeMUk" },
            { name: "Netsanet Melesse - Atidewulilign", url: "https://www.youtube.com/watch?v=fiqZJBuvAB4" },
            { name: "Betty G - Geriye", url: "https://www.youtube.com/watch?v=DKdB7H9y6ag" },
            { name: "Chelina - Bezema", url: "https://www.youtube.com/watch?v=-4IGIe5K1Qg" },
            { name: "Kuku Sebsibe - Indet Neh", url: "https://www.youtube.com/watch?v=Npm45vg39LU" },
            { name: "Gossaye ft. Alemayehu - Endete Argoshale", url: "https://www.youtube.com/watch?v=5W5Z9sFPO-E" },
            { name: "Rophnan - Get to Work", url: "https://www.youtube.com/watch?v=31LYvrp6GBg" },
            { name: "Roha Band - Kiya Kiya", url: "https://www.youtube.com/watch?v=lBFM8s6GrAI" },
            { name: "Ayalew Mesfin - Hasabe (My Worries)", url: "https://www.youtube.com/watch?v=ONW2ydjwjQo" },
            { name: "Debo Band - Ele", url: "https://www.youtube.com/watch?v=sl8m_VBbBis" },
            { name: "Abeba Desalegn - Lemin Nafekegn", url: "https://www.youtube.com/watch?v=a0g8CS3O-lA" },
            { name: "Tamrat Desta - Alhedm", url: "https://www.youtube.com/watch?v=eeIc5Vm-WuI" }, // ****
            { name: "Dawit Mellesse - Konjo Bager", url: "https://www.youtube.com/watch?v=wYrtuyEbitc" },
            { name: "Teddy Afro - Amen", url: "https://www.youtube.com/watch?v=sAbFkY0fijY" },
            { name: "Mulatu Astatke & The Heliocentrics - Addis Black Widow", url: "https://www.youtube.com/watch?v=rJtmjk2eJPc" }
        ]
    },
    "FJ": { // 0.9m
        name: "Fiji", desc: "The Republic of Fiji is an island country in the Pacific Ocean. They've got a lot of Indians there alongside the native Fijians, thanks to Britain being Britain back in the day. Two big islands hold most of the country's population, but the country has over 300 islands in all.",
        population: 926276, popEstimate: 2018, area: 18274, independence: "1970-10-10", indFrom: "Britain", demonym: "Fijian", currency: "Fijian dollar (FJD)", 
        languages: ["iTaukei", "English", "Fiji Hindi", "Rotuman"], motto: `"Fear God and honour the Queen."`, neighbors: ["None"], 
        foodURL: "https://en.wikipedia.org/wiki/Fijian_cuisine",
        food: [
            { name: "Corned Mutton Curry", type: "Curry", url: "https://feedingthesonis.wordpress.com/2013/12/03/corned-mutton-curry-gravy-version/", date: "2020-03-14", databee: "mutton",
              img: "muttoncurry.jpg", desc: "The flavor of the corned mutton is strong, but still lets the flavors of the spices shine through. Good stuff; great stuff if you serve it with coconut rice.",
              diet: [
                  { type: "Meat", desc: "The mutton isn't actually made of corn." },
                  { type: "Spicy", desc: "Might be a bit hot depending on your spice tolerance. Adjust the spicy ingredients as needed." }
              ],
              ingredients: ["potatoes", "tin mutton", "onion", "curry leaves", "garlic", "ginger", "turmeric", "garam masala", "chili powder", "mustard seed", "cumin", "fennugreek seed"]
            },
            { name: "Kava", type: "Beverage", url: "https://travelfoodatlas.com/authentic-pacific-kava-drink-recipe#fijian-kava-drink-recipe", date: "2020-03-14", databee: "kava", 
              img: "kava.jpg", desc: "Kava is a big deal kind of drink in Fiji. It also makes your tongue numb, tastes kind of like dirt, and supposedly relaxes you. I can confirm the tongue numbing and dirt flavor, but I did not feel more relaxed from drinking it.",
              diet: [
                  { type: "Vegan", desc: "This beverage is vegan-friendly without any substitutions." },
                  { type: "Warning", desc: "This beverage has side effects, and may be illegal in your country." }
              ],
              ingredients: ["kava", "water"]
            },
            { name: "Cassava Cake", type: "Dessert", url: "https://www.youtube.com/watch?v=fj48hFgr69o", date: "2020-03-18", databee: "cassava", // http://www.flashfictionkitchen.com/fijian-cassava-cake-2/
              img: "cassavacake.jpg", desc: "Milky cakey yummy good.",
              diet: [
                  { type: "Dairy", desc: "Condensed milk is used in the mixture and as a topping." }
              ],
              ingredients: ["cassava", "coconut flakes", "sugar", "condensed milk"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Fiji",
        music: [
            { name: "Lia Osborne - Era Bini Tu", url: "https://www.youtube.com/watch?v=4y8OuFoMggw" },
            { name: "Rosiloa - Sa Vura", url: "https://www.youtube.com/watch?v=ze0XmxgMTaU", favorite: true },
            { name: "Rewasese Entertainment Group - Mana Meu Talanoataka", url: "https://www.youtube.com/watch?v=Z1XYZebP_Go" },
            { name: "Daniel Rae Costello - Be Good To Me", url: "https://www.youtube.com/watch?v=EnpWdG6tGfs" },
            { name: "Paulini - Who Will I Run To?", url: "https://www.youtube.com/watch?v=skW3qGj-I2Y" },
            { name: "Ofa Ali - Waikiki Tamure", url: "https://www.youtube.com/watch?v=3zUXSN4TPio" },
            { name: "Kula Kei Uluivuya - Tagimoucia", url: "https://www.youtube.com/watch?v=qobv_mKyivo" },
            { name: "Simi Rova - Lomalomani Au Lei Bulou", url: "https://www.youtube.com/watch?v=iRk_SLDar_Y" }
        ]
    },
    "FI": { // 5.5m
        name: "Finland", desc: "The Republic of Finland is a country in Northern Europe. Former prime ministers from both France and Italy have called Finnish cuisine some of the worst in the world. A Finnish pizza place, in response to this, won an international pizza contest with their very Finnish smoked reindeer pizza, showing very clearly that spite is a powerful motivator, and if you get the opportunity to symbolically tell a world leader to go fuck themselves, you should take it.",
        population: 5521158, popEstimate: 2019, area: 338424, independence: "1917-12-06", indFrom: "Russia", demonym: "Finnish", currency: "Euro (€)", 
        languages: ["Finnish", "Swedish", "Sámi"], motto: `None`, neighbors: ["NO", "RU", "SE"], 
        foodURL: "https://en.wikipedia.org/wiki/Finnish_cuisine",
        food: [
            { name: "Karelian Pasties", type: "Pastry", url: "https://www.food.com/recipe/karelian-pasties-karjalan-piirakat-136480", date: "2020-03-21", databee: "pasties",
              img: "karelian.jpg", desc: "If you want to experience this dish without all the difficulty of preparing it, just make some rice pudding and dip some rye bread inty the pudding.",
              diet: [
                  { type: "Gluten", desc: "Rye flour is used in the dough." },
                  { type: "Dairy", desc: "Dairy is used in the filling and spread." },
                  { type: "Egg", desc: "Egg is used in the filling and spread." }
              ],
              ingredients: ["rye flour", "short-grain rice", "milk", "egg", "potatoes", "cream", "butter"]
            },
            { name: "Imelletty Perunalaatikko", type: "Casserole", url: "https://www.food.com/recipe/sweetened-potato-casserole-imelletty-perunalaatikko-196989", date: "2020-03-21", 
              img: "sweetenedpotato.jpg", desc: "You get some potatoes and then you mash them and then you mix some flour in and leave it in a barely warm oven for like 3 hours and then you have potatoes that have become sweet through some kind of science and it's kinda tasty, neat stuff.", databee: "casserole",
              diet: [
                { type: "Gluten", desc: "Flour and potato are the two important ingredients." },
                { type: "Dairy", desc: "Butter and milk are also used." }
              ],
              ingredients: ["potato", "flour", "milk", "butter", "nutmeg", "treacle"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Finland",
        music: [
            { name: "Loituma - Ievan Polkka", url: "https://www.youtube.com/watch?v=7yh9i0PAjck" },
            { name: "The 69 Eyes - Never Say Die", url: "https://www.youtube.com/watch?v=QbqfYJEBU_w" },
            { name: "Chisu - Baden-Baden", url: "https://www.youtube.com/watch?v=Yu19IWuIArY" },
            { name: "Alma - Karma", url: "https://www.youtube.com/watch?v=ueGqMCc07uM" },
            { name: "Roope Salminen & Koirat ft. Anna Abreu - Voodoo", url: "https://www.youtube.com/watch?v=CPQ_BDLCvik" },
            { name: "Elonkerjuu - Viistäköön siipeni maata", url: "https://www.youtube.com/watch?v=YXGq_7mk-hM" },
            { name: "WÖYH! - Lokki", url: "https://www.youtube.com/watch?v=C6Io7sJRDb8" },
            { name: "Stalingrad Cowgirls - You Won't Get It", url: "https://www.youtube.com/watch?v=Ba-awYSR7Nw" },
            { name: "Pertti Kurikan Nimipäivät - Aina mun pitää", url: "https://www.youtube.com/watch?v=zEiM6l5meQI" },
            { name: "Elokuu - Tänään lähtee", url: "https://www.youtube.com/watch?v=XvI6kXomdTA" },
            { name: "Haltya - Alas Taikavirtaa", url: "https://www.youtube.com/watch?v=78y8D6aR36E" },
            { name: "Don Johnson Big Band - One MC, One Delay", url: "https://www.youtube.com/watch?v=_zkjngo5Lww", favorite: true },
            { name: "Sini Sabotage ft. Kube - Mun heinii", url: "https://www.youtube.com/watch?v=VMwsAeVgd-I" },
            { name: "Flesh Roxon - Out of Control", url: "https://www.youtube.com/watch?v=UOU1ZlLwyRg" },
            { name: "Jari Sillanpää - Liekeissä", url: "https://www.youtube.com/watch?v=vkctM3BG1Cg" },
            { name: "Entwine - End of Silence", url: "https://www.youtube.com/watch?v=YZXq2RS_awE" },
            { name: "The Valkyrians - Astro Zombies", url: "https://www.youtube.com/watch?v=3Gguo3WXiXw" },
            { name: "Aivolävistys - Toinen osapuoli", url: "https://www.youtube.com/watch?v=8-VNkcmKAgE" },
            { name: "70-luvun Vihannekset - Maanalainen armeija", url: "https://www.youtube.com/watch?v=1u2E1RAG8m0" }
        ]
    },
    "FR": { // 67.8m
        name: "France", desc: "The French Republic is a country in Western Europe. Here in the United States, people like to stereotype the French as weak and effeminate because they're \"cheese-eating surrender monkeys,\" but the French people are REALLY GOOD at protesting, striking, and rioting when they think they're being screwed over. While many aspects of France's culture are worthy of praise (tbh mostly just their food ayyy lmao it's good stuff), that is certainly the one I most wish the people of other countries would try emulating.",
        population: 67834000, popEstimate: 2019, area: 640679, independence: "Unified since the 13th Century", indFrom: "X", demonym: "French", currency: "Euro (€)", 
        languages: ["French"], motto: `"Liberty, equality, fraternity."`, neighbors: ["AD", "BE", "DE", "IT", "LU", "MC", "ES", "CH", "BR", "SR", "NL"], 
        foodURL: "https://en.wikipedia.org/wiki/French_cuisine",
        food: [
            { name: "French Onion Soup", type: "Soup", url: "https://www.youtube.com/watch?v=1qRir364aNk", date: "2020-03-28", 
              img: "frunyun.jpg", desc: "Unsurprisingly, a soup that is mostly caramelized onions and then topped with cheese is extremely delicious. Stop reading this and go caramelize some onions.", databee: "onion", favorite: true,
              diet: [
                  { type: "Alcohol", desc: "Lotta wine in this stuff." },
                  { type: "Gluten", desc: "Flour is used to thicken things. Baguette/croutons are used." },
                  { type: "Dairy", desc: "Butter is used to caramelize some onions. It's topped with chesse." },
                  { type: "Meat", desc: "It uses beef stock, but you can use a veggie stock.", optional: true }
              ],
              ingredients: ["onion", "butter", "sherry", "beef broth", "thyme", "bay leaves", "baguette", "garlic", "gruyere cheese"]
            },
            { name: "Boeuf Bourguignon", type: "Soup", url: "https://www.food.com/recipe/boeuf-bourguignon-a-la-julia-child-148007", date: "2020-03-29", 
              img: "boigyoingyon.jpg", desc: "I sustained some mild first-degree burns on my left hand by accidentally grabbing the handle of a pot that had recently been removed from a 400ºF oven while making this dish, and I still think it was worth it.", databee: "boeuf", favorite: true,
              diet: [
                  { type: "Meat", desc: "It's beefy as hell." },
                  { type: "Alcohol", desc: "Lotta wine in this stuff." },
                  { type: "Gluten", desc: "Flour is used to thicken things." },
                  { type: "Dairy", desc: "Butter is used to fry some onions." }
              ],
              ingredients: ["bacon", "beef", "carrot", "onion", "flour", "red wine", "beef stock", "tomato paste", "garlic", "thyme", "bay leaf", "pearl onions", "butter", "parsley", "mushroom"]
            },
            { name: "Croissants and Pain au chocolat", type: "Pastry", url: "https://www.youtube.com/watch?v=jXqcHAUzrI4", date: "2020-03-31", 
              img: "krosawhn.jpg", desc: "Mistakes were definitely made making this recipe as too much yeast was used, and eggs were accidentally added to the dough. Even mistake croissants are delicious, though. So delicious.", databee: "crossahwn", favorite: true,
              diet: [
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Dairy", desc: "Butter is used in the dough." },
                  { type: "Egg", desc: "An egg wash is used to help with browning." }
              ],
              ingredients: ["flour", "butter", "egg", "yeast", "cream"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_France",
        music: [
            { name: "-M- - Belleville Rendez-vous", url: "https://www.youtube.com/watch?v=E3Q7JO6BDa0" },
            { name: "Martin Circus - Je M'éclate Au Sénégal", url: "https://www.youtube.com/watch?v=0ykhV35BJgo" },
            { name: "Exsonvaldes & Helena Miquel - Cyclop", url: "https://www.youtube.com/watch?v=9SuGoxVGb_8" },
            { name: "Desireless - Voyage Voyage", url: "https://www.youtube.com/watch?v=6PDmZnG8KsM" },
            { name: "Lucrate Milk - No Kods", url: "https://www.youtube.com/watch?v=sfVxEg_IJTg" },
            { name: "Anarchic System - Pop Corn", url: "https://www.youtube.com/watch?v=10s7MRYKYU4" },
            { name: "L.E.J - La dalle", url: "https://www.youtube.com/watch?v=RaK8HLqMPA8", favorite: true },
            { name: "Birds In Row - Remember Us Better Than We Are", url: "https://www.youtube.com/watch?v=NI1KJBTa-Cg" },
            { name: "Ottawan - D.I.S.C.O.", url: "https://www.youtube.com/watch?v=mJpymZpk-t8" },
            { name: "Angellore - Blood for Lavinia", url: "https://www.youtube.com/watch?v=Uqaq43WpKSI" },
            { name: "Au Bonheur Des Dames - Oh Les Filles!", url: "https://www.youtube.com/watch?v=5Ie0M27aCl8" },
            { name: "Emji - Vegas", url: "https://www.youtube.com/watch?v=W2Li35LFYVU" }, 
            { name: "Edith Nylon - Edith Nylon", url: "https://www.youtube.com/watch?v=g49MyBDTPLw" },
            { name: "Merzhin - Peur de rien", url: "https://www.youtube.com/watch?v=rz3QREPx6Qc" },
            { name: "Les Caméléons - Juke box", url: "https://www.youtube.com/watch?v=IvtD8SEr_5E" },
            { name: "Les Wriggles - Poupine et Thierry", url: "https://www.youtube.com/watch?v=nPJ9oUQM6V0" },
            { name: "Karelia - Lift Me Up", url: "https://www.youtube.com/watch?v=TCMXXEXcAms" },
            { name: "La Ruda Salska - Trianon", url: "https://www.youtube.com/watch?v=TS87btME3Ac" },
            { name: "Sliimy - Paint Your Face", url: "https://www.youtube.com/watch?v=ZH7dFPjno3w" },
            { name: "Pin-Up Went Down - Vaginaal Nathrakh", url: "https://www.youtube.com/watch?v=DyBFZFUaP6U" },
            { name: "Sexy Sushi - Cheval", url: "https://www.youtube.com/watch?v=8ijFoc2ldv4" },
            { name: "Whyzdom - Follow Your Heart", url: "https://www.youtube.com/watch?v=YWsc36Vo5Fo" },
            { name: "Les Barking Dogs - Cigarettes and Whiskey", url: "https://www.youtube.com/watch?v=NyaB9_io7sE" },
            { name: "Les Sages Poètes de la Rue ft. IAM - 16 traits, 16 lignes", url: "https://www.youtube.com/watch?v=BKSMM4IMCgc" }
        ]
    },
    "GA": { // 2.1m
        name: "Gabon", desc: "The Gabonese Republic is a country in west Central Africa. They've got a lot of gorillas, and they have hippos and elephants that chill on the beach. As with many countries, they found some oil and now that makes up 80% of their exports.",
        population: 2119275, popEstimate: 2018, area: 267667, independence: "1960-08-17", indFrom: "France", demonym: "Gabonese", currency: "Central African CFA Franc (XAF)", 
        languages: ["French"], motto: `"Union, Work, Justice."`, neighbors: ["CO", "CG", "GQ"], 
        foodURL: "https://en.wikipedia.org/wiki/Gabonese_cuisine",
        food: [
            { name: "Boeuf aux Mangues Sauvages", type: "Meat", url: "https://web.archive.org/web/20190302231302/http://www.congocookbook.com/meat_recipes/beef_in_wild_mango_kernel_sauce.html", date: "2020-05-17", 
              img: "ogbono.jpg", desc: "Seeing how quickly the ogbono (wild mango) seeds turned some tomatoey meaty water into a sauce was wild. A thousand thanks to <a href='https://www.afrofood.com/' target='_blank' rel='external nofollow noopener noreferrer'>Afrofood</a> for the ogbono seed and dried shrimp, and no this is not a sponsored post, I just want to ensure that - in the off chance you see this and go \"oh yeah I want to make that recipe, let me buy some ingredience!\" - you get them from a small business instead of that one big garbage website.", databee: "boeuf",
              diet: [
                  { type: "Meat", desc: "The main ingredient is beef, but you can use tofu or some other meat substitute." },
                  { type: "Fish", desc: "Dried shrimp is an ingredient." },
                  { type: "Spicy", desc: "Cayenne is used, but you can adjust to taste.", optional: true },
                  { type: "Warning", desc: "This recipe calls for palm oil. Please make sure you are buying sustainable palm oil if you make this recipe, or just use another kind of oil.", optional: true }
              ],
              ingredients: ["beef", "wild mango kernels", "ogbono", "apon", "palm oil", "tomatoes", "onion", "dried shrimp", "red pepper", "cayenne pepper"]
            },
            { name: "Cucumber Salad", type: "Salad", url: "https://edibleun.wordpress.com/2016/05/23/trip-28-gabon-africa-gabonese-mustard-lemon-chicken-cucumber-salad-baked-bananas-gabon-french-bread/", date: "2020-05-17", 
              img: "cukesalad.jpg", desc: "Lots of crunch, with a good amount of munch. The cumin elevates the dressing into full-on yum territory.", databee: "cuke",
              diet: [
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["sweet onion", "tomatoes", "cucumber", "parsley", "mint", "olive oil", "lemon", "cumin"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Gabon",
        music: [
            { name: "Pamela Badjogo - Respectez-nous", url: "https://www.youtube.com/watch?v=t3vkC16TNLs", favorite: true },
            { name: "Notre Dame De La Salette - Lekumu Tata", url: "https://www.youtube.com/watch?v=pY5tEz-dNz4" },
            { name: "Zyon Stylei - Piccolo", url: "https://www.youtube.com/watch?v=_zZuZ4TGAJQ" },
            { name: "Nicole Amogho - Ton alliance", url: "https://www.youtube.com/watch?v=22w_HH4o7Ak" },
            { name: "DBS - Mayi Wa", url: "https://www.youtube.com/watch?v=kSe2Mec7nBU" },
            { name: "Lord Ekomy Ndong ☥ ft. Ndzo Obiang Ndong - Qui Cherche Trouve", url: "https://www.youtube.com/watch?v=cbmQ1CQ8Pn0" },
            { name: "La Fuente - Pas Tchi Tchi Avec Belle Maman", url: "https://www.youtube.com/watch?v=7rgeeUBkZk8" },
            { name: "Yves Delbrah - Mamayé", url: "https://www.youtube.com/watch?v=gTK5xXvfbjU" },
            { name: "Patience Dabany - Gaella", url: "https://www.youtube.com/watch?v=Llszdpj4cjU" },
            { name: "Annie-Flore Batchiellilys - Diboty", url: "https://www.youtube.com/watch?v=20JUbt0_oGg" }
        ]
    },
    "GM": { // 2.1m
        realFirstLetter: "G",
        name: "The Gambia", desc: "The Republic of The Gambia is a country in Western Africa, and the tiniest country on the African mainland. It mostly just wraps around the Gambia River due to, y'know, colonialism.",
        population: 2051363, popEstimate: 2017, area: 10689, independence: "1965-02-18", indFrom: "Britain", demonym: "Gambian", currency: "Dalasi (GMD)", 
        languages: ["English", "Mandinka", "Fula", "Wolof", "Serer", "Jola"], motto: `"Progress, Peace, Prosperity."`, neighbors: ["SN"], 
        foodURL: "https://en.wikipedia.org/wiki/Gambian_cuisine",
        food: [
            { name: "Dibi", type: "Meat", url: "https://www.youtube.com/watch?v=bJPwzdTf4a4", date: "2020-08-24", databee: "dibi",
              img: "dibi.jpg", desc: "I've never had goat meat before and, given how much effort it took to find it (admittedly, \"checking the farmer's market\" isn't exactly a LOT of effort), it's not likely I'll eat it again, but all of the flavors went very well together in ways I've never experienced before. It may not be one of the best foods I've eaten on this journey, but in the past I've had some foods that made me say \"well, this is new\" in a bad way. This was new in a very good way.",
              diet: [
                  { type: "Spicy", desc: "This recipe calls for a bit of cayenne pepper." },
                  { type: "Meat", desc: "This is basically just grilled meat and onions. If you have some preferred meat substitute for grilling, go for that." }
              ],
              ingredients: ["beef", "goat", "onions", "cayenne pepper", "liquid smoke", "meat tenderizer", "jumbo/maggi cubes"]
            },
            { name: "Tapalapa", type: "Bread", url: "https://www.196flavors.com/gambia-tapalapa/", date: "2020-08-24", databee: "tapalapa",
              img: "tapalapa.jpg", desc: "Four different types of flour in one dough leads to a very unique flavor. Similar to cornbread, it is delicious, even if I had to settle for mostly-dead yeast since it's still a pandemic and stores sometimes don't have much regular alive yeast right now.",
              diet: [
                  { type: "Gluten", desc: "It's bread." },
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["flour", "millet flour", "corn flour", "cowpea flour", "active dry yeast"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_the_Gambia",
        music: [
            { name: "Saint - Holly", url: "https://www.youtube.com/watch?v=mp93GyfTBWQ" },
            { name: "Sona Jobarteh - Jarabi", url: "https://www.youtube.com/watch?v=M6zGSxZtFX4", favorite: true },
            { name: "Musa M'Boob & XamXam - Tumaranke", url: "https://www.youtube.com/watch?v=IY7a9Q3tGOc" },
            { name: "The Soto Koto Band - Kelefa (Instrumental)", url: "https://www.youtube.com/watch?v=fAFp_dN6ZXw" },
            { name: "Laba Sosseh - Diamoule Mawo", url: "https://www.youtube.com/watch?v=eO-W6qS99EU" }
        ]
    },
    "GE": { // 3.7m
        name: "Georgia", desc: "Georgia is a country in the Caucasus region right in between Europe and Asia. Are they European? Are they Asian? Are \"Europe\" and \"Asia\" just arbitrary lines around a single landmass? Yes to All. Also they like cheeses and churches.",
        population: 3723464, popEstimate: 2019, area: 69700, independence: "1991-12-25", indFrom: "Soviet Union", demonym: "Georgian", currency: "Lari (₾)", 
        languages: ["Georgian", "Abkhazian"], motto: `"Strength is in Unity."`, neighbors: ["GE-AB", "AM", "AZ", "RU", "TR"], 
        foodURL: "https://en.wikipedia.org/wiki/Georgian_cuisine",
        food: [
            { name: "Adjarian Khachapuri", type: "Pastry", url: "https://www.youtube.com/watch?v=8ROCm1ZD92Y", date: "2020-08-30", databee: "khachapuri", favorite: true,
              img: "khachapuri.jpg", desc: "It is a boat-shaped bread full of cheese, topped with an egg and butter. I don't know what else you'd want or expect from me. It's delicious and filling and unhealthy and delicious. Make some now.",
              diet: [
                  { type: "Gluten", desc: "It's a bread boat full of cheese." },
                  { type: "Dairy", desc: "It's a bread boat full of cheese." },
                  { type: "Egg", desc: "The boat has an egg on top." }
              ],
              ingredients: ["flour", "yeast", "salt", "sugar", "milk", "oil", "sulguni", "feta cheese", "imereti", "imereli", "mozzarella", "butter", "egg"]
            },
            { name: "Badrijani Nigvzit", type: "Vegetable", url: "https://georgiantable.com/2014/06/08/georgian-eggplant-badrijani-nigvzit/", date: "2020-08-30", databee: "badrijani",
              img: "badrijani.jpg", desc: "This shit is nuts. And by that I mean it's fried eggplant full of walnuts. And garlic. And then it's topped with pomegranates. A strange but relatively tasty combination.",
              diet: [
                  { type: "Nuts", desc: "These bad boys are full of walnuts." },
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." },
                  { type: "Spicy", desc: "There's a wee bit of red peppies in here. Probably not enough to bother you, but if you've got a super-low spice tolerance, maybe omit that part.", optional: true }
              ],
              ingredients: ["Chinese eggplant", "garlic", "walnuts", "white wine vinegar", "tarragon vinegar", "ground coriander", "fennugreek", "blue fennugreek", "utskho suneli", "cayenne pepper", "pomegranate seeds", "cilantro", "onions"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Georgia_(country)",
        music: [
            { name: "Lela Tsurtsumia - Gamis Sichume Gafante", url: "https://www.youtube.com/watch?v=UsX-2nzsymY" },
            { name: "Diana Gurtskaya - Girlfriends", url: "https://www.youtube.com/watch?v=cRnnbMlveLQ" },
            { name: "Trio Mandili - Erti nakhvit", url: "https://www.youtube.com/watch?v=zMTwB5iI3uE" },
            { name: "Tamara Gachechiladze - Keep The Faith", url: "https://www.youtube.com/watch?v=fMjoNAZ1DpU" },
            { name: "Bedford Falls - Post Soviet Post Mortem", url: "https://www.youtube.com/watch?v=tl6T2nwRers" },
            { name: "Nino Chkheidze - Dardimandi Kharo", url: "https://www.youtube.com/watch?v=5SukItSd70s", favorite: true },
            { name: "Tamta - Arhes Kalokeriou", url: "https://www.youtube.com/watch?v=58I3-EvFW10" },
            { name: "Killages - Pleased", url: "https://www.youtube.com/watch?v=99si3euMJ6U" },
            { name: "Natia Todua - I Want Love", url: "https://www.youtube.com/watch?v=AN_1z4S9LZc" },
            { name: "Anushka Chkheidze - Street Dog", url: "https://www.youtube.com/watch?v=KG5w7Gzw87A" },
            { name: "LOUDspeakers - Flying Girl", url: "https://www.youtube.com/watch?v=VtwxtS9PcDo" }
        ]
    },
    "DE": { // 83.1m
        name: "Germany", desc: "The Federal Republic of Germany is a country near the middle of Europe. It's the largest economy in Europe and one of the largest in the world. After the whole, you know, <em>thing</em>, they rapidly rebuilt to become a very powerful (in a less genocidal way) country with an excellent standard of living for its citizens. They also really like bread, which I understand completely, and beer, which I do not.",
        population: 83166711, popEstimate: 2019, area: 357022, independence: "Unified since 1871", indFrom: "X", demonym: "German", currency: "Euro (€)", 
        languages: ["German"], motto: `None.`, neighbors: ["AT", "BE", "CZ", "DK", "FR", "LU", "NL", "PL", "CH"], 
        foodURL: "https://en.wikipedia.org/wiki/German_cuisine",
        food: [
            { name: "Bavarian Pretzels", type: "Pastry", url: "https://www.epicurious.com/recipes/food/views/traditional-soft-pretzels", date: "2020-10-11", favorite: true, databee: "pretzel",
              img: "pretzel.jpg", desc: "Certainly the most dangerous recipe I've made so far, and absolutely one of the most delicious. Folks, if a German person is ever smug to you about how much better ~real pretzels from Germany~ are, let them be smug. They're right. These are delicious.",
              diet: [
                { type: "Warning", desc: "This recipe uses lye, which can cause chemical burns and permanent injuries if not handled carefully. It is recommended to use a baking soda solution instead if you're worried about that." },
                { type: "Alcohol", desc: "Beer is used in the dough." },
                { type: "Gluten", desc: "Flour is used in the dough." },
                { type: "Dairy", desc: "Butter is used in the dough." }
              ],
              ingredients: ["yeast", "bread flour", "barley malt syrup", "beer", "butter", "sea salt", "lye"]
            },
            { name: "Kartoffelklöße", type: "Dumpling", url: "https://germanculture.com.ua/main-dishes/kartoffelklose-german-potato-dumplings/", date: "2020-09-19", databee: "kartoffelklosse",
              img: "kartoffelklosse.jpg", desc: "Fine on their own, but better with gravy on top and bratwurst on the side. The bratwurst were, of course, acquired from the Farmer's Market because I am not the owner of a sausage maker.", 
              diet: [
                { type: "Egg", desc: "Egg is used in the dough." },
                { type: "Dairy", desc: "Butter is used in the dough." },
                { type: "Gluten", desc: "Flour and bread are used in the dough." }
              ],
              ingredients: ["butter", "bread", "flour", "potatoes", "egg", "nutmeg", "dill"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Germany",
        music: [
            { name: "Eisbrecher - Verrückt", url: "https://www.youtube.com/watch?v=yjO1bMHbDpY", tl: "Icebreaker - Crazy" },
            { name: "Guano Apes - Lords of the Boards", url: "https://www.youtube.com/watch?v=2yfwePfD-iU" },
            { name: "LE FLY - St. Pauli Tanzmusik (Posse-Version)", url: "https://www.youtube.com/watch?v=G2ehRhMPpiU", tl: "LE FLY - St. Pauli Dance Music (Posse Version)" },
            { name: "Faun ft. Santiano - Tanz mit mir", url: "https://www.youtube.com/watch?v=beXW5s3ZCB4", tl: "Faun ft. Santiano - Dance with Me" },
            { name: "Pink Cream 69 - Walls Come Down", url: "https://www.youtube.com/watch?v=EVyfvf-tHD4" },
            { name: "WISECRÄCKER - ¿Porqué te vas?", url: "https://www.youtube.com/watch?v=XbYU3qEtiPU", tl: "WISECRÄCKER - Why are you leaving?" },
            { name: "ABAY - ALWAYS HARDCORE (Scooter Medley)", url: "https://www.youtube.com/watch?v=MwGrqNJXQnc" },
            { name: "Georg Stengel - Mars", url: "https://www.youtube.com/watch?v=6g8wrXoHAXY" },
            { name: "BudZillus - Immer Weiter", url: "https://www.youtube.com/watch?v=qaxtRuGnE70", tl: "BudZillus - Always Further" },
            { name: "JANIZ - Straight Outta Line", url: "https://www.youtube.com/watch?v=scAlkfkacgk" },
            { name: "Klaus Nomi - Nomi Song", url: "https://www.youtube.com/watch?v=iNahvGXVWl0" },
            { name: "beNUTS - Chop Off", url: "https://www.youtube.com/watch?v=f7gdxooqqxA" },
            { name: "Boney M. - Rasputin", url: "https://www.youtube.com/watch?v=SYnVYJDxu2Q" },
            { name: "Sarah Schiffer - Illusion", url: "https://www.youtube.com/watch?v=bd8EYFJAqnw" },
            { name: "Fehlfarben - Ein Jahr (Es ght voran)", url: "https://www.youtube.com/watch?v=Kvek60dvq50", tl: "Fehlfarben - One Year (It's Moving Forward)" },
            { name: "Delirium - Perchta", url: "https://www.youtube.com/watch?v=ex9I0nOyrP8" },
            { name: "Mantus - Untergang", url: "https://www.youtube.com/watch?v=57_PeLe6nMU", tl: "Mantus - Downfall" },
            { name: "Paralysed Age - Bloodsucker", url: "https://www.youtube.com/watch?v=X5R9rluWR4w" },
            { name: "Skalamander - Ska Wochenende", url: "https://www.youtube.com/watch?v=MpSHNus_gAE", tl: "Skalamander - Ska Weekend" },
            { name: "...But Alive - Vergiss den Quatsch", url: "https://www.youtube.com/watch?v=rupuX2-KCvo", favorite: true, tl: "...But Alive - Forget the Bullshit" },
            { name: "Wir sind Helen - Aurélie", url: "https://www.youtube.com/watch?v=HNPut-juVd4", tl: "We are Heroes - Aurélie" },
            { name: "Wolfenmond - Wilde Rose", url: "https://www.youtube.com/watch?v=Ztvb2BAtcTk" },
            { name: "Goombay Dance Band - My Bonnie", url: "https://www.youtube.com/watch?v=FWSaF3lGCCY" },
            { name: "Sookee ft. Mal Élevé & Ben Dana - Links Außen", url: "https://www.youtube.com/watch?v=P3HsGg361cw", tl: "Sookee ft. Mal Élevé & Ben Dana - Left Outside" },
            { name: "Nena - Nur geträumt", url: "https://www.youtube.com/watch?v=IlxrXK_moCc", tl: "Nena - Just a Dream" }
        ]
    },
    "GH": { // 31m
        name: "Ghana", desc: "The Republic of Ghana is a country in West Africa. It is home to the Agbogbloshie - the world's largest digital waste site, making it a very fun place to go on a date if you like trying to hack old hard drives for personal/confidential information on dates. It is also home to one of Africa's 7 space agencies, in case you'd rather hack satellites on your dates.",
        population: 31072940, popEstimate: 2020, area: 239567, independence: "1957-03-1957", indFrom: "Britain", demonym: "Ghanaian", currency: "Ghanaian Cedi (₵)", 
        languages: ["English", "many recognized native languages"], motto: `"Freedom and Justice."`, neighbors: ["BF", "CI", "TG"], 
        foodURL: "https://en.wikipedia.org/wiki/Ghanaian_cuisine",
        food: [
            { name: "Light Soup", type: "Soup", url: "https://www.inammaskitchen.com/ghanaian-chicken-soup-light-soup-recipe/", date: "2020-11-07", 
              img: "lightsoup.jpg", desc: "It's mostly just spicy tomato soup with chicken, but the inclusion of a lil' bit of ginger really brings out some wild new flavors.",
              diet: [
                { type: "Meat", desc: "It has chicken in it, but you can just not add chicken. It's allowed." },
                { type: "Spicy", desc: "Some peppie blended into the soup." }
              ],
              ingredients: ["tomato", "onion", "chicken", "tomato paste", "bay leaf", "garlic", "scotch bonnet pepper", "ginger", "bouillon cube"]
            },
            { name: "Angwa Mo", type: "Rice", url: "https://ndudu-by-fafa.blogspot.com/2017/04/the-ghanaian-oiled-rice-recipe.html", date: "2020-11-08", favorite: true,
              img: "angwamo.jpg", desc: "Any time a dish makes me go back for seconds, then go back for thirds, and then be disappointed that I didn't actually make enough to have thirds, is a time that I declare a dish Very Yum. A very flavorful rice.",
              diet: [
                { type: "Meat", desc: "Salted beef is a primary ingredient that you can omit or replace if you do not want to eat salted beef. I used prosciutto." },
                { type: "Spicy", desc: "A bit of peppie is used for some background heat." }
              ],
              ingredients: ["oil", "basmati rice", "salted beef", "chilli peppers", "onion"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Ghana",
        music: [
            { name: "Ahkan ft. Medikal & Junior US - Obama Dance", url: "https://www.youtube.com/watch?v=ut1pTD_dCuM" },
            { name: "Becca ft. Sarkodie - Nana", url: "https://www.youtube.com/watch?v=5WAkXz2aUBM" },
            { name: "Sorakiss ft. Kuami Eugene - Ice Cream", url: "https://www.youtube.com/watch?v=Alz07rSRQRA" },
            { name: "Kwesi Arthur - Live From 233", url: "https://www.youtube.com/watch?v=dXDp8kGfA7s" },
            { name: "Buk Bak - Akwesi Broni", url: "https://www.youtube.com/watch?v=LAIHgyKiH8g" },
            { name: "Gasmilla - Ak3somorshi", url: "https://www.youtube.com/watch?v=7ieGtNtM1AM", favorite: true },
            { name: "Joey B ft. King Promise - Sweetie Pie", url: "https://www.youtube.com/watch?v=zY-NLE0SwLI" },
            { name: "Vybrant Faya - Fun Time", url: "https://www.youtube.com/watch?v=oYSDXTMa98Q" }
        ]
    }/*,
    "GD": { // 0.1m
        name: "Grenada", desc: "Grenada is an island nation in the West Indies.",
        population: 111454, popEstimate: 2018, area: 348, independence: "1974-02-07", indFrom: "Britain", demonym: "Grenadian", currency: "East Caribbean Dollar ($)", 
        languages: "English, Grenadian Creole English, Grenadian Creole French", motto: `"Ever Conscious of God We Aspire, Build and Advance as One People."`, neighbors: "None", 
        foodURL: "https://en.wikipedia.org/wiki/Culture_of_Grenada#Cuisine",
        food: [ // https://healthiersteps.com/recipe/caribbean-green-seasoning/ https://caribbeanpot.com/an-unconventional-grenadian-oil-down/  https://www.youtube.com/watch?v=nxX1HX65850
            { name: "Oil Down maybe?", type: "Soup", url: "https://en.wikipedia.org/wiki/Oil_down", date: "1990-01-01", 
              img: "", desc: "",
              diet: [
                  { type: "", desc: "" }
              ],
              ingredients: []
            }, // https://tastetheislandstv.com/curried-goat-recipe/
            { name: "", type: "", url: "", date: "1990-01-01", 
              img: "", desc: "", // https://www.fieryfoodscentral.com/recipe/grenadian-style-curried-goat/
              diet: [
                { type: "", desc: "" }
              ],
              ingredients: []
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Grenada",
        music: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" }
        ]
    }/*,


    // https://edibleun.wordpress.com/2016/05/23/trip-28-gabon-africa-gabonese-mustard-lemon-chicken-cucumber-salad-baked-bananas-gabon-french-bread/

    //,{ name: "", url: "" }
    Euro (€)
                { type: "Soy", desc: "The filling contains Worcestershire Sauce, which often has soy sauce in it." },
                { type: "Meat", desc: "The primary ingredient o." },
                { type: "Dairy", desc: "Butter is used in the dough." },
                { type: "Egg", desc: "Egg is used in the dough." },
                { type: "Warning", desc: "" },
                { type: "Nuts", desc: "This recipe uses nuts. Almonds, walnuts, or hazelnuts." },
                { type: "Fish", desc: "The filling contains Worcestershire Sau." },
                { type: "Peanuts", desc: "Peanut sauce. Come on. Don't make this if you have a peanut allergy. You can't sue me, it won't work." },
                { type: "Alcohol", desc: "Rum or brandy are used in the sauce, but I substituted with vanilla and it was still tasty." },
                { type: "Gluten", desc: "Flour is used in the dough." },
                { type: "Honey", desc: "Honey is used in the dough." },
                { type: "Spicy", desc: "It's spicy. I only used one habanero in my recipe, so you can make it as mild as you like." },
                { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." },




    "GW": { // 1.8m
        name: "Guinea-Bissau", desc: "",
        music: [
            "Tabanka Djaz - Silencio"
        ]
    },
    // india: 
            { name: "Anupam Roy - Ekhon Anek Raat", url: "https://www.youtube.com/watch?v=8-7GUHoD6Qs" },
    // Jamaica: https://www.youtube.com/watch?v=eUPYFt52FBE
    // mexico: https://www.youtube.com/watch?v=17LDYwiPe3s
    // portugual: https://www.youtube.com/watch?v=099qXDYutyg
    // romania: https://www.youtube.com/watch?v=Clx4BUnzhO4
    ,
    "template": { 
        name: "", desc: "",
        population: 0, popEstimate: 2015, area: 0, independence: "", indFrom: "", demonym: "", currency: "", 
        languages: "", motto: `""`, neighbors: "", 
        foodURL: "",
        food: [
            { name: "", type: "", url: "", date: "1990-01-01", 
              img: "", desc: "",
              diet: [
                  { type: "", desc: "" }
              ],
              ingredients: []
            },
            { name: "", type: "", url: "", date: "1990-01-01", 
              img: "", desc: "",
              diet: [
                { type: "", desc: "" }
              ],
              ingredients: []
            }
        ],
        musicURL: "",
        music: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" }
        ]
    }
    */
};
export default Data;

const AllFood:FoodInfo[] = [];
const AllSongs:SongInfo[] = [];

const cl:CountryLetter[] = [];
const keys = Object.keys(Data);
let lastLetter = "";
let curIdx = -1;
for(let i = 0; i < keys.length; i++) {
  const cc = keys[i];
  const ci = Data[cc];
  const startLetter = ci.realFirstLetter || ci.name[0];
  if(startLetter !== lastLetter) {
    curIdx++;
    lastLetter = startLetter;
    cl.push({ letter: startLetter, info: [] });
  }
  cl[curIdx].info.push({ code: cc, name: ci.name });
  
  ci.food.forEach(f => {
    f.countryCode = cc;
    AllFood.push(f);
  });
  ci.music.forEach(s => {
    s.countryCode = cc;
    AllSongs.push(s);
  });
}
export const CountryLetters = cl;
export const FoodList = AllFood;
export const SongList = AllSongs;