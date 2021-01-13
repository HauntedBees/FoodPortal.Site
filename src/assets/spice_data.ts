export interface ImageLicense {
    imgName: string;
    imgURL: string;
    authorName: string;
    authorURL: string;
    licenseName: string;
}
export const Licenses:{[key:string]:string} = {
    "CC BY-SA 4.0": "https://creativecommons.org/licenses/by-sa/4.0/deed.en",
    "CC BY-SA 3.0": "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
    "CC BY-SA 2.5": "https://creativecommons.org/licenses/by-sa/2.5/deed.en",
    "CC BY-SA 2.0": "https://creativecommons.org/licenses/by-sa/2.0/",
    "CC BY-SA 1.0": "https://creativecommons.org/licenses/by-sa/1.0/deed.en",
    "CC BY 3.0": "https://creativecommons.org/licenses/by/3.0/deed.en",
    "CC BY 2.0": "https://creativecommons.org/licenses/by/2.0/deed.en",
    "CC0 1.0": "https://creativecommons.org/publicdomain/zero/1.0/",
    "Public Domain": "https://en.wikipedia.org/wiki/Public_domain"
};
export const Types:string[] = ["herb", "spice", "blend"];
export const DishTypes:string[] = ["Bread", "Bread Dip", "Curry", "Dessert", "Dry Rub", "Fruit Sauce", "Marinade", "Pasta", "Rice", "Risotto",
                                    "Salad Dressing", "Sauce", "Soup", "Stir-Fry", "Stuffing", "Tomato Sauce", "Tea"];
export const Flavors:string[] = ["Bitter", "Earthy", "Peppery", "Smokey", "Savory", "Spicy", "Sweet", "Warm", "Sour", "Citrusy", "Cold"];
export const Foods:string[] = ["Apple", "Artichoke", "Beet", "Bell Pepper", "Broccoli", "Cabbage", "Carrot", "Cauliflower", "Celery", "Citrus",
                                "Corn", "Eggplant", "Green Beans", "Melon", "Mushroom", "Olive", "Onions", "Peas", "Pear", "Potato", "Spinach",
                                "Squash", "Sweet Potato", "Tomato", "Turnip", "Zucchini", "Beans", "Beef", "Cheese", "Chicken", "Duck", "Fish",
                                "Lamb", "Lentils", "Pork", "Shellfish", "Tofu", "Turkey", "Vegetables", "Olive Oil"];
export interface Recipe {
    name: string;
    url: string;
}
export interface Spice {
    description: string;
    dishes: number[];
    emoji: string;
    flavors: number[];
    foods: number[];
    id: string;
    imgDesc: string;
    license: ImageLicense;
    name: string;
    origin: string;
    pairsWith: number[];
    recipes: Recipe[];
    relatedSpices: number[];
    species: string;
    synonyms: string[];
    type: number;
}

const Spices: Spice[] = [{
    "synonyms": ["Jamaica pimenta", "myrtle pepper"],
    "description": "These dried fruits are an important ingredient in Caribbean cuisine.",
    "dishes": [0, 3, 12, 4, 6],
    "emoji": "1F347",
    "flavors": [1, 6],
    "foods": [0, 2, 5, 6, 21, 22, 24, 27, 32, 9],
    "id": "allspice",
    "imgDesc": "Allspice berries",
    "license": {
        "imgName": "Allspice Bowl",
        "imgURL": "https://commons.wikimedia.org/wiki/File:AllspiceBowl.JPG",
        "authorName": "Jonathunder",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Jonathunder",
        "licenseName": "CC BY-SA 3.0"
    },
    "name": "Allspice",
    "origin": "Caribbean",
    "pairsWith": [6, 30, 11, 12, 23, 26, 13, 17, 22],
    "recipes": [{
        "name": "Jerk Chicken",
        "url": "https://www.allrecipes.com/recipe/8667/jays-jerk-chicken"
    }, {
        "name": "Cincinnati Chili",
        "url": "https://www.allrecipes.com/recipe/206953/authentic-cincinnati-chili"
    }, {
        "name": "Jamaican Jerk Dry Rub",
        "url": "https://www.allrecipes.com/recipe/141962/jamaican-jerk-dry-rub"
    }, {
        "name": "Chai Tea",
        "url": "https://www.allrecipes.com/recipe/46350/shemakes-instant-chai-tea"
    }, {
        "name": "Spiced Cookies",
        "url": "https://www.allrecipes.com/recipe/260068/spiced-sugar-cookies"
    }],
    "relatedSpices": [],
    "species": "Pimenta dioica",
    "type": 1
}, {
    "synonyms": ["aamchur", "amchur", "mango powder"],
    "description": "Unripe green mangoes dried and ground up.",
    "dishes": [12, 2],
    "emoji": "1F96D",
    "flavors": [8, 9],
    "foods": [38, 29],
    "id": "amchur",
    "imgDesc": "Dried mangos, prior to being ground up",
    "license": {
        "imgName": "Dried Mango Slices",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Dried_Mango_Slices.JPG",
        "authorName": "Miansari66",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Miansari66",
        "licenseName": "Public Domain"
    },
    "name": "Amchoor",
    "origin": "South Asian",
    "pairsWith": [45],
    "recipes": [{
        "name": "Potato and Pea Curry",
        "url": "https://www.bbc.com/food/recipes/potato_and_pea_curry_19537"
    }, {
        "name": "Punjabi Chole",
        "url": "http://hungrydesi.com/2009/02/15/punjabi-chole-with-amchur-crusted-aloo/"
    }, {
        "name": "Chana Masala",
        "url": "https://smittenkitchen.com/2010/02/chana-masala/"
    }],
    "relatedSpices": [],
    "species": "Mangifera indica",
    "type": 1
}, {
    "synonyms": ["sweet basil", "great basil", "Saint-Joseph's-wort"],
    "description": "The leaves of a plant belonging to the mint family. Can be served fresh or dried.",
    "dishes": [4, 6, 7, 10, 13, 15],
    "emoji": "1F33F",
    "flavors": [6],
    "foods": [3, 11, 15, 19, 23, 25, 27, 28, 29, 31, 32, 34, 37, 39, 16],
    "id": "basil",
    "imgDesc": "Genovese basil leaves",
    "license": {
        "imgName": "Basilico Genovese di Prà-2",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Basilico_Genovese_di_Pr%C3%A0-2.jpg",
        "authorName": "Twice25",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Twice25",
        "licenseName": "CC BY-SA 2.5"
    },
    "name": "Basil",
    "origin": "Mediterranean",
    "pairsWith": [22, 35, 44, 31, 27, 18, 15, 4, 10, 12, 23, 33, 48],
    "recipes": [{
        "name": "Pesto",
        "url": "https://www.allrecipes.com/recipe/258213/proper-pesto/"
    }, {
        "name": "Basil Ricotta Gnocchi",
        "url": "https://www.allrecipes.com/recipe/254944/chef-johns-basil-ricotta-gnocchi/"
    }, {
        "name": "Tomato Basil Sauce",
        "url": "https://www.allrecipes.com/recipe/19376/fresh-tomato-basil-sauce/"
    }, {
        "name": "Caprese Salad",
        "url": "https://www.allrecipes.com/recipe/228126/caprese-salad-with-balsamic-reduction/"
    }],
    "relatedSpices": [],
    "species": "Ocimum basilicum",
    "type": 0
}, {
    "synonyms": ["sweet bay", "laurel"],
    "description": "Bay leaves are often left in sauces as they cook, then removed before serving.",
    "dishes": [9, 12],
    "emoji": "1F33F",
    "flavors": [0],
    "foods": [14, 19, 23, 26, 33, 35, 39, 6, 8],
    "id": "bayleaf",
    "imgDesc": "Dried bay leaves",
    "license": {
        "imgName": "Bay Leaves",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Bay_Leaves.JPG",
        "authorName": "Miansari66",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Miansari66",
        "licenseName": "Public Domain"
    },
    "name": "Bay Leaf",
    "origin": "Mediterranean",
    "pairsWith": [31, 37, 44, 27, 33, 4, 17, 18, 26, 48],
    "recipes": [{
        "name": "Roasted Vegetable Stock",
        "url": "https://www.allrecipes.com/recipe/147142/roasted-vegetable-stock"
    }, {
        "name": "Risotto",
        "url": "https://www.telegraph.co.uk/foodanddrink/recipes/8822742/Risotto-with-bay-leaves-pecorino-cheese-and-prosecco-recipe.html"
    }, {
        "name": "Pot Roast",
        "url": "https://www.allrecipes.com/recipe/229953/pot-roast-with-vegetables"
    }],
    "relatedSpices": [21],
    "species": "Laurus nobilis",
    "type": 0
}, {
    "synonyms": [],
    "description": "The dried and cooked unripe fruit of the pepper plant.",
    "dishes": [12, 4, 6, 7, 9, 10],
    "emoji": "1F331",
    "flavors": [5, 2],
    "foods": [16, 23, 29, 19, 39],
    "id": "blackpepper",
    "imgDesc": "Some freshly ground pepper",
    "license": {
        "imgName": "Spilled Pepper",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Spilled_Pepper.jpg",
        "authorName": "Bryanwake",
        "authorURL": "https://en.wikipedia.org/wiki/User:Bryanwake",
        "licenseName": "Public Domain"
    },
    "name": "Black Pepper",
    "origin": "South Asian",
    "pairsWith": [33, 44, 15, 31, 7, 23, 2, 6, 3, 13, 12, 45, 17, 26, 27, 29, 40],
    "recipes": [{
        "name": "Black Pepper Beef",
        "url": "https://www.allrecipes.com/recipe/261791/peposa-dellimpruneta-tuscan-black-pepper-beef"
    }, {
        "name": "Black Pepper Rings",
        "url": "https://www.allrecipes.com/recipe/20033/black-pepper-rings"
    }, {
        "name": "Black Pepper Gravy",
        "url": "https://www.allrecipes.com/recipe/261134/black-pepper-gravy"
    }],
    "relatedSpices": [21, 47],
    "species": "Piper nigrum",
    "type": 1
}, {
    "synonyms": [],
    "description": "This spice blend is often used in Cajun cuisine.",
    "dishes": [4],
    "emoji": "1F336",
    "flavors": [1, 5],
    "foods": [3, 6, 8, 16, 27, 29, 34, 35],
    "id": "cajunseasoning",
    "imgDesc": "An example of a Cajun spice blend",
    "license": {
        "imgName": "Kruidenmengeling-spice",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Kruidenmengeling-spice.jpg",
        "authorName": "Henna",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Henna",
        "licenseName": "CC BY-SA 1.0"
    },
    "name": "Cajun Seasoning",
    "origin": "Cajun",
    "pairsWith": [],
    "recipes": [],
    "relatedSpices": [32, 15, 7],
    "species": "",
    "type": 2
}, {
    "synonyms": ["cardamon", "cardamum"],
    "description": "Seed pods from a plant in the ginger family. One of the most expensive spices in the world after vanilla and saffron.",
    "dishes": [2, 3, 12, 0, 16],
    "emoji": "1F331",
    "flavors": [6],
    "foods": [6, 9, 10, 17, 21, 22, 29, 30, 33, 34, 16],
    "id": "cardamom",
    "imgDesc": "A dried Cardamom pod and a peeled one",
    "license": {
        "imgName": "Cardamom (Kerala, India)",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Cardamom_(Kerala,_India).jpg",
        "authorName": "Getpraveennair",
        "authorURL": "https://commons.wikimedia.org/w/index.php?title=User:Getpraveennair",
        "licenseName": "CC BY-SA 4.0"
    },
    "name": "Cardamom",
    "origin": "South Asian",
    "pairsWith": [11, 15, 23, 45, 12, 0, 4, 13, 32, 40],
    "recipes": [{
        "name": "Finnish Nissua",
        "url": "https://www.allrecipes.com/recipe/18123/finnish-nissua"
    }, {
        "name": "Kheer",
        "url": "https://www.allrecipes.com/recipe/74203/kheer-rice-pudding"
    }, {
        "name": "Hot Cross Buns",
        "url": "https://www.allrecipes.com/recipe/257871/chef-johns-hot-cross-buns"
    }, {
        "name": "Beef Samosas",
        "url": "https://www.allrecipes.com/recipe/24871/beef-samosas"
    }, {
        "name": "Chicken Curry",
        "url": "https://www.allrecipes.com/recipe/52678/spicy-indian-chicken-curry-yummy"
    }],
    "relatedSpices": [21],
    "species": "Elettaria cardamomum",
    "type": 1
}, {
    "synonyms": ["red pepper"],
    "description": "A somewhat hot chili pepper that can be dried and ground up to make a powder.",
    "dishes": [6, 8, 10, 11, 12],
    "emoji": "1F336",
    "flavors": [5],
    "foods": [3, 10, 11, 19, 23, 25, 27, 29, 31],
    "id": "cayenne",
    "imgDesc": "Big pile of cayenne peppers",
    "license": {
        "imgName": "Capsicum frutescens",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Capsicum_frutescens.jpg",
        "authorName": "Eric in SF",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Eric_in_SF",
        "licenseName": "CC BY-SA 4.0"
    },
    "name": "Cayenne Pepper",
    "origin": "Mexican",
    "pairsWith": [15, 32, 11, 22, 4, 19, 28],
    "recipes": [{
        "name": "Stuffed Peppers",
        "url": "https://www.allrecipes.com/recipe/222002/chef-johns-stuffed-peppers"
    }, {
        "name": "Vinegar Pepper Sauce",
        "url": "https://www.allrecipes.com/recipe/17517/uncle-mikes-vinegar-pepper-sauce"
    }, {
        "name": "Peppered Shrimp Alfredo",
        "url": "https://www.allrecipes.com/recipe/133128/peppered-shrimp-alfredo"
    }, {
        "name": "Peanut Curry Chicken",
        "url": "https://www.allrecipes.com/recipe/244979/chef-johns-peanut-curry-chicken"
    }],
    "relatedSpices": [5, 9, 16],
    "species": "Capsicum annuum",
    "type": 1
}, {
    "synonyms": ["French parsley", "garden chervil"],
    "description": "A mild herb for mild dishes",
    "dishes": [12, 10],
    "emoji": "1F33F",
    "flavors": [6],
    "foods": [6, 28, 16, 8],
    "id": "chervil",
    "imgDesc": "Some chervil growing",
    "license": {
        "imgName": "Chervil",
        "imgURL": "https://pxhere.com/en/photo/1246582",
        "authorName": "pxhere",
        "authorURL": "https://pxhere.com/en/photo/1246582",
        "licenseName": "Public Domain"
    },
    "name": "Chervil",
    "origin": "Caucasian",
    "pairsWith": [43, 33, 10],
    "recipes": [{
        "name": "Roasted Cauliflower and Leek Soup",
        "url": "https://www.allrecipes.com/recipe/229372/roasted-cauliflower-and-leek-soup"
    }, {
        "name": "Green Apple-Parmesan Towers",
        "url": "https://www.allrecipes.com/recipe/266733/green-apple-parmesan-towers"
    }],
    "relatedSpices": [33, 13, 14],
    "species": "Anthriscus cerefolium",
    "type": 0
}, {
    "synonyms": [],
    "description": "A blend of ground chili pepper and a handful of other ingredients.",
    "dishes": [4, 6, 10, 12],
    "emoji": "1F336",
    "flavors": [3, 5],
    "foods": [7, 26, 27, 29, 31, 10, 12, 21, 23, 16],
    "id": "chilipowder",
    "imgDesc": "Ancho chili powder",
    "license": {
        "imgName": "Anchochilipowder",
        "imgURL": "https://en.wikipedia.org/wiki/File:Anchochilipowder.JPG",
        "authorName": "Badagnani",
        "authorURL": "https://en.wikipedia.org/wiki/User:Badagnani",
        "licenseName": "CC BY-SA 3.0"
    },
    "name": "Chili Powder",
    "origin": "Mexican",
    "pairsWith": [14, 31, 32],
    "recipes": [],
    "relatedSpices": [7, 15, 32, 22],
    "species": "",
    "type": 2
}, {
    "synonyms": [],
    "description": "Related to garlic and onions, these long green fellows are used for their stems.",
    "dishes": [4, 6, 9, 10, 12],
    "emoji": "1F33F",
    "flavors": [4],
    "foods": [27, 28, 32, 34, 19],
    "id": "chives",
    "imgDesc": "Some chives sprouting in a pot",
    "license": {
        "imgName": "Chive seedlings sprouting",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Chive_seedlings_sprouting.jpg",
        "authorName": "Norman21",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Norman21",
        "licenseName": "CC BY-SA 3.0"
    },
    "name": "Chives",
    "origin": "Eurasian",
    "pairsWith": [2, 13, 31, 22, 28, 33, 35, 44, 8, 17, 43],
    "recipes": [{
        "name": "Cheese Drop Biscuits",
        "url": "https://www.allrecipes.com/recipe/23641/cheese-drop-biscuits"
    }, {
        "name": "Cheesy Chicken and Chive Sauce",
        "url": "https://www.allrecipes.com/recipe/40345/cheesy-chicken-and-chive-sauce"
    }, {
        "name": "Curried Pumpkin Soup with Chives",
        "url": "https://www.allrecipes.com/recipe/245089/curried-pumpkin-soup-with-chives"
    }, {
        "name": "Boiled Potatoes with Chives",
        "url": "https://www.allrecipes.com/recipe/231861/boiled-potatoes-with-chives"
    }],
    "relatedSpices": [22],
    "species": "Allium schoenoprasum",
    "type": 0
}, {
    "synonyms": [],
    "description": "The inner bark of a tree, used either in stick form or ground into a powder.",
    "dishes": [0, 3, 5],
    "emoji": "1F332",
    "flavors": [1, 6],
    "foods": [0, 29, 32, 6, 18, 21, 22],
    "id": "cinnamon",
    "imgDesc": "Cinnamon sticks, powder, and dried flowers",
    "license": {
        "imgName": "Cinnamomum verum spices",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Cinnamomum_verum_spices.jpg",
        "authorName": "Simon A. Eugster",
        "authorURL": "https://commons.wikimedia.org/wiki/User:LivingShadow",
        "licenseName": "CC BY-SA 3.0"
    },
    "name": "Cinnamon",
    "origin": "South Asian",
    "pairsWith": [0, 12, 30, 6, 7, 13, 14, 15, 17, 18, 23, 32, 40, 46],
    "recipes": [{
        "name": "Pumpkin Cinnamon Rolls",
        "url": "https://www.allrecipes.com/recipe/229860/chef-johns-pumpkin-cinnamon-rolls"
    }, {
        "name": "Cinnamon Roasted Sweet Potatoes",
        "url": "https://www.allrecipes.com/recipe/58616/cinnamon-roasted-sweet-potatoes"
    }, {
        "name": "Cinnamon Pie",
        "url": "https://www.allrecipes.com/recipe/12578/cinnamon-pie"
    }, {
        "name": "Horchata",
        "url": "https://www.allrecipes.com/recipe/141828/lolas-horchata"
    }],
    "relatedSpices": [20, 21],
    "species": "Cinnamomum verum",
    "type": 1
}, {
    "synonyms": [],
    "description": "Aromatic dried flower buds.",
    "dishes": [0, 2, 3, 6, 12],
    "emoji": "1F33C",
    "flavors": [1, 6],
    "foods": [32, 0, 2, 21, 22, 23],
    "id": "cloves",
    "imgDesc": "Dried cloves",
    "license": {
        "imgName": "ClovesDried",
        "imgURL": "https://commons.wikimedia.org/wiki/File:ClovesDried.jpg",
        "authorName": "Brian Arthur",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Ies",
        "licenseName": "CC BY-SA 3.0"
    },
    "name": "Cloves",
    "origin": "South Asian",
    "pairsWith": [11, 30, 0, 2, 40, 46, 4, 6, 17, 22, 23],
    "recipes": [{
        "name": "Basmati Rice",
        "url": "https://www.allrecipes.com/recipe/72349/indian-style-basmati-rice"
    }, {
        "name": "Gingerbread Biscotti",
        "url": "https://www.allrecipes.com/recipe/43941/gingerbread-biscotti"
    }, {
        "name": "Coconut Amarela",
        "url": "https://www.196flavors.com/angola-cocada-amarela/"
    }, {
        "name": "Lamb Tagine",
        "url": "https://www.allrecipes.com/recipe/105044/lamb-tagine"
    }, {
        "name": "Cranberry Cider",
        "url": "https://www.allrecipes.com/recipe/32555/hot-spiced-cranberry-cider"
    }],
    "relatedSpices": [20, 21],
    "species": "Syzygium aromaticum",
    "type": 1
}, {
    "synonyms": ["cilantro", "Chinese parsley"],
    "description": "Leaves, also known as cilantro.",
    "dishes": [2],
    "emoji": "1F33F",
    "flavors": [6, 8],
    "foods": [10, 26],
    "id": "coriander",
    "imgDesc": "A bunch of coriander leaves",
    "license": {
        "imgName": "A scene of Coriander leaves",
        "imgURL": "https://commons.wikimedia.org/wiki/File:A_scene_of_Coriander_leaves.JPG",
        "authorName": "Thamizhpparithi Maari",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Thamizhpparithi_Maari",
        "licenseName": "CC BY-SA 3.0"
    },
    "name": "Coriander",
    "origin": "Middle Eastern",
    "pairsWith": [23, 11, 15, 6, 0, 30, 4, 10, 18, 44],
    "recipes": [{
        "name": "Orange Cilantro Rice",
        "url": "https://www.allrecipes.com/recipe/85856/orange-cilantro-rice"
    }, {
        "name": "Cilantro Cream Sauce",
        "url": "https://www.allrecipes.com/recipe/20446/amys-cilantro-cream-sauce"
    }, {
        "name": "Enchiladas Verdes",
        "url": "https://www.allrecipes.com/recipe/59900/authentic-enchiladas-verdes"
    }],
    "relatedSpices": [14, 33],
    "species": "Coriandrum sativum",
    "type": 0
}, {
    "synonyms": ["cilantro seeds"],
    "description": "Dried fruits from the coriander plant. Ground up to be a spice.",
    "dishes": [2, 4, 6, 11, 12, 14],
    "emoji": "1F347",
    "flavors": [1, 9],
    "foods": [3, 27, 29, 31, 34, 36, 16, 19, 23],
    "id": "corianderseeds",
    "imgDesc": "A large pile of dried coriander fruits",
    "license": {
        "imgName": "Coriander Seeds",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Coriander_Seeds.jpg",
        "authorName": "Sanjay Acharya",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Sanjay_ach",
        "licenseName": "CC BY-SA 4.0"
    },
    "name": "Coriander Seeds",
    "origin": "Middle Eastern",
    "pairsWith": [9, 15, 11, 22],
    "recipes": [{
        "name": "Ajika Salsa",
        "url": "https://www.saveur.com/red-ajika-recipe"
    }, {
        "name": "Mantu Dumplings",
        "url": "http://www.afghankitchenrecipes.com/recipe/mantu-beef-dumplings/"
    }],
    "relatedSpices": [13, 33, 16, 21],
    "species": "Coriandrum sativum",
    "type": 1
}, {
    "synonyms": [],
    "description": "Dried seeds that are often ground up before using.",
    "dishes": [2, 4, 6, 8, 11, 12],
    "emoji": "1F331",
    "flavors": [1, 3],
    "foods": [6, 10, 11, 12, 23, 25, 26, 27, 29, 31, 33, 34, 36],
    "id": "cumin",
    "imgDesc": "Some cumin seeds",
    "license": {
        "imgName": "Sa cumin",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Sa_cumin.jpg",
        "authorName": " \tSanjay Acharya",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Sanjay_ach",
        "licenseName": "CC BY-SA 3.0"
    },
    "name": "Cumin",
    "origin": "Middle Eastern",
    "pairsWith": [22, 45, 23, 11, 31, 2, 4, 6, 7, 13, 14, 26, 28, 32],
    "recipes": [{
        "name": "Shakshouka",
        "url": "https://www.allrecipes.com/recipe/245362/chef-johns-shakshuka"
    }, {
        "name": "Aloo Gobi",
        "url": "https://www.allrecipes.com/recipe/151997/alicias-aloo-gobi"
    }, {
        "name": "Moroccan Couscous",
        "url": "https://www.allrecipes.com/recipe/105045/moroccan-couscous"
    }, {
        "name": "Albondigas",
        "url": "https://www.allrecipes.com/recipe/245585/turkey-and-rice-meatballs-albondigas"
    }],
    "relatedSpices": [5, 9, 16, 21],
    "species": "Cuminum cyminum",
    "type": 1
}, {
    "synonyms": [],
    "description": "A spice mix originating from India.",
    "dishes": [1, 4, 8],
    "emoji": "1F35B",
    "flavors": [5, 7],
    "foods": [4, 29, 33, 34, 36, 5, 7, 12, 20, 25],
    "id": "currypowder",
    "imgDesc": "A big pile of curry powder",
    "license": {
        "imgName": "Curry powder in the spice-bazaar in Istanbul",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Curry_powder_in_the_spice-bazaar_in_Istanbul.jpg",
        "authorName": "Thomas Steiner",
        "authorURL": "https://de.wikipedia.org/wiki/Benutzer:Thire",
        "licenseName": "CC BY-SA 3.0"
    },
    "name": "Curry Powder",
    "origin": "South Asian",
    "pairsWith": [],
    "recipes": [],
    "relatedSpices": [14, 15, 45, 7, 19],
    "species": "",
    "type": 2
}, {
    "synonyms": [],
    "description": "Nice fluffy leaves.",
    "dishes": [10, 11, 12],
    "emoji": "1F33F",
    "flavors": [6, 8],
    "foods": [2, 28, 31, 6, 20, 32],
    "id": "dill",
    "imgDesc": "Just a nice chunk of dill",
    "license": {
        "imgName": "Dill Spice Plant",
        "imgURL": "https://pixabay.com/en/dill-spice-plant-food-herb-green-2826179/",
        "authorName": "Zsuzsanna Tóth",
        "authorURL": "https://pixabay.com/en/users/suetot-5317196/",
        "licenseName": "CC0 1.0"
    },
    "name": "Dill",
    "origin": "South Asian",
    "pairsWith": [29, 11, 4, 12, 0, 3, 26, 23, 10, 22, 33],
    "recipes": [{
        "name": "Tzatziki",
        "url": "https://www.allrecipes.com/video/3419/chef-johns-tzatziki-sauce"
    }, {
        "name": "Garlic and Dill Salmon",
        "url": "https://www.allrecipes.com/recipe/79701/garlic-and-dill-salmon"
    }, {
        "name": "Maple Dill Carrots",
        "url": "https://www.allrecipes.com/recipe/87694/maple-dill-carrots"
    }, {
        "name": "Dill Pickles",
        "url": "https://www.allrecipes.com/recipe/218121/pops-dill-pickles"
    }],
    "relatedSpices": [],
    "species": "Anethum graveolens",
    "type": 0
}, {
    "synonyms": [],
    "description": "Seeds from a plant in the carrot family.",
    "dishes": [15],
    "emoji": "1F955",
    "flavors": [6, 0],
    "foods": [27, 6, 23, 8],
    "id": "fennel",
    "imgDesc": "Oh no they spilled their bottle of fennel seeds",
    "license": {
        "imgName": "Fennel seed",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Fennel_seed.jpg",
        "authorName": "Howcheng",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Howcheng",
        "licenseName": "CC BY-SA 3.0"
    },
    "name": "Fennel",
    "origin": "Mediterranean",
    "pairsWith": [13, 3, 11, 2, 31, 40],
    "recipes": [{
        "name": "Garlic, Fennel and Orange Grilled Chicken Thighs",
        "url": "https://foodwishes.blogspot.com/2007/08/garlic-fennel-and-orange-grilled.html"
    }, {
        "name": "Fennel and Grapefruit Summer Salad",
        "url": "https://www.allrecipes.com/recipe/201175/jennifers-fennel-and-grapefruit-summer-salad"
    }, {
        "name": "Fennel Risotto",
        "url": "https://www.allrecipes.com/recipe/109548/fennel-risotto"
    }, {
        "name": "Potatoes Au Gratin with Fennel and Bacon",
        "url": "https://www.allrecipes.com/recipe/167235/potatoes-au-gratin-with-fennel-and-bacon"
    }],
    "relatedSpices": [20],
    "species": "Foeniculum vulgare",
    "type": 1
}, {
    "synonyms": [],
    "description": "Bean seeds. You can also use the leaves as herbs.",
    "dishes": [2],
    "emoji": "1F347",
    "flavors": [0, 6],
    "foods": [9, 29, 38],
    "id": "fenugreek",
    "imgDesc": "Fenugreek seeds",
    "license": {
        "imgName": "2017 0102 fenugreek seeds",
        "imgURL": "https://commons.wikimedia.org/wiki/File:2017_0102_fenugreek_seeds.jpg",
        "authorName": "Takeaway",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Takeaway",
        "licenseName": "CC BY-SA 4.0"
    },
    "name": "Fenugreek",
    "origin": "Middle Eastern",
    "pairsWith": [23, 7, 29, 40],
    "recipes": [{
        "name": "Makhani Chicken",
        "url": "https://www.allrecipes.com/recipe/24782/makhani-chicken-indian-butter-chicken"
    }, {
        "name": "Red Lentil Soup",
        "url": "https://www.allrecipes.com/recipe/70330/vegan-red-lentil-soup"
    }, {
        "name": "Saag Paneer",
        "url": "https://www.allrecipes.com/recipe/228957/authentic-saag-paneer"
    }],
    "relatedSpices": [16],
    "species": "Trigonella foenum-graecum",
    "type": 1
}, {
    "synonyms": [],
    "description": "A blend often used in Chinese and Taiwanese cuisine.",
    "dishes": [4, 6, 8, 13],
    "emoji": "1F331",
    "flavors": [0, 6, 7],
    "foods": [3, 27, 30, 34, 36, 4, 6, 8, 14],
    "id": "fivespice",
    "imgDesc": "Five-spice powder with all of its base spices",
    "license": {
        "imgName": "Five Spice Powder",
        "imgURL": "https://www.flickr.com/photos/sackton/6834786090",
        "authorName": "Tim Sackton",
        "authorURL": "https://www.flickr.com/photos/sackton/",
        "licenseName": "CC BY-SA 2.0"
    },
    "name": "Five-Spice Powder",
    "origin": "Chinese",
    "pairsWith": [],
    "recipes": [],
    "relatedSpices": [40, 12, 18, 39, 11],
    "species": "",
    "type": 2
}, {
    "synonyms": [],
    "description": "A spice blend meant to warm the body.",
    "dishes": [2, 6, 8, 10, 13],
    "emoji": "1F331",
    "flavors": [0, 6, 7],
    "foods": [4, 26, 27, 29, 33, 7, 12, 19, 21],
    "id": "garammasala",
    "imgDesc": "Nice pile of Garam masala",
    "license": {
        "imgName": "Garammasalaphoto",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Garammasalaphoto.jpg",
        "authorName": "Badagnani",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Badagnani",
        "licenseName": "CC BY 3.0"
    },
    "name": "Garam Masala",
    "origin": "South Asian",
    "pairsWith": [],
    "recipes": [],
    "relatedSpices": [4, 12, 11, 26, 6, 3, 15, 14],
    "species": "",
    "type": 2
}, {
    "synonyms": [],
    "description": "Everyone's favorite vegetable, dried and ground into the best powder.",
    "dishes": [2, 4, 6, 10, 11, 12, 13],
    "emoji": "1F955",
    "flavors": [4],
    "foods": [5, 26, 27, 29, 31, 36, 6, 14, 23, 25],
    "id": "garlicpowder",
    "imgDesc": "A nice scoop of garlic powder",
    "license": {
        "imgName": "Garlic Powder, Penzeys Spices, Arlington Heights MA",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Garlic_Powder,_Penzeys_Spices,_Arlington_Heights_MA.jpg",
        "authorName": "John Phelan",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Faolin42",
        "licenseName": "CC BY-SA 3.0"
    },
    "name": "Garlic Powder",
    "origin": "Central Asian",
    "pairsWith": [0, 12, 14, 15, 23, 30, 31, 35, 37, 44, 45, 2, 7, 10, 17, 27, 29, 32, 39],
    "recipes": [{
        "name": "Creamy Garlic Dip",
        "url": "https://www.allrecipes.com/recipe/24659/creamy-garlic-dip"
    }, {
        "name": "Cheese Garlic Biscuits",
        "url": "https://www.allrecipes.com/recipe/20148/cheese-garlic-biscuits-i"
    }, {
        "name": "Oven Roasted Parmesan Potatoes",
        "url": "https://www.allrecipes.com/recipe/233393/oven-roasted-parmesan-potatoes"
    }],
    "relatedSpices": [9, 10],
    "species": "Allium sativum",
    "type": 1
}, {
    "synonyms": [],
    "description": "A delicious root that can be used fresh or powdered.",
    "dishes": [2, 6, 8, 12, 13, 3],
    "emoji": "1F331",
    "flavors": [6, 7],
    "foods": [2, 27, 29, 31, 34, 36, 6, 9, 19, 21, 22],
    "id": "ginger",
    "imgDesc": "Good chunk of ginger and a knife, for like size comparison I guess?",
    "license": {
        "imgName": "Ingwer 2 fcm",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Ingwer_2_fcm.jpg",
        "authorName": "Frank C. Müller",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Frank_C._M%C3%BCller",
        "licenseName": "CC BY-SA 3.0"
    },
    "name": "Ginger",
    "origin": "South Asian",
    "pairsWith": [22, 0, 2, 6, 11, 12, 15, 30, 28, 4, 13, 17, 19, 25, 39],
    "recipes": [{
        "name": "Gingersnap Cookies",
        "url": "https://www.allrecipes.com/recipe/245440/chef-johns-gingersnap-cookies"
    }, {
        "name": "Ginger-Turmeric Herbal Tea",
        "url": "https://www.allrecipes.com/recipe/242148/ginger-turmeric-herbal-tea"
    }, {
        "name": "Ginger Pork Chops",
        "url": "https://www.allrecipes.com/recipe/53302/grilled-asian-ginger-pork-chops"
    }],
    "relatedSpices": [],
    "species": "Zingiber officinale",
    "type": 1
}, {
    "synonyms": [],
    "description": "A dried herb mix unsurprisingly from Provence, France.",
    "dishes": [4, 12, 6],
    "emoji": "1F33F",
    "flavors": [1],
    "foods": [11, 27, 29, 31, 32, 15, 19, 23, 25],
    "id": "herbsdeprovence",
    "imgDesc": "All those herbs, all those flavors...",
    "license": {
        "imgName": "Auberge Herbes de Provence",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Herbesdeprovence.jpg",
        "authorName": " Karen Booth",
        "authorURL": "https://www.flickr.com/people/frenchtart",
        "licenseName": "CC BY 2.0"
    },
    "name": "Herbes de Provence",
    "origin": "French",
    "pairsWith": [],
    "recipes": [],
    "relatedSpices": [35, 27, 44, 31, 37, 43, 42],
    "species": "",
    "type": 2
}, {
    "synonyms": ["lemon beebrush"],
    "description": "The leaves add a lemon flavor to things, hence the name.",
    "dishes": [3, 6, 5, 10, 16],
    "emoji": "1F33F",
    "flavors": [9, 8],
    "foods": [31, 29, 0, 9, 34],
    "id": "lemonverbena",
    "imgDesc": "Some lemon verbena growing",
    "license": {
        "imgName": "Aloysia citriodora 002",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Aloysia_citriodora_002.jpg",
        "authorName": "H. Zell",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Llez",
        "licenseName": "CC BY-SA 3.0"
    },
    "name": "Lemon Verbena",
    "origin": "South American",
    "pairsWith": [46, 28, 23],
    "recipes": [{
        "name": "Lemon Verbena-Blueberry Muffins",
        "url": "https://www.allrecipes.com/recipe/216030/lemon-verbena-blueberry-muffins"
    }, {
        "name": "Peaches with Lemon Verbena Cream",
        "url": "https://www.bonappetit.com/recipe/peaches-with-lemon-verbena-cream"
    }, {
        "name": "Mint Tea with Lemon Verbena",
        "url": "https://www.simplyrecipes.com/recipes/lemon_verbena_mint_herb_tea"
    }],
    "relatedSpices": [],
    "species": "Aloysia citrodora",
    "type": 0
}, {
    "synonyms": [],
    "description": "The aril - or seed covering - of the nutmeg seed. Prepared as a powder or in strips.",
    "dishes": [3, 0],
    "emoji": "1F331",
    "flavors": [6, 7],
    "foods": [16, 31, 27],
    "id": "mace",
    "imgDesc": "Some slices of mace",
    "license": {
        "imgName": "Mace",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Mace_(%E0%A6%9C%E0%A6%AF%E0%A6%BC%E0%A6%BF%E0%A6%A4%E0%A7%8D%E0%A6%B0%E0%A6%BF).JPG",
        "authorName": "Atudu",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Atudu",
        "licenseName": "CC BY-SA 4.0"
    },
    "name": "Mace",
    "origin": "Indonesian",
    "pairsWith": [4, 3, 15, 0, 17],
    "recipes": [{
        "name": "Sixteenth Century Orange Chicken",
        "url": "https://www.allrecipes.com/recipe/20411/sixteenth-century-orange-chicken"
    }, {
        "name": "Pumpkin Ravioli with Hazelnut Cream Sauce",
        "url": "https://www.allrecipes.com/recipe/11826/pumpkin-ravioli-with-hazelnut-cream-sauce"
    }, {
        "name": "Chocolate Chip Cookies",
        "url": "https://www.allrecipes.com/recipe/26104/a-to-z-everything-but-the-kitchen-sink-chocolate-chip-cookies"
    }],
    "relatedSpices": [21, 30],
    "species": "Myristica fragrans",
    "type": 1
}, {
    "synonyms": ["sweet marjoram"],
    "description": "Lovely leaves that are similar to oregano, but sweeter.",
    "dishes": [12, 11, 10],
    "emoji": "1F33F",
    "flavors": [6, 9],
    "foods": [19, 6, 16, 27, 14],
    "id": "marjoram",
    "imgDesc": "Flowers of the marjoram plant",
    "license": {
        "imgName": "Marjoram flowers",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Marjoram_flowers.jpg",
        "authorName": "SKsiddhartthan",
        "authorURL": "https://commons.wikimedia.org/w/index.php?title=User:Sksiddhartthan",
        "licenseName": "CC BY-SA 4.0"
    },
    "name": "Marjoram",
    "origin": "Mediterranean",
    "pairsWith": [22, 44, 4, 2, 3, 31, 48],
    "recipes": [{
        "name": "Pork Rib Stew with Sage Cornmeal Dumplings",
        "url": "https://www.allrecipes.com/recipe/89257/pork-rib-stew-with-sage-cornmeal-dumplings"
    }, {
        "name": "Chicken Manicotti Alfredo",
        "url": "https://www.allrecipes.com/recipe/12069/chicken-manicotti-alfredo"
    }, {
        "name": "Maple Roast Turkey",
        "url": "https://www.allrecipes.com/recipe/13675/maple-roast-turkey"
    }],
    "relatedSpices": [24, 31],
    "species": "Origanum majorana",
    "type": 0
}, {
    "synonyms": [],
    "description": "The good sweet leaves that you can brush your teeth with.",
    "dishes": [3, 5],
    "emoji": "1F33F",
    "flavors": [6, 10],
    "foods": [11, 31, 34, 13, 17, 19, 23],
    "id": "mint",
    "imgDesc": "A bundle of chocolate mint",
    "license": {
        "imgName": "CSA-Chocolate-Mint",
        "imgURL": "https://commons.wikimedia.org/wiki/File:CSA-Chocolate-Mint.jpg",
        "authorName": "Evan-Amos",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Evan-Amos",
        "licenseName": "Public Domain"
    },
    "name": "Mint",
    "origin": "Worldwide",
    "pairsWith": [7, 15, 23, 25, 10],
    "recipes": [{
        "name": "Grilled Lamb with Mint Orange Sauce",
        "url": "https://www.allrecipes.com/recipe/247363/chef-johns-grilled-lamb-with-mint-orange-sauce"
    }, {
        "name": "Mint Chutney",
        "url": "https://www.allrecipes.com/recipe/83221/mint-chutney"
    }, {
        "name": "Lemon Mint Iced Tea",
        "url": "https://www.allrecipes.com/recipe/217166/lemon-mint-iced-tea"
    }, {
        "name": "Cucumber Raita",
        "url": "https://www.allrecipes.com/recipe/105046/cucumber-raita"
    }],
    "relatedSpices": [],
    "species": "Mentha",
    "type": 0
}, {
    "synonyms": [],
    "description": "Seeds that can be grinded to create a familiar condiment.",
    "dishes": [10, 6, 4],
    "emoji": "1F331",
    "flavors": [5],
    "foods": [3, 16, 27],
    "id": "mustard",
    "imgDesc": "Some mustard seeds",
    "license": {
        "imgName": "Mustard",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Mustard.png",
        "authorName": "Novalis",
        "authorURL": "https://en.wikipedia.org/wiki/User:Novalis",
        "licenseName": "CC BY-SA 3.0"
    },
    "name": "Mustard",
    "origin": "Mediterranean",
    "pairsWith": [4, 22, 17, 19],
    "recipes": [{
        "name": "Cauliflower with Melted Onions and Mustard Seeds",
        "url": "https://www.foodandwine.com/recipes/cauliflower-with-melted-onions-and-mustard-seeds"
    }, {
        "name": "Indian Potatoes with Black and Yellow Mustard Seeds",
        "url": "https://www.myrecipes.com/recipe/indian-potatoes"
    }, {
        "name": "Dijon Mustard",
        "url": "https://foodwishes.blogspot.com/2015/01/hello-its-chef-dijon-from-foodwishescom.html"
    }],
    "relatedSpices": [],
    "species": "Sinapis alba",
    "type": 1
}, {
    "synonyms": [],
    "description": "The dried seeds of the nutmeg tree.",
    "dishes": [8, 11, 14],
    "emoji": "1F347",
    "flavors": [6, 7],
    "foods": [4, 32, 5, 6, 7, 21, 22],
    "id": "nutmeg",
    "imgDesc": "Some nutmeg seeds",
    "license": {
        "imgName": "Muscade",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Muscade.jpg",
        "authorName": "Nataraja",
        "authorURL": "https://fr.wikipedia.org/wiki/Utilisateur:Nataraja",
        "licenseName": "Public Domain"
    },
    "name": "Nutmeg",
    "origin": "Indonesian",
    "pairsWith": [0, 12, 11, 13, 22, 23, 46],
    "recipes": [{
        "name": "Sweet Potato Muffins",
        "url": "https://www.allrecipes.com/recipe/245442/chef-johns-sweet-potato-muffins"
    }, {
        "name": "Baked Stuffed Pumpkin",
        "url": "https://www.allrecipes.com/recipe/13657/baked-stuffed-pumpkin"
    }, {
        "name": "Grilled Jamaican Jerked Pork Loin Chops",
        "url": "https://www.allrecipes.com/recipe/108197/grilled-jamaican-jerked-pork-loin-chops"
    }],
    "relatedSpices": [26],
    "species": "Myristica fragrans",
    "type": 1
}, {
    "synonyms": ["wild marjoram"],
    "description": "Tasty leaves used heavily in Italian-American cuisine.",
    "dishes": [4, 6, 7, 10, 12, 15],
    "emoji": "1F33F",
    "flavors": [1, 0, 7],
    "foods": [1, 3, 14, 15, 19, 21, 23, 26, 27, 29, 31, 32, 34, 37, 25],
    "id": "oregano",
    "imgDesc": "What's better than this? Dried oregano.",
    "license": {
        "imgName": "Oregano",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Oregano_(%E0%A6%85%E0%A6%B0%E0%A7%87%E0%A6%97%E0%A6%BE%E0%A6%A8%E0%A7%8B).JPG",
        "authorName": "Atudu",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Atudu",
        "licenseName": "CC BY-SA 4.0"
    },
    "name": "Oregano",
    "origin": "Mediterranean",
    "pairsWith": [9, 3, 44, 27, 18, 2, 4, 10, 15, 22, 35, 38, 41],
    "recipes": [{
        "name": "Chimichurri",
        "url": "https://www.allrecipes.com/recipe/236375/chef-johns-chimichurri-sauce"
    }, {
        "name": "Baked Tomatoes Oregano",
        "url": "https://www.allrecipes.com/recipe/25243/baked-tomatoes-oregano"
    }, {
        "name": "Minestrone",
        "url": "https://www.allrecipes.com/recipe/100218/corrigans-minestrone"
    }, {
        "name": "Albondigas",
        "url": "https://www.allrecipes.com/recipe/245585/turkey-and-rice-meatballs-albondigas"
    }, {
        "name": "Marinara Sauce",
        "url": "https://www.allrecipes.com/recipe/26293/simple-marinara-sauce"
    }],
    "relatedSpices": [24, 27, 49],
    "species": "Origanum vulgare",
    "type": 0
}, {
    "synonyms": [],
    "description": "Red peppies - like bell peppers - dried and ground up. Can be smoked or sweet.",
    "dishes": [6, 8, 12, 10],
    "emoji": "1F336",
    "flavors": [6, 7],
    "foods": [3, 4, 7, 19, 21, 29, 32, 35, 36],
    "id": "paprika",
    "imgDesc": "A bowl of smoked paprika",
    "license": {
        "imgName": "Spanishsmokedpaprika",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Spanishsmokedpaprika.jpg",
        "authorName": "Badagnani",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Badagnani",
        "licenseName": "CC BY 3.0"
    },
    "name": "Paprika",
    "origin": "Mexican",
    "pairsWith": [22, 9, 6, 11, 15, 7, 42],
    "recipes": [{
        "name": "Shakshouka",
        "url": "https://www.allrecipes.com/recipe/245362/chef-johns-shakshuka"
    }, {
        "name": "Hungarian Mushroom Soup",
        "url": "https://www.allrecipes.com/recipe/17897/hungarian-mushroom-soup"
    }, {
        "name": "Beef Goulash",
        "url": "https://www.allrecipes.com/recipe/231009/chef-johns-beef-goulash"
    }],
    "relatedSpices": [5, 9],
    "species": "Capsicum annuum",
    "type": 1
}, {
    "synonyms": [],
    "description": "Some nice leaves to use as a garnish.",
    "dishes": [7, 12],
    "emoji": "1F33F",
    "flavors": [0],
    "foods": [16, 29, 31, 19, 23],
    "id": "parsley",
    "imgDesc": "Some good ol' parsley leaves",
    "license": {
        "imgName": "Parsley100",
        "imgURL": "https://en.wikipedia.org/wiki/File:Parsley100.jpg",
        "authorName": "Tharish",
        "authorURL": "https://commons.wikimedia.org/w/index.php?title=User:Tharish",
        "licenseName": "CC BY-SA 3.0"
    },
    "name": "Parsley",
    "origin": "Mediterranean",
    "pairsWith": [2, 10, 43, 3, 4, 8, 17],
    "recipes": [{
        "name": "Chicken Kiev",
        "url": "https://www.allrecipes.com/recipe/236703/chef-johns-chicken-kiev"
    }, {
        "name": "Chimichurri",
        "url": "https://www.chowhound.com/recipes/argentine-chimichurri-sauce-28393"
    }, {
        "name": "Hearty Turkey Soup with Parsley Dumplings",
        "url": "https://www.allrecipes.com/recipe/9145/hearty-turkey-soup-with-parsley-dumplings"
    }, {
        "name": "Cioppino",
        "url": "https://www.allrecipes.com/recipe/12816/cioppino"
    }],
    "relatedSpices": [8, 13, 14],
    "species": "Petroselinum crispum",
    "type": 0
}, {
    "synonyms": ["rass el hanout"],
    "description": "A spice blend with no definitive recipe, but usually has around 12 different spices in it.",
    "dishes": [2, 8, 12],
    "emoji": "1F331",
    "flavors": [5, 9],
    "foods": [29, 32, 16, 38],
    "id": "raselhanout",
    "imgDesc": "A good bowl of ras el hanout",
    "license": {
        "imgName": "Ras.el.hanout",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Ras.el.hanout.jpg",
        "authorName": "Sarefo",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Sarefo",
        "licenseName": "CC BY-SA 4.0"
    },
    "name": "Ras el hanout",
    "origin": "North African",
    "pairsWith": [],
    "recipes": [],
    "relatedSpices": [15, 45, 11, 4, 14, 7, 0, 30, 12, 32, 23, 19],
    "species": "",
    "type": 2
}, {
    "synonyms": [],
    "description": "Some good leaves for meats and teas.",
    "dishes": [6, 11, 16, 14],
    "emoji": "1F33F",
    "flavors": [1],
    "foods": [0, 7, 10, 14, 26, 27, 29, 31, 32, 34, 37, 16, 17, 19, 20, 23],
    "id": "rosemary",
    "imgDesc": "Dried rosemary leaves",
    "license": {
        "imgName": "Rosemary",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Rosemary_(%E0%A6%B0%E0%A7%8B%E0%A6%9C%E0%A6%AE%E0%A7%87%E0%A6%B0%E0%A7%80).JPG",
        "authorName": "Atudu",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Atudu",
        "licenseName": "CC BY-SA 4.0"
    },
    "name": "Rosemary",
    "origin": "Mediterranean",
    "pairsWith": [22, 31, 44, 2, 10, 48],
    "recipes": [{
        "name": "Rosemary Pull-Apart Dinner Rolls",
        "url": "https://www.allrecipes.com/recipe/230749/rosemary-pull-apart-dinner-rolls"
    }, {
        "name": "Focaccia",
        "url": "https://foodwishes.blogspot.com/2013/08/focaccia-surprisingly-not-italian-for.html"
    }, {
        "name": "Turkey Mushrooms",
        "url": "https://www.allrecipes.com/recipe/219874/italian-turkey-meatballs"
    }],
    "relatedSpices": [24],
    "species": "Rosmarinus officinalis",
    "type": 0
}, {
    "synonyms": [],
    "description": "The dried threads of the Saffron Crocus flower. One of the most expensive spices in the world.",
    "dishes": [8, 3, 9],
    "emoji": "1F940",
    "flavors": [0, 6],
    "foods": [31, 28, 29, 23, 27],
    "id": "saffron",
    "imgDesc": "Dried saffron threads",
    "license": {
        "imgName": "Safran-Weinviertel Niederreiter 2 Gramm 8285",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Safran-Weinviertel_Niederreiter_2_Gramm_8285.jpg",
        "authorName": "Hubertl",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Hubertl",
        "licenseName": "CC BY-SA 4.0"
    },
    "name": "Saffron",
    "origin": "Mediterranean",
    "pairsWith": [45, 11, 30],
    "recipes": [{
        "name": "Lamb Tagine",
        "url": "https://www.allrecipes.com/recipe/105044/lamb-tagine"
    }, {
        "name": "Saffron Rice",
        "url": "https://www.allrecipes.com/recipe/24376/saffron-rice"
    }],
    "relatedSpices": [],
    "species": "Crocus sativus",
    "type": 1
}, {
    "synonyms": [],
    "description": "Some nice savory leaves.",
    "dishes": [5, 6, 12, 14],
    "emoji": "1F33F",
    "flavors": [7, 1],
    "foods": [0, 21, 27, 28, 31, 34, 37],
    "id": "sage",
    "imgDesc": "Some nice sage growing in a pot",
    "license": {
        "imgName": "Salvia officinalis in vaso",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Salvia_officinalis_in_vaso.JPG",
        "authorName": "Petar43",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Petar43",
        "licenseName": "CC BY-SA 3.0"
    },
    "name": "Sage",
    "origin": "Mediterranean",
    "pairsWith": [48, 3, 22],
    "recipes": [],
    "relatedSpices": [24],
    "species": "Salvia officinalis",
    "type": 0
}, {
    "synonyms": [],
    "description": "One of the oiliest seeds in the world.",
    "dishes": [0, 3, 11, 8],
    "emoji": "1F347",
    "flavors": [1],
    "foods": [27, 31, 38, 4, 36],
    "id": "sesameseeds",
    "imgDesc": "A bowl of roasted sesame seeds",
    "license": {
        "imgName": "Chamkkae (sesame)",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Chamkkae_(sesame).jpg",
        "authorName": "National Institute of Korean Language",
        "authorURL": "https://krdict.korean.go.kr/",
        "licenseName": "CC BY-SA 2.5"
    },
    "name": "Sesame Seeds",
    "origin": "South Asian",
    "pairsWith": [41, 44, 42, 31],
    "recipes": [{
        "name": "Sesame Beef",
        "url": "https://www.allrecipes.com/recipe/14679/sesame-beef"
    }, {
        "name": "Tahini Chicken",
        "url": "https://www.allrecipes.com/recipe/237303/tahini-chicken"
    }, {
        "name": "Sesame Seared Tuna",
        "url": "https://www.allrecipes.com/recipe/71698/sesame-seared-tuna"
    }],
    "relatedSpices": [49],
    "species": "Sesamum indicum",
    "type": 1
}, {
    "synonyms": ["Szechuan pepper"],
    "description": "Seed husks that are very different from black peppercorns. The seeds themselves are not usually used in food.",
    "dishes": [12, 7, 8],
    "emoji": "1F331",
    "flavors": [9, 2],
    "foods": [30, 29, 34, 16],
    "id": "sichuanpepper",
    "imgDesc": "Pile of peppercorns",
    "license": {
        "imgName": "Sechuan pepper",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Sechuan_pepper.jpg",
        "authorName": "Max Ronnersjö",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Maxronnersjo",
        "licenseName": "CC BY-SA 3.0"
    },
    "name": "Sichuan Pepper",
    "origin": "Chinese",
    "pairsWith": [40, 23, 22],
    "recipes": [{
        "name": "Mapo Chicken",
        "url": "https://www.seriouseats.com/recipes/2013/01/mapo-chicken-recipe.html"
    }, {
        "name": "Sichuan-Style Hot and Numbing Sliced Turkey",
        "url": "https://www.seriouseats.com/recipes/2010/11/thanksgiving-leftovers-sichuan-style-hot-and-numbing-sliced-turkey.html"
    }, {
        "name": "Boiled Beef with Chili",
        "url": "https://www.seriouseats.com/recipes/2012/06/sichuan-boiled-beef-recipe.html"
    }],
    "relatedSpices": [20],
    "species": "Zanthoxylum simulans",
    "type": 1
}, {
    "synonyms": ["badiam"],
    "description": "Unrelated to regular anise. Dry up those fruits and seeds and give 'em a good grind!",
    "dishes": [5, 15, 12],
    "emoji": "1F31F",
    "flavors": [0],
    "foods": [27, 34, 30, 29, 23],
    "id": "staranise",
    "imgDesc": "Star anise fruits and seeds",
    "license": {
        "imgName": "Dried Star Anise Fruit Seeds",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Dried_Star_Anise_Fruit_Seeds.jpg",
        "authorName": "Sanjay Acharya",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Sanjay_ach",
        "licenseName": "CC BY-SA 4.0"
    },
    "name": "Star Anise",
    "origin": "Chinese",
    "pairsWith": [12, 11, 4, 18, 6, 19, 39],
    "recipes": [{
        "name": "Beef Pho",
        "url": "https://www.allrecipes.com/recipe/57354/beef-pho"
    }, {
        "name": "Honey-Glazed Ham",
        "url": "https://www.allrecipes.com/recipe/240752/chef-johns-honey-glazed-ham"
    }, {
        "name": "Tangerine Cherry Cranberry Sauce",
        "url": "https://www.allrecipes.com/recipe/222397/tangerine-cherry-cranberry-sauce"
    }, {
        "name": "Tea Leaf Eggs",
        "url": "https://www.allrecipes.com/recipe/51326/chinese-tea-leaf-eggs"
    }],
    "relatedSpices": [20],
    "species": "Illicium verum",
    "type": 1
}, {
    "synonyms": ["sumaq", "sumach"],
    "description": "Dried fruits from the Sumac tree.",
    "dishes": [10, 6, 12],
    "emoji": "1F347",
    "flavors": [8],
    "foods": [31, 38, 29],
    "id": "sumac",
    "imgDesc": "Sumac... for salad",
    "license": {
        "imgName": "Sumac",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Sumac.jpg",
        "authorName": "Webaware",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Webaware",
        "licenseName": "CC BY-SA 3.0"
    },
    "name": "Sumac",
    "origin": "Mediterranean",
    "pairsWith": [44, 31, 38],
    "recipes": [{
        "name": "Tomato Lemon Sumac",
        "url": "https://www.spicemamasf.com/tomato-lemon-sumac"
    }, {
        "name": "Sumac Chicken Thighs",
        "url": "https://cookinglsl.com/one-pan-sumac-chicken-thighs/"
    }, {
        "name": "Grilled Sweet Potato Baba Ghanoush",
        "url": "https://www.bonappetit.com/recipe/grilled-sweet-potato-baba-ghanoush"
    }],
    "relatedSpices": [49],
    "species": "Rhus coriaria",
    "type": 0
}, {
    "synonyms": [],
    "description": "The most commonly used savory in cooking.",
    "dishes": [6, 12, 10, 11],
    "emoji": "1F33F",
    "flavors": [6, 1],
    "foods": [37, 30, 10, 34, 26],
    "id": "summersavory",
    "imgDesc": "Summer savory growing",
    "license": {
        "imgName": "Satureja hortensis bgiu",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Satureja_hortensis_bgiu.jpg",
        "authorName": "Bogdan",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Bogdan",
        "licenseName": "CC BY-SA 3.0"
    },
    "name": "Summer Savory",
    "origin": "Mediterranean",
    "pairsWith": [44, 32, 38],
    "recipes": [{
        "name": "Summer Savory and Garlic Green Beans",
        "url": "https://www.lifesambrosia.com/summer-savory-and-garlic-green-beans-recipe/"
    }, {
        "name": "Marinated Tomatoes with Lemon and Summer Savory",
        "url": "https://www.myrecipes.com/recipe/marinated-tomatoes-with-lemon-summer-savory"
    }],
    "relatedSpices": [24, 48, 49],
    "species": "Satureja hortensis",
    "type": 0
}, {
    "synonyms": ["estragon"],
    "description": "Some lovely leaves found in France and Russia.",
    "dishes": [10, 11],
    "emoji": "1F33F",
    "flavors": [0, 6],
    "foods": [23, 28, 29, 31],
    "id": "tarragon",
    "imgDesc": "Dried tarragon in a lovely jar",
    "license": {
        "imgName": "Dried Taragon",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Dried_Taragon.JPG",
        "authorName": "KVDP",
        "authorURL": "https://en.wikipedia.org/wiki/User:Genetics4good",
        "licenseName": "Public Domain"
    },
    "name": "Tarragon",
    "origin": "Russian",
    "pairsWith": [33, 10, 8],
    "recipes": [{
        "name": "Lobster Thermidor",
        "url": "https://www.allrecipes.com/recipe/262161/chef-johns-lobster-thermidor"
    }, {
        "name": "Tarragon Aioli",
        "url": "https://www.allrecipes.com/recipe/237826/chef-johns-tarragon-aioli"
    }, {
        "name": "Grilled Tarragon Mustard Chicken",
        "url": "https://www.allrecipes.com/recipe/222710/grilled-tarragon-mustard-chicken"
    }],
    "relatedSpices": [24],
    "species": "Artemisia dracunculus",
    "type": 0
}, {
    "synonyms": [],
    "description": "Lovely leaves that retain their flavor when dried much better than most herbs do.",
    "dishes": [4, 6, 10, 12],
    "emoji": "1F33F",
    "flavors": [1],
    "foods": [6, 7, 12, 17, 26, 27, 29, 31, 32, 33, 34, 37, 23, 25],
    "id": "thyme",
    "imgDesc": "It's thyme time",
    "license": {
        "imgName": "Thyme-Bundle",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Thyme-Bundle.jpg",
        "authorName": "Evan-Amos",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Evan-Amos",
        "licenseName": "CC0 1.0"
    },
    "name": "Thyme",
    "origin": "Mediterranean",
    "pairsWith": [31, 35, 41, 13, 3, 2, 4, 10, 22, 27, 38, 42, 48],
    "recipes": [{
        "name": "Grilled Garlic and Herb Shrimp",
        "url": "https://www.allrecipes.com/recipe/244245/chef-johns-grilled-garlic-and-herb-shrimp"
    }, {
        "name": "Quiche Lorraine",
        "url": "https://www.allrecipes.com/recipe/223196/chef-johns-quiche-lorraine"
    }, {
        "name": "Cheddar-Thyme Flaky Biscuits",
        "url": "https://www.allrecipes.com/recipe/150986/cheddar-thyme-flaky-biscuits"
    }, {
        "name": "Lemon Thyme Rice",
        "url": "https://www.allrecipes.com/recipe/31540/lemon-thyme-rice"
    }],
    "relatedSpices": [24, 49],
    "species": "Thymus vulgaris",
    "type": 0
}, {
    "synonyms": [],
    "description": "Tasty root powder. Makes food take on a lovely yellow color if you use too much like I always do.",
    "dishes": [2, 8],
    "emoji": "1F331",
    "flavors": [0, 2],
    "foods": [5, 26, 29, 31, 33, 36, 7, 19, 22],
    "id": "turmeric",
    "imgDesc": "Turmeric in root and powder form",
    "license": {
        "imgName": "Curcuma longa roots",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Curcuma_longa_roots.jpg",
        "authorName": "Simon A. Eugster",
        "authorURL": "https://commons.wikimedia.org/wiki/User:LivingShadow",
        "licenseName": "CC BY-SA 3.0"
    },
    "name": "Turmeric",
    "origin": "South Asian",
    "pairsWith": [6, 22, 4, 15],
    "recipes": [{
        "name": "Peanut Curry Chicken",
        "url": "https://www.allrecipes.com/recipe/244979/chef-johns-peanut-curry-chicken"
    }, {
        "name": "Chicken Tikka Masala",
        "url": "https://www.allrecipes.com/recipe/228446/authentic-chicken-tikka-masala"
    }, {
        "name": "Ginger-Turmeric Herbal Tea",
        "url": "https://www.allrecipes.com/recipe/242148/ginger-turmeric-herbal-tea"
    }, {
        "name": "Turmeric Milk",
        "url": "https://www.allrecipes.com/recipe/244623/turmeric-milk"
    }, {
        "name": "Butter Lamb Gravy",
        "url": "https://www.allrecipes.com/recipe/150812/butter-lamb-gravy"
    }],
    "relatedSpices": [16],
    "species": "Curcuma longa",
    "type": 1
}, {
    "synonyms": [],
    "description": "Dried fruits from the vanilla tree. Not actually beans.",
    "dishes": [3, 16],
    "emoji": "1F368",
    "flavors": [6],
    "foods": [9],
    "id": "vanilla",
    "imgDesc": "Six vanilla fruit pods",
    "license": {
        "imgName": "Vanilla 6beans",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Vanilla_6beans.JPG",
        "authorName": "B.navez",
        "authorURL": "https://commons.wikimedia.org/wiki/User:B.navez",
        "licenseName": "CC BY-SA 3.0"
    },
    "name": "Vanilla",
    "origin": "Mexican",
    "pairsWith": [11, 30, 12, 25],
    "recipes": [{
        "name": "Vanilla Crepes",
        "url": "https://www.allrecipes.com/recipe/95817/vanilla-crepes"
    }, {
        "name": "Vanilla Ice Cream",
        "url": "https://www.allrecipes.com/recipe/233928/how-to-make-vanilla-ice-cream"
    }, {
        "name": "Pastry Cream",
        "url": "https://www.allrecipes.com/recipe/76043/pastry-cream"
    }, {
        "name": "Chocolate Chip Cookies",
        "url": "https://www.allrecipes.com/recipe/10813/best-chocolate-chip-cookies"
    }, {
        "name": "Waffles",
        "url": "https://www.allrecipes.com/recipe/22180/waffles-i"
    }],
    "relatedSpices": [],
    "species": "Vanilla planifolia",
    "type": 0
}, {
    "synonyms": [],
    "description": "The ripe fruit seeds of the peppercorn plant.",
    "dishes": [12, 4, 6, 7, 9, 10],
    "emoji": "1F331",
    "flavors": [5, 2],
    "foods": [16, 23, 29, 19, 39],
    "id": "whitepepper",
    "imgDesc": "A nice diamond of white peppercorns.",
    "license": {
        "imgName": "White pepper whole",
        "imgURL": "https://commons.wikimedia.org/wiki/File:White_pepper_whole.JPG",
        "authorName": "Miansari66",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Miansari66",
        "licenseName": "Public Domain"
    },
    "name": "White Pepper",
    "origin": "Sout Asian",
    "pairsWith": [33, 44, 15, 31, 7, 23, 2, 6, 3, 13, 12, 45, 17, 26, 27, 29, 40],
    "recipes": [{
        "name": "Pfeffernusse",
        "url": "https://www.allrecipes.com/recipe/9822/pfeffernusse"
    }, {
        "name": "Macaroni and Cheese",
        "url": "https://www.allrecipes.com/recipe/219166/chef-johns-macaroni-and-cheese"
    }, {
        "name": "Eggs Benedict",
        "url": "https://www.allrecipes.com/recipe/17205/eggs-benedict"
    }],
    "relatedSpices": [4],
    "species": "Piper nigrum",
    "type": 1
}, {
    "synonyms": ["mountain savory"],
    "description": "You can actually grow it in non-winter seasons, so its name is a bit deceiving.",
    "dishes": [12, 11, 14],
    "emoji": "1F33F",
    "flavors": [5, 1, 0],
    "foods": [26, 29, 37, 31],
    "id": "wintersavory",
    "imgDesc": "Wild winter savory",
    "license": {
        "imgName": "Satureja montana2",
        "imgURL": "https://commons.wikimedia.org/wiki/File:Satureja_montana2.jpg",
        "authorName": "Kurt Stüber",
        "authorURL": "http://www.kurtstueber.de/",
        "licenseName": "CC BY-SA 3.0"
    },
    "name": "Winter Savory",
    "origin": "Mediterranean",
    "pairsWith": [2, 3, 27, 44, 35, 37],
    "recipes": [{
        "name": "Barbecued Anglerfish with Winter Savory",
        "url": "https://backyardpatch.blogspot.com/2015/01/winter-savory-herb-of-week.html"
    }, {
        "name": "Crab Stuffed Mushrooms",
        "url": "https://www.allrecipes.com/recipe/12751/crab-stuffed-mushrooms"
    }],
    "relatedSpices": [42],
    "species": "Satureja montana",
    "type": 0
}, {
    "synonyms": ["satar"],
    "description": "An herb blend that can be combined with olive oil to make a spread.",
    "dishes": [1, 4],
    "emoji": "1F331",
    "flavors": [0, 7],
    "foods": [6, 11, 16, 27, 29, 31, 32, 21, 22],
    "id": "zaatar",
    "imgDesc": "A pile of za'atar",
    "license": {
        "imgName": "ZaatarbyGassan",
        "imgURL": "https://commons.wikimedia.org/wiki/File:ZaatarbyGassan.jpg",
        "authorName": "Sjschen",
        "authorURL": "https://commons.wikimedia.org/wiki/User:Sjschen",
        "licenseName": "CC BY 3.0"
    },
    "name": "Za'atar",
    "origin": "Middle Eastern",
    "pairsWith": [],
    "recipes": [],
    "relatedSpices": [44, 41, 38, 42, 31],
    "species": "",
    "type": 2
}];
export default Spices;