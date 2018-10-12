import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { WidgetService } from './widget.service';

describe('WidgetService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: WidgetService = TestBed.get(WidgetService);
    expect(service).toBeTruthy();
  });
});
