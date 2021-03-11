import { Component, OnInit, VERSION } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  name = "Angular " + VERSION.major;

  public opciones: any[] = [];

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.opciones = [{ name: "Boton PB Front", code: "1" }];
  }

  public redirect(event: any): void {
    console.log(event);
    this.router.navigate(["/btn"]);
  }
}
