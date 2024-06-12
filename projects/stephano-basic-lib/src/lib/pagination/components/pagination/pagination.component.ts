import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { tap } from "rxjs";
import { Pagination } from "../../models/pagination.model";

@Component({
  selector: 'sbl-pagination',
  template: `
    <div class="items-per-page-selector">
      <span>Items per page:</span>
      <sbl-dropdown
        [formControl]="itemsPerPageControl"
        [data]="pageOptions"
        [displayError]="false"
        [disableClearButton]="true"
      ></sbl-dropdown>
    </div>
    <div>
      Page: <span>{{ page | pageRange:itemsPerPageControl.value!:total }}</span>
      of <span>{{ lastPage }}</span>
    </div>
    <div class="page-buttons">
      <sbl-icon icon="chevrons-left" (click)="page = 0"></sbl-icon>
      <sbl-icon icon="chevron-left" (click)="page = page - 1"></sbl-icon>
      <sbl-icon icon="chevron-right" (click)="page = page + 1"></sbl-icon>
      <sbl-icon icon="chevrons-right" (click)="page = lastPage - 1"></sbl-icon>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnInit, OnDestroy {

  private initialized = false;
  protected lastPage = 0;
  private _total!: number;
  @Input({ required: true })
  public set total(total: number) {
    this._total = total;
    this.itemsPerPageControl.setValue(this.pageOptions[0]);
  };
  public get total(): number {
    return this._total;
  };
  private _page = 0;
  @Input()
  public set page(page: number) {
    if (page >= 0 && page < this.lastPage) {
      this._page = page;
      this.emitPagination();
    }
  };
  public get page(): number {
    return this._page;
  };
  public _pageOptions = [5, 10, 25, 50, 100];
  @Input()
  public set pageOptions(pageOptions: number[]) {
    this._pageOptions = pageOptions;
    this.itemsPerPageControl.setValue(this.pageOptions[0]);
  };
  public get pageOptions(): number[] {
    return this._pageOptions;
  };
  @Output()
  public paginationChange = new EventEmitter<Pagination>();
  protected readonly itemsPerPageControl = new FormControl(this.pageOptions[0]);
  private readonly itemsPerPageChangeSub = this.itemsPerPageControl.valueChanges.pipe(
    tap(itemsPerPage => {
      this._page = 0;
      itemsPerPage && (this.lastPage = Math.ceil(this.total / itemsPerPage));
      this.emitPagination();
    }),
  ).subscribe();

  public ngOnInit(): void {
    this.initialized = true;
  }

  public ngOnDestroy(): void {
    this.itemsPerPageChangeSub.unsubscribe();
  }

  private emitPagination(): void {
    this.initialized && this.paginationChange.emit({
      page: this.page,
      size: this.itemsPerPageControl.value!,
    });
  }

}
