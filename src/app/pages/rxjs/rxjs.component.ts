import { Component, OnDestroy } from '@angular/core';
import { Observable, retry, interval, take, map,filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy{
  
  public intervalSubs: Subscription;

  constructor(){

    // this.returnObservable().pipe(
    //   retry(1)
    // ).subscribe({
    //   next: value => console.log('Subs:', value), 
    //   error: err => console.warn('Error', err),
    //   complete: () => console.info('Obs terminado') 
    // });

    this.intervalSubs = this.returnInterval()
      .subscribe(console.log
        // (valor)=>console.log(valor)
      )
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();  
  }


  returnInterval(): Observable<number>{
    return interval(5)
                      .pipe(
                        take(10),
                        map(valor => {return valor+1}),
                        filter(valor => (valor % 2 ===0?true:false))
                      )

    

  }

  returnObservable(): Observable<number>{
    let i = -1;
    return new Observable<number>( observer => {
      const interval = setInterval(()=>{
        i++;
        observer.next(i);

        if (i===4){
          clearInterval(interval)
          observer.complete();
        }

        if (i===2){
          clearInterval(interval)
          observer.error('I llego a 2')
        }
      },1000)
    });

  }
}
