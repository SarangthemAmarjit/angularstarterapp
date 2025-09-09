import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';




@Component({
  selector: 'app-logout-dialog',
  templateUrl: "./expensedialog.html",
  styleUrl:"./expensedialog.scss",
 
  

})
export class AddExpenseDialog {
  constructor(private dialogRef: MatDialogRef<AddExpenseDialog>) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
