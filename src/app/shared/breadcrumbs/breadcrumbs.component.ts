import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnDestroy{
  public title: string = '';
  public subsTitle$: Subscription; 

  constructor(private router: Router) {
    //private route: ActivatedRoute This is another approuch and need to inject thi part
    // console.log(route.snapshot.children[0].data)

    this.subsTitle$ = this.getRouteArguments()
                      .subscribe(
                        (titleFromRouter) => {this.title = titleFromRouter['title']}
                      )
   }
  
   ngOnDestroy(): void {
    this.subsTitle$.unsubscribe()
  }

  getRouteArguments(){
    return this.router.events
    .pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event: ActivationEnd)=> event.snapshot.firstChild===null ),
      map((event:ActivationEnd)=> event.snapshot.data)
    )
    
  }


}
