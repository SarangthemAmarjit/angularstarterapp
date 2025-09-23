import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Select, SelectModule } from 'primeng/select';
import { ExpenseService } from '../../../services/expense';

interface ExpenseCatergory {
  name: string;
}

@Component({
  standalone: true,
  selector: 'app-logout-dialog',
  templateUrl: './expensedialog.html',
  styleUrl: './expensedialog.scss',
  imports: [
    MatDialogModule,
    Select,
    FormsModule, // 👈 required for [(ngModel)]
    ReactiveFormsModule,
    SelectModule,
  ], // 👈 required for p-select],
})
export class AddExpenseDialog implements OnInit {
  constructor(private dialogRef: MatDialogRef<AddExpenseDialog>, private fb: FormBuilder) {}
  expenseService = inject(ExpenseService);
  onCancel(): void {
    this.dialogRef.close(false);
  }
  expenseForm!: FormGroup;
  expensecategory: ExpenseCatergory[] | undefined;

  selectedCity: ExpenseCatergory | undefined;
  onConfirm(): void {
    this.expenseService.addExpense(this.expenseForm.value).subscribe((result) => {
      console.log('Expense added:', result);
      // Optionally, you can close the dialog here if needed
      this.dialogRef.close(true);
    });
  }

  ngOnInit() {
    this.expensecategory = [
      { name: 'Electric Bill' },
      { name: 'Water Bill' },
      { name: 'Mobile Recharge' },
      { name: 'Grocery Items' },
      { name: 'Clothes' },
    ];

    this.expenseForm = this.fb.group({
      expenseDetails: ['', Validators.required],
      amount: [null, [Validators.required, Validators.min(1)]],
      category: ['', Validators.required],
      expenseDate: [new Date().toISOString()], // default to today
    });
  }
}
