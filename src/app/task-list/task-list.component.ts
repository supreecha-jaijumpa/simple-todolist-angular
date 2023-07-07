import { Component } from '@angular/core';
import { TodoRepository } from 'src/store/todo.repository';

@Component({
  selector: '[app-task-list]',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  constructor(public todoRepo: TodoRepository) {}
}
