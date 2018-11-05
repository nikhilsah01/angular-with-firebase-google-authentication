import { Component } from '@angular/core';
import {AuthGuardService} from './services/auth-guard.service';
import {AuthServiceService} from './services/auth-service.service';
import { UserService} from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private afAuthServices: AuthServiceService , private authGuard: AuthGuardService, router: Router, private userServices : UserService) {
    afAuthServices.user$.subscribe(user => {
      userServices.save(user);
      if (user) {
        let returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    });
  }
}
