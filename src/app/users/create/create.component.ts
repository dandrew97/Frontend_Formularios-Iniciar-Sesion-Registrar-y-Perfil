import { Component } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  nombres!: string;
  apellidos!: string;
  email!: string;
  password!: string;

  constructor(private userService: UserservicesService) {}
  createUser(): void {
    this.userService.create(this.nombres, this.apellidos, this.email, this.password)
  }

}
