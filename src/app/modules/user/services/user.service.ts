import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { UserInterface, LoginInterface, RecoverInterface, ResetPasswordInterface } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public api = environment.api_url;
  public userRegister: Observable<any>;
  public headers:HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.headers= new HttpHeaders({'Accept':'aplication/json'});
  }

  public register( firstname: string, lastname: string, email: string, password: string, address: string, dob: string, sex: string) {

    let user: UserInterface =  {
      nombres: firstname,
      apellidos: lastname,
      correo: { dirCorreo: email},
      password: password,
      direccion: address,
      fechaNacimiento: dob,
      genero: sex,
      rol:['registrado','jugador']

    };

   return this.httpClient.post(this.api + 'registro', user,{headers:this.headers})
   .pipe(map(data=>{
     return data;
    }));
  }

  public verify(token: string) {

   this.headers= new HttpHeaders({'Authorization':'Bearer ' + token});
   return this.httpClient.get(this.api + 'auth/verify',{headers:this.headers})
   .pipe(map(data=>{
     return data;
    }));
  }

  public login(email: string, password: string) {

    let user: LoginInterface =  {
      password: password,
      email: email
    };

   return this.httpClient.post(this.api + 'auth/login', user,{headers:this.headers})
   .pipe(map(data=>{
     return data;
    }));
  }

  public recovery(email: string) {

    let user: RecoverInterface =  {
      email: email
    };

   return this.httpClient.post(this.api + 'auth/recovery', user,{headers:this.headers})
   .pipe(map(data=>{
     return data;
    }));
  }

  public resetPassword( token: string, email: string, password: string) {

    let user: ResetPasswordInterface =  {
      password: password,
      password_confirmation: password,
      token: token,
      email: email
    };

   return this.httpClient.post(this.api + 'auth/reset', user,{headers:this.headers})
   .pipe(map(data=>{
     return data;
    }));
  }

}
