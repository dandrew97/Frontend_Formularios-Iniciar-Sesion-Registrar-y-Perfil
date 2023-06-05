import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

//Autenticación y peticiones a la base de datos
export class UserservicesService {
  private apiUrl = 'http://localhost:3000/users';
  private authToken!: string;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): void {
    const loginUrl = `${this.apiUrl}/login`
    const formData = {
      email: email,
      password: password
    }
    this.http.post(loginUrl, formData, { headers:(this.getAuthHeaders()) })
    .subscribe(
      (response:any) => {
        localStorage.setItem('token', response.token)
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

  create(username:string, email:string, password: string): void {
    const createUrl = `${this.apiUrl}/create`
    const formData = {
      username: username,
      email: email,
      password: password
    }
    this.http.post(createUrl, formData)
    .subscribe(
      (response:any) => {
        console.log('Registro exitoso. ', response);
      },
      (error) => {
        console.log( 'Error: ', error);
      }
    )
  }

  //Token
  private getAuthHeaders(): HttpHeaders {
  const authToken = localStorage.getItem('token'); //que obtiene el token y lo almacena en el localstorage
  const headers = new HttpHeaders({ 'Authorization':`Bearer ${authToken}`  }); //se encarga de guardar el encabezado o headers
  return headers;
  }
}
