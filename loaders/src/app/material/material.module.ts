import { NgModule } from "@angular/core";
import {
  MatSidenavModule,
  MatIconModule,
  MatMenuModule,
  MatTooltipModule,
  MatRippleModule,
  MatToolbarModule,
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatListModule,
  MatInputModule,
  MatAutocompleteModule,
  MatTabsModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatSnackBarModule
} from "@angular/material";
import { CommonModule } from "@angular/common";

const materialModules = [
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatListModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatMenuModule,
  MatTooltipModule,
  MatRippleModule,
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatAutocompleteModule,
  MatTabsModule,
  MatSelectModule,
  CommonModule,
  MatProgressSpinnerModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatSnackBarModule
];
@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule {}
