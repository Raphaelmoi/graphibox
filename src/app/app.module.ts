import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID  } from '@angular/core'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';

import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { SliderComponent } from './components/home/slider/slider.component';
import { AboutusComponent } from './components/home/aboutus/aboutus.component';
import { OurSkillsComponent } from './components/home/our-skills/our-skills.component';
import { LastnewsComponent } from './components/home/lastnews/lastnews.component';
import { NewsItemComponent } from './components/home/lastnews/news-item/news-item.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FooterComponent } from './components/footer/footer.component';
import { DecorationComponent } from './components/decoration/decoration.component';
import { AllnewsComponent } from './components/allnews/allnews.component';
import { AllnewsItemComponent } from './components/allnews/allnews-item/allnews-item.component';
import { OnenewsComponent } from './components/allnews/onenews/onenews.component';
import { BackendComponent } from './components/backend/backend.component';
import { ContactListComponent } from './components/backend/contact-list/contact-list.component';
import { MessageLsitComponent } from './components/backend/message-lsit/message-lsit.component';
import { SendMailComponent } from './components/backend/send-mail/send-mail.component';
import { LoginComponent } from './components/login/login.component';

import { WebServiceService } from './services/web-service.service';
import { AuthGuardService } from './services/auth-guard.service';

registerLocaleData(localeFr, 'fr');

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'contact',  component: ContactusComponent },
  { path: 'news', component: AllnewsComponent },
  { path: 'news/view/:id', component: OnenewsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'control', canActivate: [AuthGuardService], component: BackendComponent },
  { path: 'control/:view', canActivate: [AuthGuardService], component: BackendComponent },
  { path: 'control/:view/:email', canActivate: [AuthGuardService], component: BackendComponent },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    AboutusComponent,
    LastnewsComponent,
    ContactusComponent,
    FooterComponent,
    SliderComponent,
    DecorationComponent,
    OurSkillsComponent,
    NewsItemComponent,
    AllnewsComponent,
    AllnewsItemComponent,
    OnenewsComponent,
    LoginComponent,
    BackendComponent,
    ContactListComponent,
    MessageLsitComponent,
    SendMailComponent
  ],
  imports: [
    HttpClientModule,
    SlideshowModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {     onSameUrlNavigation: 'reload', anchorScrolling: 'enabled'}),
    CommonModule,
  ],
  providers: [ WebServiceService , AuthGuardService, {provide: LOCALE_ID, useValue: "fr" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
