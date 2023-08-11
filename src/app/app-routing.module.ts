import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvemComponent } from './convem/convem.component';

const routes: Routes = [
  { path: '', redirectTo: 'convem', pathMatch: 'full' },
  { path: 'convem', component: ConvemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
