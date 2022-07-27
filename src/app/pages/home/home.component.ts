import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MealInterface } from '../../interfaces/meal';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  uuid = uuidv4();
  meals = JSON.parse(localStorage.getItem("meals") || "[]");
  mealsCaloArr = this.meals.map(item => {
      return item.calories 
  })
  sumOfCalo = this.mealsCaloArr.reduce((a, b) => a + b, 0);
  addMealForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.addMealForm = new FormGroup(
      {
        id: new FormControl(uuidv4()),
        name: new FormControl(null),
        calories: new FormControl(null),
      }
    );
    console.log(localStorage);
  }

  onSubmit(): void {
    this.meals.push(this.addMealForm.value);
    localStorage.setItem("meals", JSON.stringify(this.meals));
    console.log(this.meals);
    this.addMealForm.reset();
  }
}
