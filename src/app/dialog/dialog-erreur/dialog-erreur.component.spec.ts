import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogErreurComponent } from './dialog-erreur.component';

describe('DialogErreurComponent', () => {
  let component: DialogErreurComponent;
  let fixture: ComponentFixture<DialogErreurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogErreurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogErreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
