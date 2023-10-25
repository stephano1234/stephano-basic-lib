import { PaginationComponent } from "./components/pagination/pagination.component";
import { PageRangePipe } from "./pipes/page-range.pipe";

export const pagination = [
  PaginationComponent,
  PageRangePipe,
];

// Components
export * from './components/pagination/pagination.component';
// Pipes
export * from './pipes/page-range.pipe';
// Models
export * from './models/pagination.model';
