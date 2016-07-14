//main entry point
import {bootstrap} from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {App} from './app';

bootstrap(App, [
    provideRouter(routes)
  ])
  .catch(err => console.error(err));