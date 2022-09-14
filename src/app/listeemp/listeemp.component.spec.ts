import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeempComponent } from './listeemp.component';

describe('ListeempComponent', () => {
  let component: ListeempComponent;
  let fixture: ComponentFixture<ListeempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
