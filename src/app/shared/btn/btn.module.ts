import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { BtnComponent } from "./btn.component";

@NgModule({
  declarations: [BtnComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: BtnComponent
      }
    ])
  ],
  exports: [BtnComponent]
})
export class BtnModule {}
