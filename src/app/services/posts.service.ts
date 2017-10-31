import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class PostsService {

  constructor(private db: AngularFireDatabase) { }

  getAll(){
    return this.db.list("/sabla");
  }

}
