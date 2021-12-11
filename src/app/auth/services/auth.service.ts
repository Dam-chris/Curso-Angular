import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { Auth } from '../interfaces/auth.interface';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService 
{
  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;


  constructor( private http: HttpClient ) { }

  //getters
  get auth(): Auth
  {
    return { ...this._auth! };
  }

  //metodos
  checkAuth(): Observable<boolean> /*| boolean para resolverlo sin necesitar el operador of se puede añadir un pipe bollean al lo que devuleve la funcion*/
  {
    //para resolver  los observables booleanos que se necesita el operador of (o otro tipo de observables)
    if ( !localStorage.getItem('id') )
    {
      return of( false );
    } 

    return this.http.get<Auth>( `${ this.baseUrl }/usuarios/1`)
                .pipe(
                  map( res => 
                      {
                        this._auth = res;
                        return true; //es importante que esta llamda retorne un true
                      })
                );
  }
  login():Observable<Auth>
  {
    return this.http.get<Auth>( `${ this.baseUrl }/usuarios/1` )
              .pipe(
                tap( res => this._auth = res ),
                tap( res => localStorage.setItem('id', res.id ) )
              );
  }
  logout() 
  {
    this._auth = undefined;
    localStorage.removeItem('id');
  }
}
