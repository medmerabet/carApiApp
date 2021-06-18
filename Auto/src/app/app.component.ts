import { Component } from '@angular/core';
import { UserModel } from './models/user.model';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AutoAngular';
  user?: UserModel;// = { name: 'Bob' };

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.auth.$user.subscribe(x => {
      this.user = x;
    });
    console.log('SUBSCRIBE');
  }

  onLogout(): void {
    this.auth.logout();
  }

}
