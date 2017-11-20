import { Component, OnInit } from '@angular/core';
import { Program } from '../program';
import { ProgramsService } from '../programs.service';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-manage-programs',
  templateUrl: './manage-programs.component.html',
  styleUrls: ['./manage-programs.component.css']
})
export class ManageProgramsComponent implements OnInit {

  constructor(private programsService:ProgramsService) { }

  programs:Observable<Program[]>;

  ngOnInit() {
    this.programs = this.programsService.getPrograms();
  }

  onSelect(id:number){
    console.log('programId = '+id);
  }
}
