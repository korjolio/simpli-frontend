import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/allReport';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  ELEMENT_DATA: Employee[] = [];
  displayedColumns: string[] = ['id','rut', 'name', 'email', 'company'];
  dataSource = new  MatTableDataSource<Employee>(this.ELEMENT_DATA);

  constructor(private service: ApiService) {
    this.service.getEmployee().subscribe(resp => {
    })
    this.service.getCompany().subscribe(resp => {
    })
  }
  ngOnInit(): void {
    this.getAllEmployee();
  }

  
  public getAllEmployee(){
    let resp = this.service.getEmployee();
    resp.subscribe(report => this.dataSource.data = report as Employee[]);
  }

}
