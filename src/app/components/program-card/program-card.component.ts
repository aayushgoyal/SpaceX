import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-program-card',
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.scss']
})
export class ProgramCardComponent implements OnInit {

  constructor() { }

  @Input() programDetails: any;

  ngOnInit(): void {
  }

}
