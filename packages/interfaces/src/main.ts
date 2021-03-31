import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import Amplify from 'aws-amplify';
import awsExports from '@habit-mapper-app/infrastructure/amplify/aws-exports';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

Amplify.configure(awsExports);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));
