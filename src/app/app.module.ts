import { PostsService } from './services/posts.service';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { SablaiComponent } from './core/sablai/sablai.component';
import { SablaiAddEditComponent } from './core/sablai/sablai-add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SablaiComponent,
    SablaiAddEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "sablai-add-edit", component: SablaiAddEditComponent},
      {path: "", component: HomeComponent}
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
