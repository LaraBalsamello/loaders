import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';
import { MaterialModule } from '../material/material.module';

const components = [ TableComponent ]

@NgModule({
  declarations: [ components ],
  imports: [
    MaterialModule,
  ],
  exports: [ components ],
  providers: []
})
export class customCModule { }
