import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipes } from '../recipes.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipes>();
  recipes: Recipes[];
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes =this.recipeService.getRecipes();
  }

}
