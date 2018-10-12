import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { WidgetDialogComponent } from './widget-dialog.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('WidgetDialogComponent', () => {
  let component: WidgetDialogComponent;
  let fixture: ComponentFixture<WidgetDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatSelectModule
      ],
      declarations: [ WidgetDialogComponent ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: {
          widget: {
            id: 0,
            name: '',
            color: '',
            description: '',
            size_id: 0,
            machine_id: 0
          }
        }},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
