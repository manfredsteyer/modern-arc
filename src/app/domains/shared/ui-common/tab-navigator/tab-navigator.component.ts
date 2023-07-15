import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabbedPaneService } from '../tabbed-pane/tabbed-pane.service';

@Component({
  selector: 'app-tab-navigator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-navigator.component.html',
  styleUrls: ['./tab-navigator.component.css'],
})
export class TabNavigatorComponent implements OnInit {
  @Input() page = 0;
  @Input() pageCount = 0;
  @Output() pageChange = new EventEmitter<number>();

  service = inject(TabbedPaneService);

  ngOnInit(): void {
    this.service.pageCount.subscribe((pageCount) => {
      this.pageCount = pageCount;
    });
    this.service.currentPage.subscribe((page) => {
      this.page = page;
    });
  }

  prev(): void {
    this.page--;
    if (this.page < 0) {
      this.page = this.pageCount - 1;
    }
    this.pageChange.emit(this.page);
    this.service.currentPage.next(this.page);
  }

  next(): void {
    this.page++;
    if (this.page >= this.pageCount) {
      this.page = 0;
    }
    this.pageChange.emit(this.page);
    this.service.currentPage.next(this.page);
  }
}
