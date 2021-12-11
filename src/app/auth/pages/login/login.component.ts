import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent  
{

  constructor( private router: Router,
              private authService:AuthService ) { }

  login()
  {
    //TODO: implementar USUARIOSERVICES y auth en las rutas 
    
    this.authService.login()
        .subscribe( res => 
                    {
                      if (res.id) 
                      {
                        this.router.navigate(['./heroes'])
                      }
                    },
                    err => console.log(err) );

  }

  withoutlogin()
  {
    this.authService.logout();
    this.router.navigate(['./heroes'])

  }

}
