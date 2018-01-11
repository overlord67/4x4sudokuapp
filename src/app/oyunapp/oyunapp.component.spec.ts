import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OyunappComponent } from './oyunapp.component';

describe('OyunappComponent', () => {
  let component: OyunappComponent;
  let fixture: ComponentFixture<OyunappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OyunappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OyunappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
