import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router }      from '@angular/router';

import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login-pan',
  templateUrl: './login-pan.component.html',
  styleUrls: ['./login-pan.component.scss']
})
export class LoginPanComponent implements OnInit {

  constructor(private Login: LoginService, public router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  loginUser(email,password){
    // console.log(email,password);

    this.Login.getUser({'email':email,'password':password}).subscribe(
      data => {if(data)
        {
          this.router.navigateByUrl('/dashbord');
        }
      else{
        console.log(data);
        this.snackBar.open(" 😕 UserName or Password Incorrect","Got It ",{
          duration: 4000,
          panelClass: ['red-snackbar']
        });
      }
    },
      error => console.error('error',error)
    )

  }

}
