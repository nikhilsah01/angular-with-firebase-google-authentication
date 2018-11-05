import { Component } from '@angular/core';
import {AuthServiceService} from './../../services/auth-service.service'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  constructor( public afAuthServices: AuthServiceService ) { 
   
  }
   
  logout(){
    this.afAuthServices.logout();
  }
 

}
