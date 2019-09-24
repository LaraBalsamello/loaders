import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { LoadingComponent } from './loading.component';

@NgModule({
  declarations: [
    LoadingComponent,
  ],
  providers: [],
  imports: [ 
    MaterialModule
  ],
  exports: [ LoadingComponent ]
})
export class LoadingModule { }