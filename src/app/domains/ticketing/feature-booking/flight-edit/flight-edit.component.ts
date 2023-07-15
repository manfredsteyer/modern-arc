import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Dialog } from '@angular/cdk/dialog';
import { ConfirmComponent, DateCvaDirective } from '@demo/shared/ui-common';
import { initFlight } from '@demo/ticketing/data';
import { CanExit } from '@demo/shared/util-common';

@Component({
  selector: 'app-flight-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, DateCvaDirective],
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css'],
})
export class FlightEditComponent implements OnInit, CanExit {
  private route = inject(ActivatedRoute);
  private dialog = inject(Dialog);

  id = '';
  showDetails = '';
  flight = initFlight;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id') ?? '';
      this.showDetails = params.get('showDetails') ?? '';
    });

    this.route.data.subscribe((data) => {
      this.flight = data['flight'];
    });
  }

  canExit(): Observable<boolean> {
    const confirm = this.dialog.open(ConfirmComponent, {
      data: 'Do you really want to leave me?',
    });
    return confirm.closed as Observable<boolean>;
  }
}
