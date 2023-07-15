import {
  Component,
} from '@angular/core';
import { CommonModule } from '@angular/common';
// import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [CommonModule],
})
export class AboutComponent {
}
