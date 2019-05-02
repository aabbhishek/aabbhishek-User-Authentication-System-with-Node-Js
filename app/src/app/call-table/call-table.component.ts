import { Component, OnInit, ViewChild } from '@angular/core';
import { CalldataService } from '../calldata.service';
import { MatTableDataSource,MatPaginator,MatSort,MatSnackBar } from '@angular/material';

import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-call-table',
  templateUrl: './call-table.component.html',
  styleUrls: ['./call-table.component.scss']
})
export class CallTableComponent implements OnInit {

  MyDataSource: any;
  displayedColumns = [ 'source','destination','source_location','destination_location','call_duration','roaming','call_charge','_id'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private snackBar: MatSnackBar,private CallData:CalldataService) {}

  ngOnInit() {
    this.RenderDataTable();
  }

  RenderDataTable() {

    this.CallData.getData().subscribe(
      data =>  {
        this.MyDataSource = new MatTableDataSource();
        this.MyDataSource.data = data;
        this.MyDataSource.sort = this.sort;
        this.MyDataSource.paginator = this.paginator;
      },
      error => console.error("There was an error while retrieving data ! "+error)
    );

  }

  deleteRow(id){
    this.CallData.delRow({'_id':id}).subscribe(
        data => { if(data){
              this.snacBarFun(" 😁 Row Deleted","Done",'green-snackbar',3000);
              setTimeout(function(){ location.reload(); }, 3000);
          }else{
              this.snacBarFun(" 😔 Action Failed ","Close",'red-snackbar',3000);
          }

        },
        error => console.error("Error !!! "+error)
    );
  }


  snacBarFun(message,action,panel,time){
    this.snackBar.open(message,action,{
      duration: time,
      panelClass: [panel]
    });
  }

}
