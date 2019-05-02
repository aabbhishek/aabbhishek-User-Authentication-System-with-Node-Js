import { Component, OnInit } from '@angular/core';
import { ChekSessionService } from '../chek-session.service';
import { Router }    from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

public email;
  constructor(public router: Router,private CheckSession : ChekSessionService) { }

  ngOnInit() {
    this.CheckSession.sessionChecker().subscribe(
      data => {
        console.log(data.status);
        if(data.status){
          this.email = data.email;
        }else{
          this.router.navigateByUrl('/login');
        }
      },
      error => console.error("Cant Confirm")
    );
  }

}
