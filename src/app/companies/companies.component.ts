import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Company } from 'src/allReport';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {


  ELEMENT_DATA: Company[] = [];
  displayedColumns: string[] = ['rut', 'name', 'address', 'phone'];
  dataSource = new  MatTableDataSource<Company>(this.ELEMENT_DATA);


  constructor(private service: ApiService) {
    this.service.getCompany().subscribe(resp => {
    })
  }
  ngOnInit(): void {
    this.getAllCompany();
  }

  
  public getAllCompany(){
    let resp = this.service.getCompany();
    resp.subscribe(report => this.dataSource.data = report as unknown as Company[]);
  }

}
