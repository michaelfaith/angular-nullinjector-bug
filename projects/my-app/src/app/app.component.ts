import { Component } from '@angular/core';

import { TooltipTestComponent } from './shared/tooltip-test/tooltip-test.component';
import { LocalBasedComponent } from './local-based/local-based.component';
import { LibraryBasedComponent } from './library-based/library-based.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [LocalBasedComponent, LibraryBasedComponent],
})
export class AppComponent {
}
