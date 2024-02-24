import { Component,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

  @Output("recipeDetailEvent") loadRecipeDetailEvent:EventEmitter<Recipe> = new EventEmitter<Recipe>();

  recipes:Recipe[]=[
    new Recipe("test Recipe","test description 1","https://www.howtocook.recipes/wp-content/uploads/2022/11/rare-steak-recipejpg-500x375.jpg"),
    new Recipe("test Recipe","test description 2","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfohntZ89lXWO4u_9htNEsXumDFPrloVuq26cLUj4yw&s")
  ]


  loadRecipeDetail(recipe:Recipe){
    this.loadRecipeDetailEvent.emit(recipe);
  }
}
