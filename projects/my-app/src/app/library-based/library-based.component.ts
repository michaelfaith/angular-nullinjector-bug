import { Component } from '@angular/core';
import { TestLibComponent } from 'my-lib';

@Component({
  selector: 'app-library-based',
  standalone: true,
  imports: [TestLibComponent],
  templateUrl: './library-based.component.html',
  styleUrls: ['./library-based.component.css']
})
export class LibraryBasedComponent {

}
