import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardBodyComponent } from './card/card-body/card-body.component';
import { CardFooterComponent } from './card/card-footer/card-footer.component';
import { CardHeaderComponent } from './card/card-header/card-header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task-list/task/task.component';
import { TaskFormComponent } from './task-form/task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardHeaderComponent,
    TaskListComponent,
    TaskComponent,
    TaskFormComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
