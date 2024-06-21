import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { map, tap } from 'rxjs';

@Component({
  selector: 'sbld-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('opened', [
      // $menu-button-size: 2rem;
      state('false', style({ transform: 'translateX(calc(-100% + 2rem))' })),
      state('true', style({ transform: 'translateX(0)' })),
      transition('true <=> false', [
        animate('500ms linear'),
      ]),
    ]),
    trigger('backdrop', [
      state('void', style({ opacity: '0' })),
      state('*', style({ opacity: '*' })),
      transition('void <=> *', [
        animate('500ms linear'),
      ]),
    ]),
  ],
})
export class NavMenu {

  @Input({ required: true })
  public items: { name: string, link: string }[] = [];
  protected isOpen = false;
  protected readonly isHandset$ = inject(BreakpointObserver).observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    tap(matches => matches && (this.isOpen = false)),
  );

}
