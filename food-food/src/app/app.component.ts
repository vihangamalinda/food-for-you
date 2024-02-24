import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  loadedFeature ='recipe';
  title = 'food-food'

  onNavigate(feature:string){
    this.loadedFeature =feature;
  }

  isRecipe():boolean{
    return 'recipe' === this.loadedFeature;
  }

  isShoppingList():boolean{
    return 'shopping-list' === this.loadedFeature;
  }
}
