import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/models/user.model';
import { FileuploadService } from 'src/app/services/fileupload.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
 
   
  public profileForm:FormGroup = this.fb.group({});
  public user!: User;
  public imgUpload!:  File;

  constructor(private fb:FormBuilder,
              private userService: UserService,
              private fileUploadService: FileuploadService ){
                this.user = userService.user;
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name:[this.user.name,Validators.required],
      email:[this.user.email, [Validators.required, Validators.email]],
    })
  }

  updateProfile(){
    this.userService.updateProfile(this.profileForm.value)
      .subscribe(()=>{
        const {name,email} = this.profileForm.value;
        this.user.name = name;
        this.user.email = email;
      })
  };


  changeImage(event: Event) {
    const inputElement = event.target as HTMLInputElement; 
    if (inputElement.files && inputElement.files.length > 0) {
      this.imgUpload = inputElement.files[0];
    }
  }

  uploadImage(){
    this.fileUploadService.updatePhoto(this.imgUpload,'users',this.user.uid!)
      .then(img=>this.user.img=img).then(()=>console.log(this.user))
  }
  


}
