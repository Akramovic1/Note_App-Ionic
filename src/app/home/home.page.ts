import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  FirebaseService
} from '../firebase.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public notesTransactions: any;
  constructor(private db: FirebaseService) {
    this.db.get_transaction()
    this.notesTransactions = this.db.notesTransaction;
    console.log(this.notesTransactions)
  }
  deleteNote(id) {
    this.db.delete_transaction(id)
    this.db.get_transaction()
    this.notesTransactions = this.db.notesTransaction;
  }
}


