import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Widget, Machine, Size } from '../widget';
import { WidgetService } from '../services/widget.service';

export interface DialogData {
  widget: Widget;
}

@Component({
  selector: 'app-widget-dialog',
  templateUrl: './widget-dialog.component.html',
  styleUrls: ['./widget-dialog.component.css']
})
export class WidgetDialogComponent {
  machines: Machine[];
  sizes: Size[];

  widgetForm: FormGroup = this.fb.group({
    id: [this.data.widget.id? this.data.widget.id : ''],
    name: [this.data.widget.id? this.data.widget.name: '', Validators.required],
    description: [this.data.widget.id? this.data.widget.description: '', Validators.required],
    color: [this.data.widget.id? this.data.widget.color: '', Validators.required],
    size_id: [{value: this.data.widget.id? this.data.widget.size.id: '', disabled: true}],
    machine_id: [{value: this.data.widget.id? this.data.widget.machine.id: '', disabled: true}]
  });

  constructor(
    public dialogRef: MatDialogRef<WidgetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder,
    private widgetService: WidgetService
  ) {}

  ngOnInit() {
    this.getMachines();
    this.getSizes();
  }

  getMachines(): void {
    this.widgetService.getMachines()
      .subscribe(machines => {
        this.machines = machines;
        this.widgetForm.controls.size_id.enable();
      });
  }

  getSizes(): void {
    this.widgetService.getSizes()
      .subscribe(sizes => {
        this.sizes = sizes;
        this.widgetForm.controls.machine_id.enable();
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
