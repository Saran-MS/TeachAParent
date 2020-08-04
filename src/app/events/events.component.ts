import { Component, OnInit } from '@angular/core';
import speakers from '../../assets/json/speakers.json';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

  speakersList: any[] = [];

  constructor() { }

  ngOnInit() {
    this.initTeam();
  }

  initTeam(): void {
    var parent = this;
    speakers.forEach(function(object){
      parent.speakersList.push({'sessionName': object["sessionName"], 'sessionStartTime': object["sessionStartTime"], 'sessionEndTime': object["sessionEndTime"],
      'sessionColor': object["sessionColor"], 'name': object["speakerName"], 'role': object["speakerRole"], 'image': object["speakerImage"],
      'description': object["speakerDescription"],'twitter': object["twitter"], 'github': object["github"], 'linkedin': object["linkedin"], 'link': object["link"]});
    });
  }

}
