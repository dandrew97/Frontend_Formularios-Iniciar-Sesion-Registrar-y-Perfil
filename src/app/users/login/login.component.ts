import { Component } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserservicesService) {}

  login() {
    this.userService.login(this.email, this.password)
    // const userdata = {
    //   email: this.email,
    //   password: this.password,
    // }
    console.log("email:" , this.email),
    console.log("password:" , this.password);
  }
}
