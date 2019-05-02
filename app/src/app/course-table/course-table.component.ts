import { Component, OnInit, ViewChild} from '@angular/core';
import { CourseService } from '../course.service';

import { MatTableDataSource,MatPaginator,MatSort,MatSnackBar } from '@angular/material';


import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.scss']
})
export class CourseTableComponent implements OnInit {

  MyDataSource: any;
  displayedColumns = ['course_name','course_desc','_id'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private snackBar: MatSnackBar,private Course : CourseService) { }

  ngOnInit() {
    this.RenderDataTable();
  }


  RenderDataTable(){
    this.Course.getData().subscribe(
      data =>  {
        this.MyDataSource = new MatTableDataSource();
        this.MyDataSource.data = data;
        this.MyDataSource.sort = this.sort;
        this.MyDataSource.paginator = this.paginator;
      },
      error => console.error("There was an error while retrieving data ! "+error)
    );
  }

  updateRow(id){
     var newVal = (<HTMLInputElement>document.getElementById(id)).value;
     this.Course.postUpdate({'id':id,'courseDesc':newVal}).subscribe(
       data => {
         if(data){
         this.snacBarFun("😁 Data Updated","Done",'green-snackbar',3000);
         setTimeout(function(){ location.reload(); }, 3000);
        }
        else{this.snacBarFun(" 😔 Action Failed ","Close",'red-snackbar',3000);}
       },
       error => console.error("There was an error while updateing data ! "+error)
     );

  }


  snacBarFun(message,action,panel,time){
    this.snackBar.open(message,action,{
      duration: time,
      panelClass: [panel]
    });
  }

}
