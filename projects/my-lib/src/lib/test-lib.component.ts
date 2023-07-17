import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'lib-test-lib',
  template: `
    <button mat-raised-button matTooltip="This is a tooltip">I also has tooltip (lib)</button>
  `,
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule],
})
export class TestLibComponent {

}
