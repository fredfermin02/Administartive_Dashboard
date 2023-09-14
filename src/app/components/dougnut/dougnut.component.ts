import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dougnut',
  templateUrl: './dougnut.component.html',
  styleUrls: ['./dougnut.component.css']
})
export class DougnutComponent {
    // Doughnut
    @Input('title')
    title: string = "Sin titulo";



    @Input('lables')
    public doughnutChartLabels: string[] = [
      'Download Sales',
      'In-Store Sales',
      'Mail-Order Sales',
    ];
    @Input('data')
    public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: [350, 450, 100],
          backgroundColor: ['#6857E6','#009FEE','#F02059'],
          // hoverBackgroundColor: ['#00821C','#09DB36','#024D0F'],
          // hoverBorderColor:['#000000','#000000','#00000003'] 
        },
  
      ],
    };
    public doughnutChartType: ChartType = 'doughnut';
  
}
