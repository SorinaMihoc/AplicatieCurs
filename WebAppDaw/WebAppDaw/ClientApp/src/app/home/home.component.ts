import { Component } from '@angular/core';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods;

  constructor(private recipeService: RecipesService) {

    this.recipeService.listFoods().subscribe(res => {
        this.foods = res;
      });
    
  }
}
