import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/allReport';
import { ApiService } from "src/app/services/api.service";


@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {

  public form!: FormGroup;
  companies: Company[] = [];

  constructor(
    private readonly service: ApiService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  public sendCompany() {
    this.service.postCompany('http://54.191.239.230:8000/api/company/',
      {
        rut: this.form.value.rut,
        name: this.form.value.name,
        phone: this.form.value.phone,
        address: this.form.value.address
      })
      .subscribe(respuesta => {
        console.log('Company enviado');
        this.form.reset()
      })
  }

  ngOnInit(): void {
      this.form = this.formBuilder.group({
      rut: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
    })
  }



}
