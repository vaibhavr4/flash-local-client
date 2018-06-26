import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAdsAdminComponent } from './my-ads-admin.component';

describe('MyAdsAdminComponent', () => {
  let component: MyAdsAdminComponent;
  let fixture: ComponentFixture<MyAdsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAdsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAdsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
