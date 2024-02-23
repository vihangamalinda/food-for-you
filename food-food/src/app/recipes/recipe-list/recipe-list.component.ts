import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes:Recipe[]=[
    new Recipe("test Recipe","test desc","assets/img/mario1_input.png"),
    new Recipe("test Recipe","test desc","assets/img/mario1_input.png")

  ]

}
