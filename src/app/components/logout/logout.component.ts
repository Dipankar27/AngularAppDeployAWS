import { Component, OnInit } from '@angular/core';
import { HardcodedauthserviceService } from 'src/app/services/hardcodedauthservice.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedAuthenticationSercice:HardcodedauthserviceService) { }

  ngOnInit(): void {
    this.hardcodedAuthenticationSercice.logout();
  }

}
