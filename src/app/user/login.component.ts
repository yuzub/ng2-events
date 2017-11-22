import { Component } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private authService: AuthService) {

  }
  login(formValue) {
    console.log(formValue);
    this.authService.loginUser(formValue.userName, formValue.password);
  }
}
