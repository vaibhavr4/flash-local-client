import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyadComponent } from './view-myad.component';

describe('ViewMyadComponent', () => {
  let component: ViewMyadComponent;
  let fixture: ComponentFixture<ViewMyadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMyadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMyadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
