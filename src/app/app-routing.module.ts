import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TitleUtils } from './utils/title.utils';

const routes: Routes = [
  {
    path: 'home',
    title: TitleUtils.getTitle(),
    component: HomeComponent
  },
  {
    path: 'components',
    title: TitleUtils.getUnselectedComponentTitle(),
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
  },
  {
    path: 'directives',
    title: TitleUtils.getUnselectedDirectiveTitle(),
    loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule)
  },
  {
    path: 'pipes',
    title: TitleUtils.getUnselectedPipeTitle(),
    loadChildren: () => import('./pipes/pipes.module').then(m => m.PipesModule)
  },
  {
    path: 'services',
    title: TitleUtils.getUnselectedServiceTitle(),
    loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
