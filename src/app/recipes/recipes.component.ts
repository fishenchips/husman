import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipes: Array<Recipe> = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
}
