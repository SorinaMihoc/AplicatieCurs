import { Component, OnInit } from '@angular/core';
import { Food } from '../home/food';
import { RecipesService } from '../home/recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  food = new Food();
  constructor(private foodService: RecipesService,
              private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.foodService.postFood(this.food).subscribe(res => {
      this.router.navigate(['']);
    });
  }
}
