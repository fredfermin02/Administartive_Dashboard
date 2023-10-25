import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { environment } from 'src/environments/environment';

import { RgeisterForm } from '../interfaces/register-form.interface';
import { LoginForm } from '../interfaces/login.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

declare const google: any;

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient,
              private router: Router) {}

  logout(){
    
    const email = localStorage.getItem('email')
    
    google.accounts.id.revoke(email,()=>{
      localStorage.removeItem('token');
      this.router.navigateByUrl('/login')
    })

    
    
  }

  validateToken(): Observable<boolean>{
    const token=localStorage.getItem('token') || '';

    return this.http.get(`${base_url}/login/renew`,
    {headers:{
      'x-token':token
      }
    }).pipe(
      tap(resp=>{
        localStorage.setItem('token',token)
      }),
      map(resp => true),
      catchError(err => of(false))
      );
  }

  createUser(formData:RgeisterForm){
    
    return this.http.post(`${base_url}/users`,formData)
    .pipe(
      tap((resp:any)=>{
        localStorage.setItem('token',resp.token)
      })
    );
  }

  loginUser(formData:LoginForm){
    
    return this.http.post(`${base_url}/login`,formData) 
      .pipe(
        tap((resp:any)=>{
          localStorage.setItem('token',resp.token)
          
        })
      );
  }

  loginGoogle(token: string){
    return this.http.post(`${base_url}/login/google`,{token})
      .pipe(
        tap((resp:any)=>{
          localStorage.setItem('token',resp.token)
          localStorage.setItem('email',resp.email)
        })
      )
  }

}

