import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HospitalesService } from '../../services/hospitales.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Hospital } from '../../models/hospital';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hospitales-editar',
  standalone: true,
  imports: [ ReactiveFormsModule, MatSnackBarModule, MatCardModule, MatFormFieldModule, CommonModule, MatInputModule, HttpClientModule],
  templateUrl: './hospitales-editar.component.html',
  styleUrl: './hospitales-editar.component.scss'
})
export class HospitalesEditarComponent implements OnInit {

  hospitalForm: FormGroup;
  hospitalId: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private hospitalesService: HospitalesService,
    private snackBar: MatSnackBar
  ) { 
    this.hospitalForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      direccion: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]]
    });
    this.hospitalId = '';
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.hospitalId = params.get('id') || '';
      if (this.hospitalId) {
        this.hospitalesService.getHospitalById(this.hospitalId).subscribe(hospital => {
          this.hospitalForm.patchValue(hospital);
        });
      }
    });
  }

  onSubmit(): void {
    if (this.hospitalForm.valid) {

      const hospital = this.hospitalForm.value;
      hospital.id = this.hospitalId;
      
      this.hospitalesService.update(hospital).subscribe({
        next: (data) => {
          this.snackBar.open('Hospital actualizado exitosamente', 'Cerrar', {
            duration: 3000
          });
          this.router.navigate(['/hospitales']);
        },
        error: (error) => {
          console.error('Error al actualizar el hospital', error);
          this.snackBar.open('Error al actualizar el hospital', 'Cerrar', {
            duration: 3000
          });
        }
      });
    }    
  }

}
