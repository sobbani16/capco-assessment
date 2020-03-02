import { Component , Input , OnChanges , Output , EventEmitter} from '@angular/core';
@Component({
  selector: 'app-pagination-component',
  templateUrl: './pagination-component.component.html',
  styleUrls: ['./pagination-component.component.css']

})
export class PaginationComponent implements OnChanges {
    @Input() totalRecords = 0;
    @Input() recordsPerPage = 0;

    // tslint:disable-next-line: no-output-on-prefix
    @Output() onPageChange: EventEmitter<number> = new EventEmitter();

    public pages: number [] = [];
    activePage: number;

    ngOnChanges() {
      const pageCount = this.getPageCount();
      this.pages = this.getArrayOfPage(pageCount);
      this.activePage = 1;
      this.onPageChange.emit(1);
    }

    private  getPageCount(): number {
      let totalPage = 0;

      if (this.totalRecords > 0 && this.recordsPerPage > 0) {
        const pageCount = this.totalRecords / this.recordsPerPage;
        const roundedPageCount = Math.floor(pageCount);

        totalPage = roundedPageCount < pageCount ? roundedPageCount + 1 : roundedPageCount;
      }

      return totalPage;
    }

    private getArrayOfPage(pageCount: number): number [] {
      const pageArray: number [] = [];

      if (pageCount > 0) {
          for (let i = 1 ; i <= pageCount ; i++) {
            pageArray.push(i);
          }
      }

      return pageArray;
    }

    onClickPage(pageNumber: number) {
        if (pageNumber < 1) { return; }
        if (pageNumber > this.pages.length) { return; }
        this.activePage = pageNumber;
        this.onPageChange.emit(this.activePage);
    }
}
