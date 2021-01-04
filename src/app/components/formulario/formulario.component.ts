import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass']
})
export class FormularioComponent implements OnInit {
  formGroup = new FormGroup({
    name: new FormControl('',Validators.required),
    phone: new FormControl('',[
      Validators.required, 
      Validators.minLength(5),
      Validators.maxLength(10)]),
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ])
  });
  constructor( private router: Router) { }

  ngOnInit() {
  }

  serviceLanguage() {
    this.router.navigate(['idioma']);
  }

}
