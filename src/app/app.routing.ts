import { ExtraOptions, PreloadAllModules, Routes } from "@angular/router";

import { AppComponent } from "./app.component";

export const ROOT_ROUTES: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./contenedor/main/main.module").then(m => m.MainModule)
  },
  {
    path: "btn",
    loadChildren: () => import("./shared/btn/btn.module").then(m => m.BtnModule)
  },
  {
    path: "**",
    redirectTo: "not-found"
  }
];

export const ROOT_OPTIONS: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  initialNavigation: "enabled"
};
