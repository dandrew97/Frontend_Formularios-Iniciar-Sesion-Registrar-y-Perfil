import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {
  private apiUrl = 'http://localhost:3000/users/login'

  constructor(private http: HttpClient) { }

  login(email: string, password: string): void {
    const formData = {
      email: email,
      password: password
    }
    this.http.post(this.apiUrl, formData).subscribe(
      (response) => {
        console.log('Respuesta:', response);
      },
      (error) => {
        if(error instanceof HttpErrorResponse){
          if(error.error instanceof ErrorEvent) {
            console.log('Error:', error.error.message);
          }
        } else {
          console.error(`Codigo de error ${error.status}` + `mensaje: ${error.error}`);
        }
      }
    )
  }
}
