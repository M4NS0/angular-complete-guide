import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // @Input Example
  // the reciver will get the recipe from the parent component
  // the @Input component will recive a value from the recipe-list.component.html in <app-recipe-item *ngFor="let recipesEl of recipes">
  // and will be used in the recipe-item.component.html interpolations
  // the *ngFor will work with the recipe-list.component.html
  

  @Input()
  recipe!: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
