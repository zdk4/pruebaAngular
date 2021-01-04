import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarLenguajeComponent } from './enviar-lenguaje.component';

describe('EnviarLenguajeComponent', () => {
  let component: EnviarLenguajeComponent;
  let fixture: ComponentFixture<EnviarLenguajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarLenguajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarLenguajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
