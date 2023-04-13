import { Component, OnInit } from '@angular/core';
import { Dialogs } from '@nativescript/core'
import { GoogleSignin, User } from '@nativescript/google-signin';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {}

  async getPlayServices() : Promise<void> {
    console.log('Getting Play Services');
    const isPlayServicesAvailable: boolean = await GoogleSignin.playServicesAvailable();
    this.showAlertDialog(isPlayServicesAvailable.toString());

  }

  async signIn(): Promise<void> {
    console.log('Signing in with Google');
    const user: User = await GoogleSignin.signIn();
    console.log(user);
  }

showAlertDialog(text: string) {
  const alertOptions = {
    title: 'Alert',
    message: text,
    okButtonText: 'Okay',
    cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
  }

  Dialogs.alert(alertOptions);
}

}
