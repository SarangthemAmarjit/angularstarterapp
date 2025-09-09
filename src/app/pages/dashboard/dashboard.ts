import { CommonModule, NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { Budgetsection } from "../budgetsection/budgetsection";
import { Categorysection } from "../categorysection/categorysection";
import { Dashboardsection } from "../dashboardsection/dashboardsection";
import { Reportsection } from "../reportsection/reportsection";
import { Settingsection } from "../settingsection/settingsection";
import { Transactionsection } from "../transactionsection/transactionsection";
import { LogoutDialogComponent } from './logout-dilog-component';



@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [MatDialogModule, MatIconModule, FaIconComponent, NgFor, CommonModule, Dashboardsection, Transactionsection, Categorysection, Reportsection, Budgetsection, Settingsection],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
  
})
export class Dashboard {
  constructor(private dialog: MatDialog) {}
 pageindex = signal(0);


updatepageind(ind: number) {

if (ind === 6) {
      this.openLogoutDialog();
    }else{
      this.pageindex.set(ind);   // directly set the value

    }

}

  openLogoutDialog() {
    const dialogRef = this.dialog.open(LogoutDialogComponent, {
      width: '350px',
      
      
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // User confirmed logout
        console.log('Logging out...');
        // Call your logout service here
      } else {
        console.log('Logout cancelled');
      }
    });
  }



menuItems = [
  { icon: 'house', label: 'Dashboard' },
  { icon: 'wallet', label: 'Transactions' },
  { icon: 'th-large', label: 'Categories' },
  { icon: 'chart-bar', label: 'Reports' },
  { icon: 'money-check-alt', label: 'Budget Planner' },
  { icon: 'cog', label: 'Settings' },
  { icon: 'sign-out-alt', label: 'Logout' }
];



}


