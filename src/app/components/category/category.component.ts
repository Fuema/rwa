import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { Category } from '../../model';
import { CategoryService } from '../../services';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit {
  Category: any = [];
  sub: any;

  constructor(private restApi: CategoryService) {
  }

  ngOnInit() {
    this.loadCategory();
  }

  // Get employees list
  loadCategory() {
    return this.restApi.getCategories().subscribe((data: {}) => {
      this.Category = data;
    });
  }

/*   ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  } */
}
