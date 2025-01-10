import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';
import { Task } from '../../task-types';

@Component({
  selector: 'app-task-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-update.component.html',
})

/*
   * Implement your update functionality in this component
*/

export class TaskUpdateComponent {

constructor(private taskService: TaskService) {}

}