import { Component } from '@angular/core';
import {AuthServiceService} from './../../services/auth-service.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public afAuthServices: AuthServiceService ) { 

    
  }

  login(){
    this.afAuthServices.login()
  }


}
