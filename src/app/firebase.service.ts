import { Injectable } from '@angular/core';

import { Firestore } from '@angular/fire/firestore';
import {
  getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc
} from 'firebase/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  notesTransaction: any;
  constructor(private db: Firestore, private router: Router) { }
  colRef = collection(this.db, 'notes');
  get_transaction() {
    let notes = []
    getDocs(this.colRef).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        notes.push({ ...doc.data(), id: doc.id });
      })
      console.log(notes);
    })
    this.router.navigateByUrl('/home');
    this.notesTransaction = notes;
  }

  add_transaction(data) {
    addDoc(this.colRef, data)
  }

  edit_transaction(id, data) {
    const docsRef = doc(this.db, 'notes', id)
    updateDoc(docsRef, data)
  }

  delete_transaction(id) {
    const docsRef = doc(this.db, 'notes', id)
    deleteDoc(docsRef)
  }

}
