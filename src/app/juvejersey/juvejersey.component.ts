import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-juvejersey',
  templateUrl: './juvejersey.component.html',
  styleUrls: ['./juvejersey.component.css']
})
export class JuvejerseyComponent implements OnInit {
  @Input('state') state: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
