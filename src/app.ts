//our root app component
import {Component} from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router'

@Component({
  selector: 'my-app',
  providers: [],
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class App {
  constructor(){
    
  }
}