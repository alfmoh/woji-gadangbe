import { Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { slideInOutAnimation } from './../../other/animations/slide-in-out.animation';
import { Component } from '@angular/core';

@Component({
    selector :"salai-add-edit",
    templateUrl: "./sablai-add-edit.component.html",
    styleUrls:["./sablai-add-edit.component.css"],
    animations:[slideInOutAnimation],
    host: {"[@slideInOutAnimation]": ""}
})
export class SablaiAddEditComponent {

    constructor(private router: Router,
        private postsService: PostsService){}

person ={
    name:"",
    gender: "",
    sabla: ""
}

saveSabla(){
this.postsService.create(this.person);
this.router.navigate(["/"])
}
}