import { Component, OnInit } from '@angular/core';
import { HardcodedauthserviceService } from 'src/app/services/hardcodedauthservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //isUserLoggedIn:boolean=false;

  constructor(public hardcodedAuthenticationSercice:HardcodedauthserviceService) { }

  ngOnInit() {
    //this.isUserLoggedIn =this.hardcodedAuthenticationSercice.isUserLoggedIn();
  }

}
