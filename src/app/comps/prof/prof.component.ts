import { Component, OnInit, Input } from '@angular/core';
import { Prof } from 'src/app/models/Prof';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent implements OnInit {

  @Input() prof: Prof;
  constructor() { }

  ngOnInit(): void {
  }

}
