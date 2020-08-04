import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import basics from '../assets/json/basics.json';
import { NavigationEnd, Router } from '@angular/router';
import { TeamComponent } from '../app/team/team.component';
//import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {




 constructor(private _bottomSheet: MatBottomSheet /*, public translate: TranslateService*/) {
 /* translate.addLangs(['en', 'fr']);
  translate.setDefaultLang('en');
  const browserLang = translate.getBrowserLang();
  translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');*/


}



  title = 'Moonshot';
  logoPath: string;
  meetupPath: string;
  communityName: string;
  communityEmail: string;

  facebookPath: string;
  youtubePath: string;
  LinkedInPath: string;
  instagramPath: string;

  registrationPath: string;



  ngOnInit() {
    this.initBasics();
  }

  bottomMenu() : void {
    this._bottomSheet.open(BottomMenuSheet);
  }

  closeBottomMenu() : void {
    this._bottomSheet.dismiss();
  }


  initBasics(): void {
    this.logoPath = basics["logo-path"];
    this.registrationPath = basics["registrationURL"];
    this.communityName = basics["name"];
    this.communityEmail = basics["email"];
    this.facebookPath = basics["facebook"];
    if (this.facebookPath === "") {
      this.facebookPath = "https://facebook.com";
    }
    this.youtubePath = basics["youtube"];
    if (this.youtubePath === "") {
      this.youtubePath = "https://youtube.com";
    }
    this.LinkedInPath = basics["Linkedin"];
    if (this.LinkedInPath === "") {
      this.LinkedInPath = "https://www.linkedin.com";
    }
    this.instagramPath = basics["instagram"];
    if (this.instagramPath === "") {
      this.instagramPath = "https://instagram.com";
    }
  }

}

@Component({
  selector: 'bottom-menu',
  templateUrl: 'bottom-menu.html',
})

export class BottomMenuSheet {

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomMenuSheet>) {}

  logoPath: string;
  meetupPath: string;
  registrationPath: string;

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  closeBottomMenu() : void {
    this._bottomSheetRef.dismiss();
  }

  ngOnInit() {
    this.initBasics();
  }

  initBasics(): void {
    this.logoPath = basics["logo-path"];
    this.meetupPath = "https://meetup.com/" + basics["meetup-slug"];
    this.registrationPath = basics["registrationURL"];
  }

}
