import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnviarLenguajeComponent } from './components/enviar-lenguaje/enviar-lenguaje.component';
import { FormularioComponent } from './components/formulario/formulario.component';


const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'idioma', component: EnviarLenguajeComponent },
  { path: '',   redirectTo: '/formulario', pathMatch: 'full' },
  { path: '**', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
