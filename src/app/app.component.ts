import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bmoat';
  body;

  constructor() {
    // todo make new key
    fetch('https://api.themoviedb.org/3/movie/550?api_key=5d289bc5b86e132b224cb3d2854d6990')
      .then(body => body.json())
      .then(res => this.body = res);

    console.log('Value => ');
  }
}
