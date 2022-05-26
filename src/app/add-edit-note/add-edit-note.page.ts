import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  FirebaseService,
} from '../firebase.service';

@Component({
  selector: 'app-add-edit-note',
  templateUrl: './add-edit-note.page.html',
  styleUrls: ['./add-edit-note.page.scss'],
})
export class AddEditNotePage implements OnInit {
  isEdit: boolean;
  currentRoute: string;
  title: string;
  note: string;
  constructor(private router: Router, private db: FirebaseService) {
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          console.log('url is ===>', this.router.url);
          if (this.router.url == '/add-edit-note/edit') {
            this.isEdit = true;
          } else {
            this.isEdit = false;
          }
        }
      }
    );
  }


  addNote() {
    let data = {
      title: this.title,
      note: this.note
    }
    console.log(data);
    this.db.add_transaction(data)
    this.router.navigateByUrl('/home');
    this.db.get_transaction();
    this.title = '';
    this.note = '';
  }

  ngOnInit(): void {
  }


}
