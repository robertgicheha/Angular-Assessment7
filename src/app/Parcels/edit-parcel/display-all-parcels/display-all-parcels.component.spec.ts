import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllParcelsComponent } from './display-all-parcels.component';

describe('DisplayAllParcelsComponent', () => {
  let component: DisplayAllParcelsComponent;
  let fixture: ComponentFixture<DisplayAllParcelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAllParcelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayAllParcelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
