import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './components/new-component/new-component.component';

const routes: Routes = [
  {path:'', component:AppComponent},
  {path:'signin', component:NewComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
