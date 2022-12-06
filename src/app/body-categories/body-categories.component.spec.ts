import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCategoriesComponent } from './body-categories.component';

describe('BodyCategoriesComponent', () => {
  let component: BodyCategoriesComponent;
  let fixture: ComponentFixture<BodyCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
