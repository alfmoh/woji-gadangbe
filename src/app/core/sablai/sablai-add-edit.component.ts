import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { slideInOutAnimation } from './../../other/animations/slide-in-out.animation';
import { Component } from '@angular/core';

@Component({
    selector: "salai-add-edit",
    templateUrl: "./sablai-add-edit.component.html",
    styleUrls: ["./sablai-add-edit.component.css"],
    animations: [slideInOutAnimation],
    host: { "[@slideInOutAnimation]": "" }
})
export class SablaiAddEditComponent {
    title = "Ŋmaa Sabla Hei";
    hide = true;
    personId;
    person = {
        name: "",
        gender: "",
        sabla: ""
    }

    constructor(private router: Router,
        private route: ActivatedRoute,
        private postsService: PostsService) {
        this.personId = this.route.snapshot.params['id'];
        if (this.personId) {
            this.title = "Tsakemɔ";
            this.postsService.getById(this.personId).subscribe(person => this.person = person);
        }
    }

    saveSabla() {
        this.postsService.create(this.person,this.personId);
        this.hide = false;
        setTimeout(()=>{
            this.router.navigate(["/"])
        },1500)
    }
}