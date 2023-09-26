import { Component, Input, OnInit } from '@angular/core';
import { work } from 'src/app/interfaces/work.interface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  panelOpenState = false;

  @Input() work_experience: work = {} as work


  constructor() { }

  ngOnInit(): void {
  }

}
