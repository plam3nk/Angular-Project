import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { CakeModule } from './cake/cake.module';
import { SharedModule } from './shared/shared.module';
import { appInterceptorProvider } from './app.interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, AuthenticateComponent],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    CakeModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
