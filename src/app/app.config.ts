import {  ApplicationConfig, provideZoneChangeDetection,  } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling} from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: 
  [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withEnabledBlockingInitialNavigation(), 
    withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled'})), provideClientHydration(withEventReplay())]
};






