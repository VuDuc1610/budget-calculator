import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SecondPageComponent } from './second-page/second-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'second', component: SecondPageComponent}
  /**
   * if u want to create multiple pages for the proj => create multiple path objects
   * { path: '/login', component: MainPageComponent },
   * { path: '/signup', component: MainPageComponent },
   */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
