import { Component, AfterViewInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

declare const google:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('googleBtn') googleBtn!:ElementRef;

  public formSubmitted = false;

  public loginForm:FormGroup = this.fb.group({
    email:[localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password:['', [Validators.required]],
    rememberMe:[false]
  });

  constructor(private router:Router,
            private fb: FormBuilder,
            private userService: UserService,
            private ngZone: NgZone) { }
            
  ngAfterViewInit(): void {
    this.googleInit();
  }

  googleInit(){
    google.accounts.id.initialize({
      client_id: "963655461253-c8093cl2mrq0b8ad7lq5slqe3ov5130g.apps.googleusercontent.com",
      callback: (response:any) => this.handleCredentialResponse(response)
    });
    google.accounts.id.renderButton(
      this.googleBtn.nativeElement,
      { theme: "outline", size: "large" }  // customization attributes
    );
  }

  handleCredentialResponse(response:any){
    console.log("Encoded JWT ID token: " + response.credential);
    this.userService.loginGoogle(response.credential) 
      .subscribe(()=>this.ngZone.run(()=>this.router.navigate(['/'])));
  }

  login(){
    console.log(this.loginForm.value)
    this.userService.loginUser(this.loginForm.value).subscribe({
      next: resp => {
        console.log(resp)
        if (this.loginForm.get('rememberMe')?.value) {
          localStorage.setItem('email', this.loginForm.get('email')?.value);
        }else{
          localStorage.removeItem('email');
        }
        this.router.navigateByUrl('/')
      },
      error: (e) => {
        //If error happens
        Swal.fire('Error', e.error.msg, 'error');
      }
    })
    //this.router.navigateByUrl('/')
  }

}
