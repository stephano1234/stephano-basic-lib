import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsRouteData } from '../cards-menu/cards-menu.model';
import { TitleUtils } from '../utils/title.utils';

const cardRouteData: CardsRouteData = {
  cards: [
    {
      title: 'Modal',
      path: 'modal'
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
    path: 'modal',
    title: TitleUtils.getSelectedServiceTitle('Modal'),
    loadComponent: () => import('./modal/modal.component')
      .then(m => m.ModalComponent)
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
export class ServicesRoutingModule { }
