import { Component, OnInit } from '@angular/core';
import { Program } from '../program';
import { ProgramsService } from '../programs.service';
import { Observable } from "rxjs/Rx";
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-programs',
  templateUrl: './manage-programs.component.html',
  styleUrls: ['./manage-programs.component.css']
})
export class ManageProgramsComponent implements OnInit {

  constructor(private programsService: ProgramsService,
              private router: Router) { }

  programs:Observable<Program[]>;

  ngOnInit() {
    this.programs = this.programsService.getPrograms();
  }

  onSelect(id:number){
    console.log('programId = '+id);
  }

  viewDetail(id: number) {
    console.log('programId = ' + id);
    this.router.navigate(['/programs/manageprograms', id]);
  }

}
