import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalesNuevoComponent } from './hospitales-nuevo.component';

describe('HospitalesNuevoComponent', () => {
  let component: HospitalesNuevoComponent;
  let fixture: ComponentFixture<HospitalesNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalesNuevoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HospitalesNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
