import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ErrorModule } from './modules/core/errors/error.module';
import { SharedModule } from './modules/shared/shared.module';
import { PublicModule } from './modules/feature/public/public.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { environment } from '../environments/environment';
import { SecureModule } from './modules/feature/secure/secure.module';
import { SnackBarComponent } from './modules/core/services/notification/snackbar.component';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateCmp } from './block-template.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CoreModule } from './modules/core/core.module';

@NgModule({
  declarations: [AppComponent, SnackBarComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    ErrorModule,
    PublicModule,
    SecureModule,
    SharedModule,
    SocialLoginModule,
    BlockUIModule.forRoot({
      // template: BlockTemplateCmp,
      message: 'Loading.................'
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    CoreModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.gsignIn.web.client_id)
          }
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [BlockTemplateCmp]
})
export class AppModule {}
