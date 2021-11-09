import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongeUserComponent } from './conge-user.component';

describe('CongeUserComponent', () => {
  let component: CongeUserComponent;
  let fixture: ComponentFixture<CongeUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongeUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
