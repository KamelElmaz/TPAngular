import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuvejerseyComponent } from './juvejersey.component';

describe('JuvejerseyComponent', () => {
  let component: JuvejerseyComponent;
  let fixture: ComponentFixture<JuvejerseyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuvejerseyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuvejerseyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
