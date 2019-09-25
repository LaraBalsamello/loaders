import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { CommonLoadingComponent } from './common-loading/common-loading.component';
import { SkeletonLoadingComponent } from './skeleton-loading/skeleton-loading.component';
import { customCModule } from '../custom-components/custom-c.module';
import { LoadingModule } from '../loading/loading.module';
import { GhostComponentsModule } from '../ghost-components/ghost-components.module';

const components = [ CommonLoadingComponent, SkeletonLoadingComponent]

@NgModule({
  declarations: [ components ],
  providers: [],
  imports: [ 
    MaterialModule,
    customCModule,
    LoadingModule,
    GhostComponentsModule
  ],
  exports: [ components ]
})
export class PagesModule { }