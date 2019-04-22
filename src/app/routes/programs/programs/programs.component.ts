import { Component, OnInit} from '@angular/core';
import { Item } from '../../../shared/models/coaching-process-item';

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
        {id: '1', title: 'How to get better sessions', type: 'session' },
        {id: '2', title: 'Basic fit Questions', type: 'file' },
        {id: '3', title: 'Fill in the Basic Fit Quesions', type: 'task' },
        {id: '4', title: 'Discuss Basic fit', type: 'session' },
        {id: '5', title: 'Another day session', type: 'session' },
        {id: '6', title: 'Follow up task', type: 'task' },
        {id: '7', title: 'Final session', type: 'session' }
      ];
    }

}

