import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';
import { GoogleSignin } from '@nativescript/google-signin';


import { AppModule } from './app/app.module';

GoogleSignin.configure().then(
  function () {
    console.log("Google sign in configured");
  },
  function (reason) {
    console.log("There was an error configuring Google Signin: \n");
    console.log(reason);
  }
);

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});

