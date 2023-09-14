import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementator',
  templateUrl: './incrementator.component.html',
  styleUrls: ['./incrementator.component.css']
})
export class IncrementatorComponent {


  @Input() progress: number=25;
  @Input() btnClass: string = 'btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  // get getPorcentage(){
  //   return `${this.progress}%`;
  // }
  
  ngOnInit(): void {
    this.btnClass=`btn ${this.btnClass}`;
  }

  cambiarValor(valor: number){
    if(this.progress >=100 && valor>=0){
      this.valorSalida.emit(100)
      return this.progress =100
    }

    if (this.progress <= 0 && valor <0) {
      this.valorSalida.emit(0)
      return this.progress = 0
    }
    
    this.progress = this.progress + valor;
    this.valorSalida.emit(this.progress)
    return 
     
    
  }

  onChange(newValue:number){
    if(newValue>=100){
    this.progress=100
    }else if(newValue<=0){
    this.progress=0
    }else{
    this.progress = newValue
    }

    this.valorSalida.emit(newValue)
  }

}
