import { Injectable } from '@angular/core';
@Injectable()
export class MyHeadService {
  constructor(){
  	console.log('service ok !')
  }
  getHero(){
   		let hero = {'id':'sss','name':'wq'};
   		return hero;
   }
}
