import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-btn",
  templateUrl: "./btn.component.html",
  styleUrls: ["./btn.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class BtnComponent {
  @Input() isLoading: boolean = false;
  @Input() disabled: boolean = false;
  @Input() type: string = "button";
  @Input() class: string = "";
  @Input() text: string = "";
  @Input() id: string = "";

  @Output() clickBtn: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router) {}

  public btnClick(): void {
    this.clickBtn.emit();
    this.router.navigate(["/"]);
  }
}
