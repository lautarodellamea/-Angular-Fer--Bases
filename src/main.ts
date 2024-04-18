import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


// si trabajaramos con Angular en otras plataformas no usariamos platformBrowserDynamic necesariamente, ya que es para el navegador web
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
