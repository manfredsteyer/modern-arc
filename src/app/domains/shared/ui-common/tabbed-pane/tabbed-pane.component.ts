import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  inject,
  QueryList,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from '../tab/tab.component';
import { TabNavigatorComponent } from '../tab-navigator/tab-navigator.component';
import { TabbedPaneService } from './tabbed-pane.service';

@Component({
  selector: 'app-tabbed-pane',
  standalone: true,
  templateUrl: './tabbed-pane.component.html',
  styleUrls: ['./tabbed-pane.component.css'],
  imports: [CommonModule, TabNavigatorComponent],
  providers: [TabbedPaneService],
})
export class TabbedPaneComponent implements AfterContentInit, AfterViewInit {
  @ContentChildren(TabComponent)
  tabQueryList: QueryList<TabComponent> | undefined;

  @ViewChild('navigator')
  navigator: TabNavigatorComponent | undefined;

  activeTab: TabComponent | undefined;

  currentPage = 0;

  cd = inject(ChangeDetectorRef);
  service = inject(TabbedPaneService);

  get tabs(): TabComponent[] {
    return this.tabQueryList?.toArray() ?? [];
  }

  ngAfterContentInit(): void {
    if (this.tabs.length > 0) {
      this.activate(this.tabs[0]);
    }
  }

  ngAfterViewInit(): void {
    this.service.pageCount.next(this.tabs.length);

    // Use this strategy with caution
    this.cd.detectChanges();

    this.service.currentPage.subscribe((page: number) => {
      // Prevent cycle:
      if (page === this.currentPage) {
        return;
      }
      this.pageChange(page);
    });
  }

  register(tab: TabComponent): void {
    this.tabs.push(tab);
  }

  activate(active: TabComponent): void {
    for (const tab of this.tabs) {
      tab.visible = tab === active;
    }
    this.activeTab = active;

    this.currentPage = this.tabs.indexOf(active);
    this.service.currentPage.next(this.currentPage);
  }

  pageChange(page: number): void {
    this.activate(this.tabs[page]);
  }
}
