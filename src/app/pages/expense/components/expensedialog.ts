import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';




@Component({
  selector: 'app-logout-dialog',
  templateUrl: "./expensedialog.html",
  styleUrl: "./expensedialog.scss",
  imports: [MatDialogModule],



})
export class AddExpenseDialog {
  constructor(private dialogRef: MatDialogRef<AddExpenseDialog>) { }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
