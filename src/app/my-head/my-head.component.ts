import { Component, OnInit } from '@angular/core';
import { MyHeadService } from '../my-head.service';

@Component({
  selector: 'app-my-head',
  templateUrl: './my-head.component.html',
  styleUrls: ['./my-head.component.css'],
  providers: [MyHeadService]
})
export class MyHeadComponent implements OnInit {
  constructor(private _heroService: MyHeadService){}

  ngOnInit() {
  	console.log('ss');
  	console.log(this._heroService.getHero());
  }

}
