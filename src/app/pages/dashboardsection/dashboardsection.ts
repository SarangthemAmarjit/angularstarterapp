import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-dashboardsection',
  imports: [FaIconComponent, NgFor],
  templateUrl: './dashboardsection.html',
  styleUrl: './dashboardsection.scss'
})
export class Dashboardsection {

  dashboarditems = [
  { value: 5000, label: 'Total Balance' },
  { value: 3000, label: 'Total Income' },
  { value: 2000, label: 'Total Expense' },
  { value: 1000, label: 'Budget Remaining' },

];

}
