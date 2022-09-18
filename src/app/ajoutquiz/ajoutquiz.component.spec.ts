import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutquizComponent } from './ajoutquiz.component';

describe('AjoutquizComponent', () => {
  let component: AjoutquizComponent;
  let fixture: ComponentFixture<AjoutquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutquizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
