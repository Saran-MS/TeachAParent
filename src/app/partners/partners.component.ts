import { Component, OnInit } from '@angular/core';
import team from '../../assets/json/team.json';
@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  shoutout: any[] = [];
  outreach: any[] = [];

  constructor() { }

  ngOnInit() {
    this.initTeam();
  }

  initTeam(): void {
    var parent = this;

    team["shoutout"].forEach(function(object){
      parent.shoutout.push({'name': object["name"], 'image': object["image"]
      });
    });
    team["outreach"].forEach(function(object){
      parent.outreach.push({'name': object["name"], 'image': object["image"]
      });
    });

  }

}
