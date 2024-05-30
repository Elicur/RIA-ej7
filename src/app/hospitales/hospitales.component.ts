import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital';
import { HospitalesService } from '../../services/hospitales.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-hospitales',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule, MatCardModule, MatInputModule, ReactiveFormsModule, FormsModule, RouterModule],
  providers: [HttpClient, HospitalesService],
  templateUrl: './hospitales.component.html',
  styleUrl: './hospitales.component.scss'
})
export class HospitalesComponent implements OnInit{

  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });
  
  public hospitals: Hospital[] = [];

  /* profile = {
    name: 'siuuuuuu'
  };

  onSubmit() {
    console.log('Formulario enviado:', this.profile);
  } */

  public displayedColumns: string[] = ['id', 'nombre', 'direccion', 'acciones'];

  constructor(
    private hospitalesService: HospitalesService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loadHospitals();
  }

  loadHospitals(): void {
    this.hospitalesService.get().subscribe({
      next: (data) => {
        this.hospitals = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  deleteHospital(id: string): void {
    this.hospitalesService.delete(id).subscribe({
      next: () => {
        this.snackBar.open('Hospital eliminado exitosamente', 'Cerrar', {
          duration: 3000
        });
        this.loadHospitals();
      },
      error: (error) => {
        console.error('Error al eliminar el hospital', error);
        this.snackBar.open('Error al eliminar el hospital', 'Cerrar', {
          duration: 3000
        });
      }
    });
  }
  
}
