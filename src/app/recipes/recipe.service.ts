import { Recipe } from "./recipes.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Recipe one', 'First description', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('Recipe two', 'Second description', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('Recipe three', 'Third description', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    ];

    getRecipes() {
        // slice will return a new array copied from the recipes array, only get a copy
        return this.recipes.slice();
    }
}