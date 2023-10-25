import { ChangeDetectionStrategy, Component, HostBinding, Input } from "@angular/core";

@Component({
  selector: 'sbl-icon',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {

  @Input({ required: true })
  public icon!: string;

  @HostBinding('style.-webkit-mask-image')
  public get maskImage(): string {
    return this.icon ? `url(./assets/icons/${this.icon}.svg)` : 'none';
  }

  @HostBinding('style.display')
  public get containerDisplay(): string {
    return this.icon ? 'inline-block' : 'none';
  }

}
