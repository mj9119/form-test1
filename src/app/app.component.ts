import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  //templateUrl: './app.component.html',
  template: `
      <div>
        <myquiz-app></myquiz-app>
      </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
