import { UserService } from './../../../../ScholaeSupportSerice/src/app/services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',]
})
export class LoginComponent {

  constructor(private userService:UserService) { }
  user: {
    username: string,
    password: string
  } = {
    username: '',
    password: ''
  };





  login() {
this.userService.login(this.user).subscribe(( res: any ) => {
  console.log(res);

});
}
}
