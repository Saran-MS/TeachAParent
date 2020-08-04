import { Component, OnInit } from '@angular/core';
import speakers from '../../assets/json/speakers.json';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

  speakersList: any[] = [];

  constructor() { }

  ngOnInit() {
    this.initTeam();
  }

  initTeam(): void {
    var parent = this;
    speakers.forEach(function(object){
      parent.speakersList.push({'sessionName': object["sessionName"],'sessionDate': object["sessionDate"], 'sessionStartTime': object["sessionStartTime"], 'sessionEndTime': object["sessionEndTime"],
      'sessionColor': object["sessionColor"], 'name': object["speakerName"], 'role': object["speakerRole"], 'image': object["speakerImage"],
      'twitter': object["twitter"], 'github': object["github"], 'linkedin': object["linkedin"], 'link': object["link"],
      'sessionDescription': object["sessionDescription"], 'speakerDescription': object["speakerDescription"]});
    });
  }

}
