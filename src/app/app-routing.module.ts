import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { DatabaseComponent } from './database/database.component';


const routes: Routes = [
  
  {
    path: 'entry/:id',
    component: FormComponent
  },

  {
    path: 'db',
    component: DatabaseComponent
  },

  {
    path: 'store',
    component: DataComponent
  },

  {
    path: 'home',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
