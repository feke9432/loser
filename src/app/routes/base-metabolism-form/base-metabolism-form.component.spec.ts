import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseMetabolismFormComponent } from './base-metabolism-form.component';

describe('BaseMetabolismFormComponent', () => {
  let component: BaseMetabolismFormComponent;
  let fixture: ComponentFixture<BaseMetabolismFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseMetabolismFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseMetabolismFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
