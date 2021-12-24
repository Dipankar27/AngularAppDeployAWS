import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedauthserviceService {

  constructor() { }

  authenticate(username, password){
    if(username==='dipankar.medhi@gmail.com'&& password==='dummy'){
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;

  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }
}
