import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesandopagoComponent } from './procesandopago.component';

describe('ProcesandopagoComponent', () => {
  let component: ProcesandopagoComponent;
  let fixture: ComponentFixture<ProcesandopagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesandopagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesandopagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
