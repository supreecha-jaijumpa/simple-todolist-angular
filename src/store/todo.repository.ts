import { createStore } from '@ngneat/elf';
import { Task } from 'src/models/task.model';

import {
  addEntities,
  deleteEntitiesByPredicate,
  selectAllEntities,
  selectEntitiesCount,
  updateEntities,
  withEntities,
} from '@ngneat/elf-entities';
import { Injectable } from '@angular/core';

const todoStore = createStore({ name: 'todo' }, withEntities<Task>());

@Injectable({ providedIn: 'root' })
export class TodoRepository {
  todo$ = todoStore.pipe(selectAllEntities());
  count$ = todoStore.pipe(selectEntitiesCount());

  addTask(task: Task) {
    todoStore.update(addEntities(task));
  }

  updateTask(task: Task) {
    todoStore.update(updateEntities(task.id, task));
  }

  clearCompleted() {
    todoStore.update(
      deleteEntitiesByPredicate(({ isCompleted }) => isCompleted)
    );
  }
}
