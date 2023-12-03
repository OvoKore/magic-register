import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CollectionComponent } from './pages/collection/collection.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'collection/:id', component: CollectionComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
