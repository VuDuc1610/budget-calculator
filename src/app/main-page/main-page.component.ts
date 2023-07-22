import { Component } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  budgetItems: BudgetItem[] = new Array<BudgetItem>();

  sum: number = 0;

  constructor(private router: Router){

  }

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    this.sum += newItem.amount;
  }
  deleteItem(item: BudgetItem) {
    this.sum -= item.amount;
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
  }

  updateItem(updateEvent: UpdateEvent) {
    // replace the item with the updated item from the form
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;

    //update new sum value
    this.sum -= updateEvent.old.amount;
    this.sum += updateEvent.new.amount;
  }

  navigateToSecondPage(){
    this.router.navigate(['/second']);
  }
}
