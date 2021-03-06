import { Recipes } from "../recipes/recipes.model"
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingrediente.model";



export class RecipeService {

    recipeSelected = new EventEmitter<Recipes>();

    private recipes: Recipes[] = [
        new Recipes('AMERICANO', 'This is a simply test', 'http://assets.tiempo.com.mx/uploads/imagen/imagen/157569/cafe.jpg',
            [ 
            new Ingredient('bread',2),
            new Ingredient('apple',2)
            ]
        ),
        new Recipes('CAFE LATTE', 'This is a simply test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmGvSnZRV2h3fHsv8x8ZJTGmHGrtLQCtc9R84dq2G6FlP-VRqb', [ 
            new Ingredient('bread',2),
            new Ingredient('apple',2)
            ]),
        
        new Recipes('EXPRESSO', 'This is a simply test', 'https://ichef.bbci.co.uk/news/624/cpsprodpb/DE3F/production/_90059865_cafearriba.jpg', [ 
            new Ingredient('bread',2),
            new Ingredient('apple',2)
            ])
    ];
    getRecipes() {
        return this.recipes.slice();
    }
}