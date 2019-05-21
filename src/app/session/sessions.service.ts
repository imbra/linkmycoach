import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Session } from '../shared/models/session.model';
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  constructor(private firestore: AngularFirestore) { }

  getSessions() {
    return this.firestore.collection('sessions').snapshotChanges();
  }

  getUsersSessions(user: User) {
    return this.firestore.collection('sessions',
      ref => ref.where('attendees', 'array-contains', user));
  }

  createSession(session: Session) {
    return this.firestore.collection('sessions').add(session);
  }

  updateUser(session: Session) {
    delete session.id;
    this.firestore.doc('sessions/' + session.id).update(session);
  }

  deleteUser(sessionId: string) {
    this.firestore.doc('sessions/' + sessionId).delete();
  }
}
