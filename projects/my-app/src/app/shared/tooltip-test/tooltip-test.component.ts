import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-tooltip-test',
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule],
  templateUrl: './tooltip-test.component.html',
  styleUrls: ['./tooltip-test.component.css']
})
export class TooltipTestComponent {}
