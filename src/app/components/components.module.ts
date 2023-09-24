import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { ExperienceComponent } from './experience/experience.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    HeaderComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
})
export class ComponentsModule { }
