import { Ingredient } from './ingredient.model';

export class Recipe {
  constructor(
    public id: string,
    public name: string,
    public image: string,
    public ingredients: Array<Ingredient>,
    public introduction: string,
    public preparation: string
  ) {}
}
