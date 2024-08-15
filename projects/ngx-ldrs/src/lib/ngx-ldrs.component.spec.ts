import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLdrsComponent } from './ngx-ldrs.component';

describe('NgxLdrsComponent', () => {
  let component: NgxLdrsComponent;
  let fixture: ComponentFixture<NgxLdrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxLdrsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxLdrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
