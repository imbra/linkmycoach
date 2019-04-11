import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

    items = ['Coaching session', 'Enter Goals', 'Good fit conversation', 'Coaching session', 'Book'];

    constructor() {
    }

    ngOnInit() {
    }

}

