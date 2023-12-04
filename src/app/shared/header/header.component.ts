import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  declare public user: User;

  constructor(private userService:UserService) {
    this.user= userService.user;
   }

  logOut(){
    this.userService.logout()
  }

  ngOnInit(): void {
  }

}
