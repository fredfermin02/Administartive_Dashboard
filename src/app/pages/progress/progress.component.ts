import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  progres1: number =25;
  progres2: number = 35;

  get getProgreso1(){
    return `${this.progres1}%`
  }

  get getProgreso2(){
    return `${this.progres2}%`
  }

  // valueChilidChange(valor: number){
  //   console.log(valor)
  // }
  
  constructor() { }

  ngOnInit(): void {
  }

}
