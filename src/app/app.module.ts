import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ListaCursosComponent } from './comps/lista-cursos/lista-cursos.component';
import { ListaProfsComponent } from './comps/lista-profs/lista-profs.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { CursoComponent } from './comps/curso/curso.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfComponent } from './comps/prof/prof.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCursosComponent,
    ListaProfsComponent,
    NavbarComponent,
    CursoComponent,
    ProfComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
