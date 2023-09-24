import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

const components = [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule
]

@NgModule({
  declarations: [],
  imports: components,
  exports: components
    
})
export class SharedModule { }
