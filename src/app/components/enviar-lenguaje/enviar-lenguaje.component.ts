import { Component, OnInit } from '@angular/core';
import { IdiomaServiceService } from 'src/app/services/idioma-service.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-enviar-lenguaje',
  templateUrl: './enviar-lenguaje.component.html',
  styleUrls: ['./enviar-lenguaje.component.sass']
})
export class EnviarLenguajeComponent implements OnInit {
  public idSend = 0;
  public texto = "";
  constructor(private idiomaService: IdiomaServiceService) {

   }

  ngOnInit() {
  }

  sendIdService() {
    this.idiomaService.serviceIdioma(this.idSend).subscribe(req => {
      const reqAux: any = req;
      this.texto = reqAux.title;
    },
    err => {
      alert('No se ingreso número o no se encontro resultado con ese ID');
    });
  }

}
