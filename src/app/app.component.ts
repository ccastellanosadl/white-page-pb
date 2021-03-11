import { Component, OnInit, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;

  public opciones: any[] = [];

  ngOnInit(): void {
    this.opciones = [{ name: "Boton PB Front", code: "1" }];
  }

  public redirect(event:any): void {
    console.log(event);
  }
}
