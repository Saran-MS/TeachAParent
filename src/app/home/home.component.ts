import { Component, OnInit , ViewEncapsulation} from '@angular/core';

import {FaqItem} from '@angular-material-extensions/faq';

import basics from '../../assets/json/basics.json';
import sponsors from '../../assets/json/sponsors.json';
import partners from '../../assets/json/partners.json';
import speakers from '../../assets/json/speakers.json';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  speakersList: any[] = [];
  partnersList: any[] = [];
  sponsorsList: any[] = [];
  communityName: string;
  communityEmail: string;
  communityMobile: string;
  logoPath: string;
  facebookPath: string;
  twitterPath: string;
  instagramPath: string;
  eventLocation: string;
  eventDate: string;
  registrationPath: string;
  meetupPath: string;
  meetupAPIKey: string;
  deadline;

  list: FaqItem[] = [
  {
          question: 'Why Teach a Parent? ',
          answer: 'It is a world-renown practice where adults teach to their children. Days are gone where elders knew everything which is happening around the world. Children are getting smarter than parents, and hence the basics of new stuff can be taught by the students to the parents who want to get started.'
        },
        {
          question: 'How long is Teach a Parent?',
          answer: 'It\'s an one hour webinar series that is going to happen from July 8 2020 to July 17 2020'
        },
        {
          question: 'How much can one learn in an hour?',
          answer: 'One hour is to get an idea of the vast topic and to ignite your spark. The measure of success of this campaign is not in how much we learn and the success is reflected in broad participation across various socioeconomic groups and the resulting increase in enrolment and participation occurs. Besides the attendees, another "learner" is the educator who gains confidence after one hour that they can have the feel of mastering the expertise that they are presenting with .'
        },
        {
          question: 'Who are behind the Teach a Parent campaign?',
          answer: 'A dedicative team of technicians, designers, marketers and hosts are striving hard to educate the parents with what is highly necessary in today’s world.'
        },
        {
          question: 'What will be the mode of language throughout the webinar?',
          answer: 'The Webinar sessions will be conducted in English as well as in Tamil. However, clarifications will be done in all languages.'
        },
        {
          question: 'How can I access the webinar series or YouTube videos?',
          answer: 'You can view from any device (smartphone/laptop/desktop/iPad) either by registering through our platform oryou can find it in our Facebook page or YouTube channel. Youtube: https://www.youtube.com/channel/UCOPG-sxV_rmHsgCPR_NQDXg'
        },
        {
          question: 'Is Teach a Parent only for parents?',
          answer: 'No, the attendees can be anyone. If you are fascinated about one of our topics, then you can register and get to know what’s happening around you.Teach a Parent is especially for the parents who want to learn from the younger generation and in the fun way.'
        },
        {
          question: 'I don\'t know to operate my device. Are there any easier way to attend? ',
          answer: 'Yes! Register your phone number and you\'ll receive updates through SMS or WhatsApp before the event.'
        },
        {
          question: 'Will the session be hands-on based?',
          answer: 'No. Right now, it is only an information-based session.'
        },
        {
          question: 'Are only attendees from Coimbatore allowed?',
          answer: 'No, this is an international event. Thus, attendees with the thirst for knowledge around the world can attend it. Only the hosts of the session and the executive team are based in Coimbatore (India).'
        },
        {
          question: 'Are there any fees involved?',
          answer: 'No, it is absolutely free! We don\'t charge any amount throughout the campaign.'
        },
        {
          question: 'Will I be permitted to participate only when I register?',
          answer: 'No. Registration is optional. If you don\'t wish to register, you can access it from our YouTube channel later.'
        },
        {
          question: 'Do you provide any certificates for participation?',
          answer: ' we\'ll provide them for students on request.'
        }
  ];

  constructor() { }

  ngOnInit() {
    this.initBasics();
    this.initSpeakers();
    this.initSponsors();
    this.initPartners();
  }

  initBasics(): void {
    this.logoPath = basics["logo-path"];
    this.meetupPath = "https://meetup.com/" + basics["meetup-slug"];
    this.meetupAPIKey = basics["meetup-api-key"];
    this.communityEmail = basics["email"];
    this.eventLocation = basics["eventLocation"];
    this.eventDate = basics["eventDate"];
    this.deadline = new Date(this.eventDate);
    this.communityMobile = basics["mobile"];
    this.communityName = basics["name"];
    this.registrationPath = basics["registrationURL"];
    this.facebookPath = basics["facebook"];
    if (this.facebookPath === "") {
      this.facebookPath = "https://facebook.com";
    }
    this.twitterPath = basics["twitter"];
    if (this.twitterPath === "") {
      this.twitterPath = "https://twitter.com";
    }
    this.instagramPath = basics["instagram"];
    if (this.instagramPath === "") {
      this.instagramPath = "https://instagram.com";
    }
  }

  initSpeakers(): void {
    var parent = this;
    speakers.forEach(function(object){
      parent.speakersList.push({'sessionName': object["sessionName"], 'sessionStartTime': object["sessionStartTime"],
      'sessionEndTime': object["sessionEndTime"], 'sessionColor': object["sessionColor"],
      'speakerName': object["speakerName"], 'speakerRole': object["speakerRole"], 'speakerImage': object["speakerImage"]});
    });
  }

  initPartners(): void {
    var parent = this;
    partners.forEach(function(object){
      parent.partnersList.push({'name': object["name"], 'logoPath': object["logo"]});
    });
  }

  initSponsors(): void {
    var parent = this;
    sponsors.forEach(function(object){
      parent.sponsorsList.push({'name': object["name"], 'logoPath': object["logo"], 'level': object["level"]});
    });
  }

}
