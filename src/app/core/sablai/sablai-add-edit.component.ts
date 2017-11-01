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
person ={
    name:"",
    gender: "",
    sabla: ""
}

saveSabla(){
console.log(this.person)
}
}