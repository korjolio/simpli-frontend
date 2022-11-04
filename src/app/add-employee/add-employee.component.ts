import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/allReport';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  public form!: FormGroup;
  employees: Employee[] = [];

  constructor(
    private readonly service: ApiService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  public sendEmployee() {
    this.service.postEmployee('http://52.25.110.73:8000/api/employee/',
      {
        rut: this.form.value.rut,
        name: this.form.value.name,
        email: this.form.value.email,
        company: this.form.value.company
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
      email: ['', Validators.required],
      company: ['', Validators.required],
    })
  }

}
