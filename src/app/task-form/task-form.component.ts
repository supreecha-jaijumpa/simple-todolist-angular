import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from 'src/models/task';
import { TodoRepository } from 'src/store/todo.repository';
import { generateUUID } from 'src/utils/generateUUID';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  form: FormGroup = new FormGroup({
    task: new FormControl('', Validators.required),
  });

  get task() {
    return this.form.get('task');
  }

  handleSubmit() {
    if (!this.form.get('task')?.valid) {
      return;
    }

    this.todoRepo.addTask(
      new Task(generateUUID(), this.form.value.task, false)
    );
    this.form.reset();
  }

  constructor(public todoRepo: TodoRepository) {}
}
