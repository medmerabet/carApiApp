import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  @ViewChild('password')
  passwd?: ElementRef;

  user?: UserModel;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.auth.$user.subscribe(x => {
      this.user = x;
    });
  }

  onLogin(login: string, ev: any): void {
    this.auth.login(login, this.passwd?.nativeElement.value);
  }

}
