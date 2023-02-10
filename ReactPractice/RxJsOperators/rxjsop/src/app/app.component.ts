import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { filter, map } from 'rxjs/operators'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjsop';

  constructor() {
    let obs = interval(2000);
    let sub1 = obs.pipe(map((value) => {
      return value * 100

    })).pipe(filter((value) => {
      return value > 500
    }))
    let res = sub1.subscribe(data => {
      console.log(data);
      setTimeout(() => {
        res.unsubscribe();
      }, 7000)
    })


  }



}
