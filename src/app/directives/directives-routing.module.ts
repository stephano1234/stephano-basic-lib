import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsRouteData } from '../cards-menu/cards-menu.model';
import { TitleUtils } from '../utils/title.utils';

const cardRouteData: CardsRouteData = {
  cards: [
    {
      title: 'Mask',
      path: 'mask'
    },
    {
      title: 'Bottom Scroll',
      path: 'bottom-scroll'
    },
    {
      title: 'Allowed Pattern',
      path: 'allowed-pattern'
    },
    {
      title: 'Table',
      path: 'table'
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
    path: 'mask',
    title: TitleUtils.getSelectedDirectiveTitle('Mask'),
    loadComponent: () => import('./mask/mask.component')
      .then(m => m.MaskComponent)
  },
  {
    path: 'allowed-pattern',
    title: TitleUtils.getSelectedDirectiveTitle('Allowed Pattern'),
    loadComponent: () => import('./allowed-pattern/allowed-pattern.component')
      .then(m => m.AllowedPatternComponent)
  },
  {
    path: 'bottom-scroll',
    title: TitleUtils.getSelectedDirectiveTitle('Bottom Scroll'),
    loadComponent: () => import('./bottom-scroll/bottom-scroll.component')
      .then(m => m.BottomScrollComponent)
  },
  {
    path: 'table',
    title: TitleUtils.getSelectedDirectiveTitle('Table'),
    loadComponent: () => import('./table/table.component')
      .then(m => m.TableComponent)
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
export class DirectivesRoutingModule { }
