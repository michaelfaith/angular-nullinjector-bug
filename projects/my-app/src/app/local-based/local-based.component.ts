import { Component } from '@angular/core';

import { TooltipTestComponent } from '../shared/tooltip-test/tooltip-test.component';

@Component({
  selector: 'app-local-based',
  standalone: true,
  imports: [TooltipTestComponent],
  templateUrl: './local-based.component.html',
  styleUrls: ['./local-based.component.css']
})
export class LocalBasedComponent {

}
