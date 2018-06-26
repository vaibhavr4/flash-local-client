import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdControlComponent } from './admin-ad-control.component';

describe('AdminAdControlComponent', () => {
  let component: AdminAdControlComponent;
  let fixture: ComponentFixture<AdminAdControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAdControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
