import { TestBed, async } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WidgetsComponent } from './widgets/widgets.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatDialogModule,
        MatListModule,
        MatIconModule,
        MatButtonToggleModule,
        MatToolbarModule,
        MatProgressBarModule,
        MatTooltipModule
      ],
      declarations: [
        AppComponent,
        WidgetsComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'walles-widgets'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("Walle's Widgets");
  });

  it('should render title in a mat-toolbar', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-toolbar').textContent).toContain("Walle's Widgets");
  });
});
