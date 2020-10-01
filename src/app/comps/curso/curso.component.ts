import { Component, OnInit, Input } from '@angular/core';
import { Curso } from '../../models/Curso';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
})
export class CursoComponent implements OnInit {
  @Input() curso: Curso;
  collapsed:boolean = true;
  iconDown = faChevronDown;
  iconRight = faChevronRight;
  switcher = this.iconRight;
  constructor() {}

  ngOnInit(): void {}

  toggleCollapse(ev:Event) {
    ev.preventDefault();
    this.collapsed = !this.collapsed;
    if (this.collapsed) {
      this.switcher = this.iconRight;
    } else {
      this.switcher = this.iconDown;
    }
  }
}
