import { Component, OnInit } from '@angular/core';
import { work } from 'src/app/interfaces/work.interface';
import { ExperienceService } from '../../services/experience.service';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent implements OnInit {

  constructor(
    private  experienceService: ExperienceService
  ) { }


  get experiences(){
    return this.experienceService.works
  }

  ngOnInit(): void {
  }

}
