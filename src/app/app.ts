import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from "./pages/dashboard/dashboard";
import { MatIconModule } from '@angular/material/icon';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone:true,
  selector: 'app-root',
  imports: [ Dashboard,FontAwesomeModule],
  
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
   constructor(library: FaIconLibrary) {
    library.addIconPacks(fas); // ✅ makes all solid icons available by name
  }
}
