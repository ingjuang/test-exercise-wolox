import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { ButtonComponent } from '../../components/button/button.component';

@NgModule({
  declarations: [
    LandingComponent, 
    ButtonComponent],
  imports: [
    CommonModule, 
    LandingRoutingModule
  ],
  exports:[ButtonComponent]
})
export class LandingModule {}
