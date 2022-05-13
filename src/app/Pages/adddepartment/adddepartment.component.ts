import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/Models/department';
import { DepartmentService } from 'src/app/service/departmentlist.service';
import { userService } from 'src/app/service/user.service';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.css']
})
export class AdddepartmentComponent implements OnInit {
role ="Co-Ordinator"
public data:any
  constructor(private departmentservice:DepartmentService) { }
  public department:Department={
    id: 1,
    name:"",
    isDisabled: false
  }
  ngOnInit(): void {
  }
  OnSubmit(){
    console.log(this.department)
    this.departmentservice.postDepartment(this.data).subscribe(
      res=>{
      this.data
      this.data=res
      }
    )
  }
}
