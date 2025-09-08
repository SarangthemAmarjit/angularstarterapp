import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";


@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [MatIconModule, FaIconComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
