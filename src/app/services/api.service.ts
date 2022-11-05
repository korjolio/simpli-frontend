import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company, Employee } from 'src/allReport';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API = 'http://54.191.239.230:8000/api/';

  constructor(private readonly http: HttpClient) {
  }

  // Métodos de Listar
  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API + 'employee');
  }

  getCompany(): Observable<Company[]> {
    return this.http.get<Company[]>(this.API + 'company');
  }

  // Métodos de Crear
  public postCompany(url: string, body: any) {
    return this.http.post(url, body);
  }
  public postEmployee(url: string, body: any) {
    return this.http.post(url, body);
  }

}
