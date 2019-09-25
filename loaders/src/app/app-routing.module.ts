import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkeletonLoadingComponent } from './pages/skeleton-loading/skeleton-loading.component';
import { CommonLoadingComponent } from './pages/common-loading/common-loading.component';

const routes: Routes = [ { path: 'skeleton-loading', component: SkeletonLoadingComponent },
                         { path: 'common-loading', component: CommonLoadingComponent}
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
