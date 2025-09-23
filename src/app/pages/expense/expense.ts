import { NgFor } from '@angular/common';
import { Component, inject, Injectable, OnInit, signal } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { catchError } from 'rxjs';
import { ExpenseModel } from '../../model/expensemodel';
import { ExpenseService } from '../../services/expense';
import { AddExpenseDialog } from './components/expensedialog';

@Component({
  standalone: true, // ✅ important
  selector: 'app-expense',
  imports: [FaIconComponent, NgFor, MatDialogModule],
  templateUrl: './expense.html',
  styleUrl: './expense.scss',
})
@Injectable({ providedIn: 'root' }) // ✅
export class Expense implements OnInit {
  constructor(private dialog: MatDialog) {}

  expenseService = inject(ExpenseService);
  expenses = signal(<Array<ExpenseModel>>[]);

  categorynames = ['details', 'amount', 'category', 'expenseDate', 'actions'];

  ngOnInit(): void {
    this.getallexpense();
  }

  getallexpense() {
    this.expenseService
      .getExpenses()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((data) => {
        this.expenses.set(data);
      });
  }

  showaddexpensedialog() {
    const dialogRef = this.dialog.open(AddExpenseDialog, {
      width: '350px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((addedExpense) => {
      if (addedExpense) {
        // Refresh the expense list
        this.getallexpense();
      }
    });
  }
}
