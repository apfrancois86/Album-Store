import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  // moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {};
  constructor(
    public af: AngularFire
  ) {
    this.af.auth.subscribe(user => {
      if(user) {
        // user logged in
        this.user = user;
      }
      else {
        // user not logged in
        this.user = {};
      }
    });
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
       method: AuthMethods.Popup
    });
    console.log(this.af.auth);
  }

  logout() {
    this.af.auth.logout();
  }
}
