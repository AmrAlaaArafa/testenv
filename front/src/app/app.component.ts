import { Component } from '@angular/core';
import { environment } from 'environment/environment';
@Component({
  selector: 'app-root',
  template: `
    <label style="color: white;">Andrew Samir / Amr Alaa / Nada Maged/ {{test}}</label>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'first_project';
  test=environment.BACKEND_URL;
}
