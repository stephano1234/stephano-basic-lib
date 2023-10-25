import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'pageRange' })
export class PageRangePipe implements PipeTransform {

  public transform(page: number, itemsPerPage: number, total: number): string {
    const initial = page * itemsPerPage + 1;
    const final = (page + 1) * itemsPerPage;
    const adjustedFinal = final < total ? final : total;
    return `${initial} - ${adjustedFinal}`;
  }

}
