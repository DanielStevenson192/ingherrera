import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
{path: 'inicio', component: LandingPageComponent},
{path: '', pathMatch: 'full', redirectTo: 'inicio'},
{path: '**', pathMatch: 'full', redirectTo: 'inicio'}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
