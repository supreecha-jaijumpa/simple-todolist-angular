import { Component } from '@angular/core';
import { TodoRepository } from 'src/store/todo.repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public todoRepo: TodoRepository) {}
}
