import { NgModule } from "@angular/core";
import { GhostComponent } from "./ghost/ghost.component";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material/material.module";
import { RouterModule } from "@angular/router";
import { TableGhostComponent } from "./table-ghost/table-ghost.component";

@NgModule({
  declarations: [ GhostComponent, TableGhostComponent ],
  exports: [  GhostComponent, TableGhostComponent ],
  imports: [  CommonModule, MaterialModule, RouterModule  ]
})
export class GhostComponentsModule {}
