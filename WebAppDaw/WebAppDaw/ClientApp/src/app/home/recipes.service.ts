import { Component, Injectable ,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from './food';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    
  }

  listFoods() {
    return this.http.get<Food[]>(this.baseUrl + 'api/Foods/GetFoods');
  }

  loadFood(foodID: string) {
    return this.http.get<Food>(this.baseUrl + `api/Foods/GetFood?foodID=${foodID}`);
  }

  postFood(food: Food) {
    return this.http.post<any>(this.baseUrl + `api/Foods/PostFood`, food);
  }

  deleteFood(foodId: string) {
    return this.http.delete<any>(this.baseUrl + `api/Foods/DeleteFood/${foodId}`);
  }
}
