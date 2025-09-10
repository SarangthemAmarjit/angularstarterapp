import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { AddExpenseDialog } from './components/expensedialog';


export interface Expensedata {
  details: string;
  amount: number;
  category: string;
  expenseDate: string;
}

@Component({
  standalone: true,   // ✅ important
  selector: 'app-expense',
  imports: [FaIconComponent, NgFor, MatDialogModule],
  templateUrl: './expense.html',
  styleUrl: './expense.scss'
})
export class Expense {
  constructor(private dialog: MatDialog) { }

  categorynames = ['details', 'amount', 'category', 'expenseDate', 'actions'];

  expenses: Expensedata[] = [
    {
      details: 'Lunch at Café', amount: 250, category: 'Food & Dining', expenseDate: '2025-09-05',

    },
    {
      details: 'Bus Ticket', amount: 50, category: 'Travel', expenseDate: '2025-09-04',

    },
    {
      details: 'Electricity Bill', amount: 1200, category: 'Utilities', expenseDate: '2025-09-01',

    },
    {
      details: 'Netflix Subscription', amount: 499, category: 'Entertainment', expenseDate: '2025-08-28',

    },
    {
      details: 'Grocery Shopping', amount: 2000, category: 'Groceries', expenseDate: '2025-08-27',

    },
  ];

  showaddexpensedialog() {
    const dialogRef = this.dialog.open(AddExpenseDialog, {
      width: '350px',
      disableClose: true

    });

  }

}
