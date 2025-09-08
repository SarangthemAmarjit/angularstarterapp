import { Component } from '@angular/core';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';




@Component({
  selector: 'app-logout-dialog',
  templateUrl: "./logout.html",
  styleUrl:"./logout.scss",
  imports: [MatDialogContent, MatDialogActions]
  ,

})
export class LogoutDialogComponent {
  constructor(private dialogRef: MatDialogRef<LogoutDialogComponent>) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
