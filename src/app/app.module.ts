import { AnalyticsService } from './services/AnalyticsService.service';
import { DataTableModule } from 'angular-4-data-table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
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
    FormsModule,
    BrowserAnimationsModule,
    DataTableModule,
    RouterModule.forRoot([
      {path: "sabla-add", component: SablaiAddEditComponent},
      {path: "sabla-edit/:id", component: SablaiAddEditComponent},
      {path: "", component: HomeComponent},
      {path: "**", redirectTo: "/"}
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AnalyticsService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
