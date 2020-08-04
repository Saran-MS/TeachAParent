import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { SessionsComponent } from './sessions/sessions.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsComponent } from './terms/terms.component';
import { AboutComponent } from './about/about.component';
import { BrandsComponent } from './brands/brands.component';
import { RegisterComponent } from './register/register.component';
import { PartnersComponent } from './partners/partners.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'speakers', component: EventsComponent },
  { path: 'sessions', component: SessionsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'privacy', component: PrivacypolicyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'brands', component: BrandsComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'partners', component: PartnersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
