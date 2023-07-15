import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from '@demo/shared/util-logger';
import { AuthService } from '@demo/shared/util-auth';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  logger = inject(LoggerService);
  auth = inject(AuthService);

  constructor() {
    this.logger.debug('home', 'debug');
    this.logger.info('home', 'info');
    this.logger.error('home', 'error');
  }
}
