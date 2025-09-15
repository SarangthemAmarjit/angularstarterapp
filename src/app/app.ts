
import { Component } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Dashboard } from "./pages/dashboard/dashboard";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [Dashboard, FontAwesomeModule],

  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas); // ✅ makes all solid icons available by name
  }
}
