import { Component, OnInit} from '@angular/core';
import { Item, ItemType } from '../../../shared/models/coaching-process-item';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
    items: Item[];

    constructor() {
    }

    ngOnInit() {
      this.getItems();
    }

    getItems(): void {
      this.items = [
        {id: '1', title: 'How to get better sessions', type: ItemType.session, icon: this.itemTypeIcon(ItemType.session) },
        {id: '2', title: 'Basic fit Questions', type: ItemType.file, icon: this.itemTypeIcon(ItemType.file) },
        {id: '3', title: 'Fill in the Basic Fit Quesions', type: ItemType.task, icon: this.itemTypeIcon(ItemType.task) },
        {id: '4', title: 'Discuss Basic fit', type: ItemType.session, icon: this.itemTypeIcon(ItemType.session) },
        {id: '5', title: 'Another day session', type: ItemType.session, icon: this.itemTypeIcon(ItemType.session) },
        {id: '6', title: 'Follow up task', type: ItemType.task, icon: this.itemTypeIcon(ItemType.task) },
        {id: '7', title: 'Final session', type: ItemType.session, icon: this.itemTypeIcon(ItemType.session) }
      ];
    }

    itemTypeIcon(itemType: ItemType): string {
      switch (itemType) {
        case ItemType.session:
          return 'icon-people';
          break;
        case ItemType.task:
          return 'icon-note';
          break;
        case ItemType.file:
          return 'icon-doc';
          break;
        default:
          return 'icon-cup';
          break;
      }
    }

}

