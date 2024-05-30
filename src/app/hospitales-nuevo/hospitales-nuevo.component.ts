import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HospitalesService } from '../../services/hospitales.service';
import { Hospital } from '../../models/hospital';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-hospitales-nuevo',
  standalone: true,
  imports: [ReactiveFormsModule, MatSnackBarModule, MatCardModule, MatFormFieldModule, CommonModule, MatInputModule, HttpClientModule],
  templateUrl: './hospitales-nuevo.component.html',
  styleUrl: './hospitales-nuevo.component.scss'
})

export class HospitalesNuevoComponent implements OnInit {

  hospitalForm: FormGroup;

  constructor(

    private fb: FormBuilder,
    private hospitalesService: HospitalesService,
    private snackBar: MatSnackBar

  ) {

    this.hospitalForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      direccion: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]]
    });

  }
  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.hospitalForm.valid) {

      const nuevoHospital: Hospital = this.hospitalForm.value;

      this.hospitalesService.add(nuevoHospital).subscribe({

        next: (data) => {
          this.snackBar.open('Hospital creado exitosamente', 'Cerrar', {
            duration: 3000
          });
          this.hospitalForm.reset();
        },

        error: (error) => {
          console.error('Error al crear el hospital', error);
          this.snackBar.open('Error al crear el hospital', 'Cerrar', {
            duration: 3000
          });
        }

      });
    }
  }
}