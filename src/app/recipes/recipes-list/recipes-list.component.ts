import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../../shared/recipe.modal";


@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent implements OnInit {


  @Output() selectedRecipe = new EventEmitter();

  recipes: Recipe[] = [
    new Recipe(
      "A test recipe1",
      "This is simply a test",
      "https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=ULkGk3Pn "
    ),

    new Recipe(
      "A test recipe2",
      "This is simply a test2",
      "https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=ULkGk3Pn "
    )
  ];

  constructor() {}

  ngOnInit() {}

  getRecipe(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
