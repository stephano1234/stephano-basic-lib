import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsRouteData } from '../cards-menu/cards-menu.model';
import { TitleUtils } from '../utils/title.utils';

const cardRouteData: CardsRouteData = {
  cards: [
    {
      title: 'Dropdown',
      path: 'dropdown'
    },
    {
      title: 'Icon',
      path: 'icon'
    },
    {
      title: 'Input',
      path: 'input'
    },
    {
      title: 'Pagination',
      path: 'pagination'
    },
    {
      title: 'Spinner',
      path: 'spinner'
    },
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
    path: 'dropdown',
    title: TitleUtils.getSelectedComponentTitle('Dropdown'),
    loadComponent: () => import('./dropdown/dropdown.component')
      .then(m => m.DropdownComponent)
  },
  {
    path: 'icon',
    title: TitleUtils.getSelectedComponentTitle('Icon'),
    loadComponent: () => import('./icon/icon.component')
      .then(m => m.IconComponent)
  },
  {
    path: 'input',
    title: TitleUtils.getSelectedComponentTitle('Input'),
    loadComponent: () => import('./input/input.component')
      .then(m => m.InputComponent)
  },
  {
    path: 'pagination',
    title: TitleUtils.getSelectedComponentTitle('Input'),
    loadComponent: () => import('./pagination/pagination.component')
      .then(m => m.PaginationComponent)
  },
  {
    path: 'spinner',
    title: TitleUtils.getSelectedComponentTitle('Spinner'),
    loadComponent: () => import('./spinner/spinner.component')
      .then(m => m.SpinnerComponent)
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
export class ComponentsRoutingModule { }
