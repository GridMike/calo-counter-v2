import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit {

  mealsArr = JSON.parse(localStorage.getItem("meals"));

  constructor() { }

  ngOnInit(): void {
  }

}
