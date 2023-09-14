import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component{

  public labels1: string[] = [
    'Tacos',
    'Burgers',
    'Salas',
  ];

  public data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      { data: [100, 50, 30],
        backgroundColor: ['#6857E6','#009FEE','#F02059'],
        // hoverBackgroundColor: ['#00821C','#09DB36','#024D0F'],
        // hoverBorderColor:['#000000','#000000','#00000003'] 
      },

    ],
  };
  ngOnInit(): void {
  }

}
