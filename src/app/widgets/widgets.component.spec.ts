import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { WidgetsComponent } from './widgets.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

describe('WidgetsComponent', () => {
  let component: WidgetsComponent;
  let fixture: ComponentFixture<WidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatIconModule,
        MatListModule,
        MatDialogModule
      ],
      declarations: [ WidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
