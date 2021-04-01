import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './domain-modules/user/user.service';
import { HabitsService } from './domain-modules/habits/habits.service';
import { AuthInterceptor } from './domain-modules/authentication/auth.interceptor';
import { ApiInterceptorFactory } from './domain-modules/api/api.interceptor';
import { NewSessionPage } from './pages/user/new-session.page';

@NgModule({
  declarations: [AppComponent, NewSessionPage],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AmplifyUIAngularModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UserService,
    HabitsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: () => ApiInterceptorFactory(environment),
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
