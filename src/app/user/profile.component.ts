import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {float: right; color: #e05c65; padding-left: 10px;}
    .error input {background-color: #e3c3c5;}
    .error ::-webkit-input-placeholder {color: #999;}
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {
    let firstName = new FormControl(this.authService.currentUser.firstName, Validators.required);
    let lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    });
  }

  saveProfile(formValues) {
    if(this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['events']);
    }

  }

  cancel() {
    this.router.navigate(['events']);
  }
}
