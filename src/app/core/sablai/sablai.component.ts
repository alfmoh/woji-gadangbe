import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sablai',
  templateUrl: './sablai.component.html',
  styleUrls: ['./sablai.component.css']
})
export class SablaiComponent implements OnInit {

sablai$;

  constructor(postsService: PostsService) {
    this.sablai$ = postsService.getAll();
   }

  ngOnInit() {
  }

}
