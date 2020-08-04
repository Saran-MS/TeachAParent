import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { AppComponent, BottomMenuSheet } from './app.component';
import { SidebarModule } from 'ng-sidebar';
import { MatFaqModule } from '@angular-material-extensions/faq';

import { registerLocaleData } from '@angular/common';
//import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
//import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import en from '@angular/common/locales/en';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
//import { HttpClient } from '@angular/common/http';
import { HttpClientModule} from '@angular/common/http';
import { MatBottomSheetModule, MatListModule } from '@angular/material';
import { EventsComponent } from './events/events.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SessionsComponent } from './sessions/sessions.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsComponent } from './terms/terms.component';
import { AboutComponent } from './about/about.component';
import { BrandsComponent } from './brands/brands.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { RegisterComponent } from './register/register.component';
import { MatSnackBar , MatSnackBarModule } from '@angular/material/snack-bar';
import { PartnersComponent } from './partners/partners.component';
registerLocaleData(en);

/*export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}*/

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BottomMenuSheet,
    EventsComponent,
    TeamComponent,
    ContactComponent,
    SessionsComponent,
    PrivacypolicyComponent,
    TermsComponent,
    AboutComponent,
    BrandsComponent,
    RegisterComponent,
    PartnersComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    MatBottomSheetModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    SidebarModule.forRoot(),
    MatFaqModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatSnackBarModule,
   /* TranslateModule.forRoot({
      loader : {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),*/
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [
    BottomMenuSheet,

  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
