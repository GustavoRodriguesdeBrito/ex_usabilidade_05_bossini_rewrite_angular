import { Component, OnInit } from '@angular/core';
import { Curso } from '../../models/Curso';
@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css'],
})
export class ListaCursosComponent implements OnInit {
  cursos: Curso[];
  constructor() {}

  ngOnInit(): void {
    this.cursos = [
      {
        id:"curso1",
        titulo: 'Desenvolvimento web',
        descricao:
          'Aprenda a criar websites e aplicações web utilizando HTML CSS, JavaScript e PHP.',
      },
      {
        id:"curso2",
        titulo: 'Inglês Instrumental',
        descricao: 'Ensino de inglês com foco em leitura.',
      },
      {
        id:"curso3",
        titulo: 'Empreendedorismo',
        descricao:
          'Desenvolva competências orientadas ao gerenciamento e crescimento do seu negócio.',
      },
      {
        id:"curso4",
        titulo: 'Orientação Nutricional e Saúde',
        descricao: 'Orientações sobre como viver uma vida mais saudável.',
      },
      {
        id:"curso5",
        titulo: 'Desenvolvimento de jogos',
        descricao:
          'Ensino focado na utilização de ferramentas como Unity e GameMaker 2 para criação de jogos 2D e 3D.',
      },
      {
        id:"curso6",
        titulo: 'Administração do tempo',
        descricao: 'Desenvolvimento de capacidades de organização de tempo.',
      },
    ];
  }
}
