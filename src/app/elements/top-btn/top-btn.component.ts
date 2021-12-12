import { Component, OnInit } from '@angular/core';
import {fromEvent, map, tap} from "rxjs";

@Component({
  selector: 'app-top-btn',
  templateUrl: './top-btn.component.html',
  styleUrls: ['./top-btn.component.css']
})
export class TopBtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  readonly showButton=fromEvent(window,'scroll').pipe(tap(console.log), map(()=>document.body.scrollTop>20||document.documentElement.scrollTop>20));

  scrollTop():void {
    try{
      window.scrollTo({left: 0,top: 0, behavior: "smooth"});
    }catch(err){
      window.scrollTo(0,0);
    }
  }
}

