import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';


const components = [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatIconModule,
]

@NgModule({
  declarations: [],
  imports: components,
  exports: components
    
})
export class SharedModule { }
