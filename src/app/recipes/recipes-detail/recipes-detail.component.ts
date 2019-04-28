import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
 @Input() recipeEl:object;
  constructor() { }

  ngOnInit() {
  }

}
