import { Component, OnInit,  ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.modal';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInput: ElementRef;
@ViewChild('amountInput') amountInput: ElementRef;

@Output() ingredients = new EventEmitter();


  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
  }
  
  addIngredients(ingredients:Ingredient){
   ingredients = {name:this.nameInput.nativeElement.value, amount: this.amountInput.nativeElement.value };
   this.ingredients.emit(ingredients);
  }

  ingredientsForm = this.formBuilder.group({
    name:[''],
    amount:['']
  });
}
