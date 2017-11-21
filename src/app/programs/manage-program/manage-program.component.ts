import { Component, OnInit } from '@angular/core';
import { Program } from '../program';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manage-program',
  templateUrl: './manage-program.component.html',
  styleUrls: ['./manage-program.component.css']
})
export class ManageProgramComponent implements OnInit {

  program: Program = null;
  programId:number;

  constructor(private route: ActivatedRoute, private location: Location) {
    this.route.params.subscribe(params => {
      this.programId = params['id'];
    });
  }

  ngOnInit() {
    this.program = new Program();
    this.program.id = this.programId;
    this.program.name = 'Program Name';
    this.program.active = true;
  }

  goBack(): void {
    this.location.back();
  }

}
