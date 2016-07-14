import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
  selector: 'component-a',
  template: `

    Component A
    <router-outlet></router-outlet>
    <router-outlet name="aux"></router-outlet>
    <a routerLink="/a/1/b">LINKTOB</a>
    <a routerLink="/a/1/c">LINKTOC</a>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class ComponentA{}

@Component({
  selector: 'component-b',
  template: `Component B`
})
export class ComponentB{}

@Component({
  selector: 'component-c',
  template: `Component C
    <button (click)="goToAux()">go to aux</button>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class ComponentC {

  constructor (private router: Router) {}

  goToAux () {

    this.router.navigateByUrl('/a/1/(c//aux:2)');
    return false;
  }
}

@Component({
  selector: 'component-d',
  template: `AUX COMPONENT:`
})
export class ComponentD {}
