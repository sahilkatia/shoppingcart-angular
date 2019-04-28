import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipe.modal';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe:object;
  showRecipe:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  getSelectedRecipe(recipe:Recipe){
   this.selectedRecipe = recipe;
   this.showRecipe = true;
  }
}
