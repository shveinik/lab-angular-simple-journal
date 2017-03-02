import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalsService } from '../journals.service'

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers: [JournalsService]

})
export class SingleEntryComponent implements OnInit {

journal: any;

  constructor(
    private route: ActivatedRoute,
    private journalId: JournalsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
     this.get(params['id']);
   });
  }

  // getJournalDetails(id) {
  //     this.journalId.get(id)
  //       .subscribe((journal) => {
  //         this.journal = journal;
  //       });
  //   }

get(id){
    this.journalId.get(id)
      .subscribe((journal) => {
        this.journal = journal;
      });
  }

}
