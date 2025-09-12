import { CommonModule, NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { Budgetsection } from "../budgetsection/budgetsection";
import { Categorysection } from "../categorysection/categorysection";
import { Dashboardsection } from "../dashboardsection/dashboardsection";
import { Expense } from "../expense/expense";
import { Reportsection } from "../reportsection/reportsection";
import { Settingsection } from "../settingsection/settingsection";
import { Transactionsection } from "../transactionsection/transactionsection";


@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [ConfirmDialog, ToastModule, ButtonModule, MatDialogModule, MatIconModule, FaIconComponent, NgFor, CommonModule, Dashboardsection, Transactionsection, Categorysection, Reportsection, Budgetsection, Settingsection, Expense],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  providers: [ConfirmationService, MessageService],


})
export class Dashboard {
  constructor(private dialog: MatDialog, private confirmationService: ConfirmationService, private messageService: MessageService) { }
  pageindex = signal(0);


  updatepageind(ind: number) {

    if (ind !== 7) {
      this.pageindex.set(ind);
    }

  }



  confirm2(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to Logout?',
      header: ' Confirm LogOut ',
      icon: 'pi pi-info-circle',
      rejectLabel: 'Cancel',

           // custom class for dialog
     // custom class for content
      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Logout',
        severity: 'danger',
      },

      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      },
    });
  }



  menuItems = [
    { icon: 'house', label: 'Dashboard' },
    { icon: 'money-check-dollar', label: 'Expenses' },
    { icon: 'wallet', label: 'Transactions' },
    { icon: 'th-large', label: 'Categories' },
    { icon: 'chart-bar', label: 'Reports' },
    { icon: 'money-check-alt', label: 'Budget Planner' },
    { icon: 'cog', label: 'Settings' },
    { icon: 'sign-out-alt', label: 'Logout' }
  ];



}


