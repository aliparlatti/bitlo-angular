import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

// @ts-ignore
  loginForm:FormGroup;
  submitted:boolean=false;
  isSignUpFailed = false;
  constructor( private fb:FormBuilder,
               private authService:AuthService,
               private router:Router
  ) {
    if (this.authService.isLoggedIn){
      this.router.navigate(['profil'])
    }
  }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email: ['', Validators.email ],
      password:['', Validators.required]
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
  login():void{
    this.submitted=true;
    if(!this.loginForm.invalid){
      this.authService.login(this.f["email"].value,this.f["password"].value).subscribe({
        next: data => {
          this.isSignUpFailed=false;
          this.authService.saveUserStorage(data["token"])
          this.router.navigate(['profil']);
          },
        error:e =>{
          console.log(e)
          this.isSignUpFailed=true
        }
      });

    }else {
      return
    }

  }
}
