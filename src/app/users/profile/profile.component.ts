import { Component, OnInit } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  selectFile!: File;
  userProfile!: any;
  editValue: boolean = false;

  editProfile() {
    this.editValue=true;
  }

  constructor(private userService: UserservicesService) {}

  ngOnInit() {
    this.getUser();
  }
  
  // tenemos que crear un ngOnInit para poder llamar la informacion del html profile
  getUser(){
    this.userService.getUser()
    .subscribe(
      (response: any) => {
        console.log('response: ', response);
        this.userProfile = response;
      },
      (error) => {
        console.log('Error: ', error);
      }
    )
  }

  onFileSelected(event: any) {
    this.selectFile = event.target.files[0];
  }

  updateProfile() {
    this.userService.updateUser(this.userProfile)
  }
}


