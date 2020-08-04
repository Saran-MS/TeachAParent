import { Component, OnInit } from '@angular/core';
import team from '../../assets/json/team.json';
import speakers from '../../assets/json/speakers.json';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  speakersList: any[] = [];
  leads: any[] = [];
  coreTeam: any[] = [];
  internTeam: any[] = [];
  campusTeam: any[] = [];
  developmentTeam: any[] = [];
  alumniTeam: any[] = [];
  paws: any[] = [];


  constructor() { }

  ngOnInit() {
    this.initTeam();
  }

  initTeam(): void {
    var parent = this;

    speakers.forEach(function(object){
      parent.speakersList.push({'sessionName': object["sessionName"], 'sessionStartTime': object["sessionStartTime"],
      'sessionEndTime': object["sessionEndTime"], 'sessionColor': object["sessionColor"],
      'speakerName': object["speakerName"], 'speakerRole': object["speakerRole"], 'speakerImage': object["speakerImage"]});
    });

    team["leads"].forEach(function(object){
      parent.leads.push({'name': object["name"], 'image': object["image"],
      'role': object["role"], 'twitter': object["twitter"], 'github': object["github"],
      'linkedin': object["linkedin"], 'link': object["link"]});
    });
    team["core"].forEach(function(object){
      parent.coreTeam.push({'name': object["name"], 'image': object["image"],
      'role': object["role"], 'twitter': object["twitter"], 'github': object["github"],
      'linkedin': object["linkedin"], 'link': object["link"]});
    });
    team["interns"].forEach(function(object){
      parent.internTeam.push({'name': object["name"], 'image': object["image"],
      'college': object["college"], 'twitter': object["twitter"], 'github': object["github"],
      'linkedin': object["linkedin"], 'link': object["link"]});
    });
    team["campus"].forEach(function(object){
      parent.campusTeam.push({'name': object["name"], 'image': object["image"],
      'college': object["college"], 'twitter': object["twitter"], 'github': object["github"],
      'linkedin': object["linkedin"], 'link': object["link"]});
    });
    team["development"].forEach(function(object){
      parent.developmentTeam.push({'name': object["name"], 'image': object["image"],
      'role': object["role"], 'twitter': object["twitter"], 'github': object["github"],
      'linkedin': object["linkedin"], 'link': object["link"]});
    });
    team["alumni"].forEach(function(object){
      parent.alumniTeam.push({'name': object["name"], 'image': object["image"],
      'college': object["college"], 'twitter': object["twitter"], 'github': object["github"],
      'linkedin': object["linkedin"], 'link': object["link"]});
    });
    team["paws"].forEach(function(object){
      parent.paws.push({'name': object["name"], 'image': object["image"]
      });
    });

  }

}
