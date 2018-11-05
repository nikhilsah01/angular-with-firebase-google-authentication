import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthServiceService} from './auth-service.service';
import { Observable } from 'rxjs/Observable';
import {UserService} from './user.service';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements  CanActivate  {
   user$: Observable<firebase.User>;
  constructor( private afAuthServices: AuthServiceService , private router:Router,private userServices : UserService) {
    
   }
   canActivate(route , state:RouterStateSnapshot)  {
      return this.afAuthServices.user$.map(user => {
        if(user) return true;

       this.router.navigate(['/login'], {queryParams: { returnUrl:state.url }});
       return false 
      })
  }


}
