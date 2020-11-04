import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {filter, map, switchMap, take} from 'rxjs/operators';

const API = 'https://jsonplaceholder.typicode.com/todos';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http
      .get(API)
      .pipe(
        // map(v => [{title: 'blbaal'}])
        // map(this.uncompletedTodos)
        switchMap((v: any) => v ),
        // take(5)
        // filter((v: any) => v.userId === 5),
        // filter((v: any) => v.title.indexOf('et') !== -1)
      )
      .subscribe((res: any) => {
        // this.todos = res;
        console.log(res);
        this.todos.push(res);
      });
  }

  completedTodos(todos) {
    return todos.filter(todo => todo.completed);
  }

  uncompletedTodos(todos) {
    return todos.filter(todo => !todo.completed);
  }

  test(event: any){
    // console.log(event.key);
    console.log(event.target.value);
  }
}
