import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Array<Recipe> = [
    new Recipe(
      '1',
      'Chili Corn Carne',
      '',
      [
        new Ingredient('Nötfärs', '500 g'),
        new Ingredient('Ris', '3 dl'),
        new Ingredient('Krossade Tomater', '1 packet'),
        new Ingredient('Salt & Peppar', 'Generöst'),
      ],
      'Grymt för en tidig höstkväll.',
      'just do it 4Head'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() {}
}
