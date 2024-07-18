import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideHttpClient(
      withFetch()
    )]
};

/**
 * configuration de l'HttpClient avec la fonction provideHttpClient() 
 * le withFetch() est un parametre de la fn permettant de config l'api fetch afin de mieux effectuer nos download
 */
