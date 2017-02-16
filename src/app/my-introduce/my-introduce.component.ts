import { Component, OnInit } from '@angular/core';


declare var $:any;
@Component({
  selector: 'app-my-introduce',
  templateUrl: './my-introduce.component.html',
  styleUrls: ['./my-introduce.component.css']
})
export class MyIntroduceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$('.collapsible').collapsible({
       accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
     });
  }

}
