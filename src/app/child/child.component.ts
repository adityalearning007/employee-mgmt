import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() updateItemEvent=new EventEmitter<string>();

  @Input() item = "";

  constructor() {
    //console.log(this.item);
  }

  ngOnInit(): void {
   // console.log(this.item)
  }




}
