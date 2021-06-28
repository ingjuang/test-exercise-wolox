import { Component, OnInit } from '@angular/core';
import { ListService } from '../../shared/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  list$: any;
  filterString: string = "";
  filterByName: any[] = [];
  constructor(private apiListService: ListService) {}

  ngOnInit(): void {
    this.loadData();
    
  }

  loadData() {
    this.apiListService.getList().then((res: any) => {
      this.list$ = res;
    });
  }

  orderAZ() {
    console.log('a');
    this.list$.sort(function (a: any, b: any) {
      if (a.tech > b.tech) {
        return 1;
      }
      if (a.tech < b.tech) {
        return -1;
      }
      return 0;
    });
    console.log(this.list$);
    
  }
  
  orderZA() {
    this.list$.sort(function (a: any, b: any) {
      if (a.tech.toLowerCase() < b.tech.toLowerCase()) {
        return 1;
      }
      if (a.tech.toLowerCase() > b.tech.toLowerCase()) {
        return -1;
      }
      return 0;
    });
    console.log(this.list$);
  }

}
