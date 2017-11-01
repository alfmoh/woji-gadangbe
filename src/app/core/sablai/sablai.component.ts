import { fadeInAnimation } from './../../other/animations/fade-in.animation';
import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sablai',
  templateUrl: './sablai.component.html',
  styleUrls: ['./sablai.component.css'],
  animations: [fadeInAnimation],
  host: {"[@fadeInAnimation]":""}
})
export class SablaiComponent implements OnInit {

sablai$;

  constructor(postsService: PostsService) {
    this.sablai$ = postsService.getAll();
   }

  ngOnInit() {
  }

}
