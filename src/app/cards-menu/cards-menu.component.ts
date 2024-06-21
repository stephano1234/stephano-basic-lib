import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { map } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'sbld-cards-menu',
  templateUrl: './cards-menu.component.html',
  styleUrls: ['./cards-menu.component.scss'],
  standalone: true,
  imports: [
    SharedModule
  ]
})
export class CardsMenuComponent {

  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  protected readonly cards$ = this.activatedRoute.data.pipe(
    map(cardRouteData => cardRouteData['cards']),
  );
  protected readonly isHandset$ = inject(BreakpointObserver).observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
  );

  protected open(path: string) {
    this.router.navigate([path], { relativeTo: this.activatedRoute });
  }

}
