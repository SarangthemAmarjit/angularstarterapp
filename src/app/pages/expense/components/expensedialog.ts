import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Select, SelectModule } from 'primeng/select';



interface City {
  name: string;
  code: string;
}

@Component({
  standalone: true,
  selector: 'app-logout-dialog',
  templateUrl: "./expensedialog.html",
  styleUrl: "./expensedialog.scss",
  imports: [MatDialogModule, Select, FormsModule,   // 👈 required for [(ngModel)]
    SelectModule]  // 👈 required for p-select],



})
export class AddExpenseDialog implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddExpenseDialog>,) { }


  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  cities: City[] | undefined;

  selectedCity: City | undefined;

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }


}
