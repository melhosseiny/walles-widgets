import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Widget, Machine, Size } from '../widget';
import { WidgetService } from '../services/widget.service';
import { WidgetDialogComponent } from '../widget-dialog/widget-dialog.component';

const colors = ['orange','pink','green','cyan','blue','violet'];

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  loading = false;
  widgets: Widget[];
  filteredWidgets: Widget[];
  filteringEnabled: boolean;

  constructor(
    private widgetService: WidgetService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getWidgets();
  }

  openWidgetDialog(widget?: Widget): void {
    const dialogRef = this.dialog.open(WidgetDialogComponent, {
      width: '320px',
      data: {
        widget: widget? widget : {},
        colors: colors
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (!result) { return; }
      this.loading = true;

      if (result.id) { // edit
        this.widgetService.updateWidget(result)
          .subscribe(
            _ => {
              this.loading = false;
              return this.getWidgets();
            });
      } else { // add
        this.widgetService.addWidget(result)
          .subscribe(
            _ => {
              this.loading = false;
              return this.getWidgets();
            }
          );
      }
    });
  }

  getWidgets(): void {
    this.loading = true;
    this.widgetService.getWidgets()
      .subscribe(widgets => this.widgets = widgets.filter(
        (widget: Widget) => {
          this.loading = false;
          return colors.includes(widget.color.toLowerCase());
        }
      ));
  }

  getProcessedWidgets(): Widget[] {
    if (this.filteringEnabled) {
      return this.filteredWidgets;
    } else {
      return this.widgets;
    }
  }

  filterByColor(selected): void {
    if (!selected.length) {
      this.filteringEnabled = false;
      return;
    }
    let selectedColors = selected.map(button => button.value);
    this.filteringEnabled = true;
    this.filteredWidgets = this.widgets.filter(
      widget => selectedColors.includes(widget.color.toLowerCase())
    );
  }

  getColors(): Set<string> {
    let colors: Set<string> = new Set();

    this.widgets.forEach(
    widget => colors.add(widget.color.toLowerCase())
    );

    return colors;
  }
}
