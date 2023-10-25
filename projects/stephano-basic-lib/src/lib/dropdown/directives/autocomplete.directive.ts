import { Directive, HostListener, OnDestroy, inject } from "@angular/core";
import { DropdownComponent } from "../components/dropdown/dropdown.component";
import { DropdownData } from "../models/dropdown.model";
import { Subject, debounceTime, tap } from "rxjs";

@Directive({
  selector: 'sbl-dropdown[autocomplete]'
})
export class AutocompleteDirective implements OnDestroy {

  private readonly dropdown = inject(DropdownComponent, { self: true });
  private readonly searchSubject = new Subject<void>();
  private readonly searchSub = this.searchSubject.asObservable().pipe(
    debounceTime(400),
    tap(() => this.dropdown.isOpen ?
      this.dropdown.showDataSubject.next() : this.dropdown.isOpenSubject.next(true)
    ),
  ).subscribe();

  @HostListener('input')
  public onInput() {
    this.setFilterFunction(this.dropdown.inputValue);
    this.searchSubject.next();
  }

  @HostListener('focusout')
  public onFocusout() {
    this.dropdown.filterFunction = null;
  }

  public ngOnDestroy(): void {
    this.searchSub.unsubscribe();
  }

  private setFilterFunction(search: string): void {
    this.dropdown.filterFunction = search ?
      (d: DropdownData) => String(d.display).includes(search) : null;
  }

}
