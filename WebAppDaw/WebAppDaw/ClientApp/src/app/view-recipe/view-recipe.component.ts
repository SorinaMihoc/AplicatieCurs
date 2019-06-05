import { Component, OnInit } from '@angular/core';
import { Food } from '../home/food';
import { RecipesService } from '../home/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ok } from 'assert';


@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit {

  food = new Food();
  foodId: string;
  router: Router;
  constructor(private recipeService: RecipesService,
    private route: ActivatedRoute) {
    this.foodId = this.route.snapshot.params['id'];
    this.recipeService.listFoods().subscribe(res => {
      this.food = res.find(x => x.id == this.foodId);
    });
  }
  ngOnInit() {
  }

  deleteFood(food: Food) {
    this.recipeService.deleteFood(food.id).subscribe(x => {
      this.router.navigate(['']);
    });
  }
  
}
