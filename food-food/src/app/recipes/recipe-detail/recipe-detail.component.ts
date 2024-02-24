import { Component,Input, OnChanges, SimpleChanges } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
   console.log("this.recipe " ,this.recipe);
  }
  @Input("selectedRecipe")recipe:Recipe;

}
