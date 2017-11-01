import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class PostsService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list("/sabla");
  }

  getById(id) {
    return this.db.object("/sabla/" + id);
  }

  create(person, id?) {

    if (id) this.db.object("/sabla/" + id).update(person);

    else {
      this.db.list("/sabla").push(person)
    };
  }

}
