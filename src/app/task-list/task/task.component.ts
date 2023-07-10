import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { TodoRepository } from 'src/store/todo.repository';
import { Task } from 'src/models/task.model';

@Component({
  selector: '[app-task]',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input({ required: true }) data: Task;

  @HostBinding('class.done') isDone: boolean;

  handleChange(e: Event) {
    this.todoRepo.updateTask({
      ...this.data,
      isCompleted: (e.target as HTMLInputElement).checked,
    });
  }

  ngOnInit() {
    if (this.data === null || this.data === undefined) {
      throw new TypeError('The input "data" is required');
    }

    this.isDone = this.data.isCompleted;
  }

  constructor(public todoRepo: TodoRepository) {}
}
