import { Subscription } from 'rxjs/Subscription';
import { DataTableResource } from 'angular-4-data-table';
import { fadeInAnimation } from './../../other/animations/fade-in.animation';
import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { Person } from '../models/Person';

@Component({
  selector: 'sablai',
  templateUrl: './sablai.component.html',
  styleUrls: ['./sablai.component.css'],
  animations: [fadeInAnimation],
  host: {"[@fadeInAnimation]":""}
})
export class SablaiComponent implements OnInit {

persons: Person[]=[];
filteredPersons: any[];
subscription: Subscription;
tableResource: DataTableResource<Person>;
items: Person[] = [];
itemCount: number;

  constructor(private postsService: PostsService) {
    this.subscription = postsService.getAll()
      .subscribe(persons => {
        this.filteredPersons = this.persons = persons;

        this.initializeTable(persons);
      })
   }

  ngOnInit() {
  }

  private initializeTable(persons: Person[]){
    this.tableResource = new DataTableResource(persons);
    this.tableResource.query({offset: 0})
      .then(items => this.items = items);

      this.tableResource.count()
        .then(count => this.itemCount = count);
  }

  reloadItems(params){
    if(!this.tableResource) return;

    this.tableResource.query(params)
      .then(items => this.items = items);
  }

  filter(query: string){
    this.filteredPersons = (query) ?
      this.persons.filter(p=> p.name.toLowerCase().includes(query.toLowerCase())) :
      this.persons;

      this.initializeTable(this.filteredPersons);
  }

}
