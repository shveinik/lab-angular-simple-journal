import { Component, OnInit } from '@angular/core';
import { JournalsService } from '../journals.service'

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [JournalsService]
})
export class EntryListComponent implements OnInit {

journals:any;

  constructor(private journal : JournalsService) { }

  ngOnInit() {
    this.journal.getAll()
      .subscribe((journals) => {
        this.journals = journals;
      })

  }

}
