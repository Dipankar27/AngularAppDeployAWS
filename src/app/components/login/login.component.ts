import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedauthserviceService } from 'src/app/services/hardcodedauthservice.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  errroMessage='Invalid Credentials'
  invalidLogin=false
  

  

  constructor(private router:Router, private hardcodedAuthenticationSercice:HardcodedauthserviceService) { }

  ngOnInit(): void {
  }

  handleLogin() {
   // console.log(this.username);

    //if(this.username==='dipankar.medhi@gmail.com'&& this.password==='dummy'){

      if (this.hardcodedAuthenticationSercice.authenticate(this.username,this.password)){

      this.router.navigate(['home']);

    } else{

      alert("Please Enter valid details")
      
    }
    
  }

}
