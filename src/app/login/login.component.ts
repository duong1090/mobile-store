import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  login = () => {
    this.authenticationService.login(this.username, this.password).subscribe(
      (data) => {
        // if (data != null && data.username) {
        //   localStorage.setItem('username', data.username);
        //   localStorage.setItem('password', data.password);
        //   console.log('login Success');
        //   // this.router.navigateByUrl('/productList');
        // } else {
        //   console.log('login fail');
        // }

        console.log('login:::', data);
        this.router.navigateByUrl('/cart');
      },
      (err) => console.error(err)
    );
  };

  keyUpUsername = (event: any) => {
    let element: HTMLInputElement = event.target;
    let val: string = element.value;
    this.username = val;
  };

  keyUpPassword = (event: any) => {
    let element: HTMLInputElement = event.target;
    let val: string = element.value;
    this.password = val;
  };

  ngOnInit(): void {}
}
