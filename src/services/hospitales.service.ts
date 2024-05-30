import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Hospital } from '../models/hospital';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HospitalesService {
  private apiUrl = 'http://localhost:3000/hospitales';

  constructor(private http: HttpClient) { }

  get(): Observable<Hospital[]> {
    return this.http.get<Hospital[]>(this.apiUrl);
  }

  getHospitalById(id: string): Observable<Hospital> {
    return this.http.get<Hospital>(`${this.apiUrl}/${id}`);
  }

  // Agregar un nuevo hospital
  add(hospital: Hospital): Observable<Hospital> {
    return this.http.post<Hospital>(this.apiUrl, hospital, { });
  }

  // Actualizar un hospital
  update(hospital: Hospital): Observable<Hospital> {
    return this.http.put<Hospital>(`${this.apiUrl}/${hospital.id}`, hospital, { });
  }

  // Eliminar un hospital
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  

}
