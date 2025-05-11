import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeansCategoriesListComponent } from './jeans-categories-list.component';

describe('JeansCategoriesListComponent', () => {
  let component: JeansCategoriesListComponent;
  let fixture: ComponentFixture<JeansCategoriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JeansCategoriesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeansCategoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
