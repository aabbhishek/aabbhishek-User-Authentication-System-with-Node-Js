import { Component, OnInit } from '@angular/core';

import {MatSnackBar} from '@angular/material';
import { RegisterService } from '../register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor( private snackBar: MatSnackBar, private Register: RegisterService) { }

  ngOnInit() {
  }

  registerUser(email,password,cpassword){

    if(this.checkPassword(password.value,cpassword.value)){
      // console.log(true);

      this.Register.insertUser({'email':email.value,'password':password.value}).subscribe(
        data => {
          if(data){
            this.snacBarFun(" 😄 Succesfuly Registered",
            "Got it",
            "green-snackbar"
            ,3000);
          }else{
            this.snacBarFun(" 😔 There Was Some Error",
            "Close",
            "red-snackbar",
            3000);
          }
        },
        error => console.error("Error! "+error)
      )
    }else{
      // console.log(false);
    this.snacBarFun("😕 Password And Comfirm Password do not match ",
      "Close",'red-snackbar',5000);
    }

  }

  checkPassword(password,cpassword){
    if(password==cpassword){
      return true;
    }
    else{
      return false;
    }
  }

  snacBarFun(message,action,panel,time){
    this.snackBar.open(message,action,{
      duration: time,
      panelClass: [panel]
    });
  }
}
