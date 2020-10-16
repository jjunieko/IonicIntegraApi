import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "page/page1",
    pathMatch: "full",
  },
  {
    path: "folder/:id",
    loadChildren: () =>
      import("./folder/folder.module").then((m) => m.FolderPageModule),
  },
  {
    path: "folder/page/page1",
    loadChildren: () =>
      import("./page/page1/page1.module").then((m) => m.Page1PageModule),
  },
  {
    path: 'page-crud',
    loadChildren: () => import('./page/page-crud/page-crud.module').then( m => m.PageCrudPageModule)
  },
  {
    path: 'modalhistorico',
    loadChildren: () => import('./page/modalhistorico/modalhistorico.module').then( m => m.ModalhistoricoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
