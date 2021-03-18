import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../services/program.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.page.html',
  styleUrls: ['./calender.page.scss'],
})
export class CalenderPage implements OnInit {
  //hour time
  constructor(private programService:ProgramService) { }
 
  
  ngOnInit() {}
  }


