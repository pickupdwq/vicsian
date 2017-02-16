import { Component, OnInit, OnChanges, Input, trigger, state, style, animate, transition,keyframes } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-my-content',
  templateUrl: './my-content.component.html',
  styleUrls: ['./my-content.component.css'],
  animations: [ // 动画的内容
    trigger('fadePage', [
      state('shown', style({
      	"opacity":1
      })),
      state('hidden',   style({
      	"opacity":0
      })),
      transition('shown => hidden', animate('100ms ease-in')),
      transition('hidden => shown', animate('100ms ease-out'))
    ])
  ]
})
export class MyContentComponent implements OnInit {
  
  title = 'Tour of Heroes';
  myHero = 'Windstorm';
  count = 0;
  fadeTransition='shown';
  constructor() {}

  ngOnInit() {
	  $('.carousel.carousel-slider').carousel({fullWidth: true});
  }

  ngOnDestroy(){
  	   this.fadeTransition="hidden";
  }
  getNew(){
  	this.count ++;
  	if(this.count%2){
  		this.title='change';
  	}else{
  		this.title='Tour of Heroes';
  	}
  }


}
