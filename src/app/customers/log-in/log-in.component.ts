import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../shared/services/authentication.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });

  errormessage = 'AaAAAaAAAAAAAAAAA';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  onSubmit() {
    this.authenticationService.login
    (this.loginForm.get('username').value, this.loginForm.get('password').value)
      .subscribe(
        () => {
          this.router.navigate(['/']);
          console.log('WORKS!');
        },
        error => {
          this.errormessage = error;
          console.log('FUCK!');
        });
  }
}
