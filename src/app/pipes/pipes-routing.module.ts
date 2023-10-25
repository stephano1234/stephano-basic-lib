import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsRouteData } from '../cards-menu/cards-menu.model';
import { TitleUtils } from '../utils/title.utils';

const cardRouteData: CardsRouteData = {
  cards: [
    {
      title: 'Get Property',
      path: 'get-property'
    }
  ]
};

const routes: Routes = [
  {
    path: '',
    data: cardRouteData,
    loadComponent: () => import('../cards-menu/cards-menu.component')
      .then(m => m.CardsMenuComponent)
  },
  {
    path: 'get-property',
    title: TitleUtils.getSelectedComponentTitle('Get Property'),
    loadComponent: () => import('./get-property/get-property.component')
      .then(m => m.GetPropertyComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesRoutingModule { }
