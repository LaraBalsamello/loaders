import { Component, Input } from "@angular/core";

@Component({
  selector: "app-table-ghost",
  templateUrl: "./table-ghost.component.html",
  styleUrls: ["./table-ghost.component.scss"]
})
export class TableGhostComponent {
  @Input() iterationCountTH;
  @Input() iterationCountTBTR;
  @Input() iterationCountTBTD;
}
