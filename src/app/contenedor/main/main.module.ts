import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { ListboxModule } from "primeng/listbox";
import { MainComponent } from "./main.component";

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    ListboxModule,
    RouterModule.forChild([
      {
        path: "",
        component: MainComponent
      }
    ])
  ],
  providers: []
})
export class MainModule {}
