import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalesEditarComponent } from './hospitales-editar.component';

describe('HospitalesEditarComponent', () => {
  let component: HospitalesEditarComponent;
  let fixture: ComponentFixture<HospitalesEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalesEditarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HospitalesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
