import { Component, OnInit } from '@angular/core';
import { Prof } from '../../models/Prof';
@Component({
  selector: 'app-lista-profs',
  templateUrl: './lista-profs.component.html',
  styleUrls: ['./lista-profs.component.css'],
})
export class ListaProfsComponent implements OnInit {
  profs: Prof[];
  constructor() {}

  ngOnInit(): void {
    this.profs = [
      {
        id: 1,
        nome: 'Ribamar Franco',
        disciplina: 'Programação de Jogos',
        foto: 'prof1',
      },
      {
        id: 2,
        nome: 'Laura Takashima',
        disciplina: 'Emrpeendedorismo',
        foto: 'prof2',
      },
      {
        id: 3,
        nome: 'Rafael Borges',
        disciplina: 'Culinária',
        foto: 'prof3',
      },
      {
        id: 4,
        nome: 'José Barbosa',
        disciplina: 'Inglês e Espanhol',
        foto: 'prof4',
      },
    ];
  }
}
