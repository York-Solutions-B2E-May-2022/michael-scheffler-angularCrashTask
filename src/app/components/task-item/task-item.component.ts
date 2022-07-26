import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Task} from '../../Task'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes
  MatButtonModule = MatButtonModule
  MatIconModule = MatIconModule

  constructor() { }

  ngOnInit(): void {}

  onDelete(task: any) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: any) {
    this.onToggleReminder.emit(task);
  }

}
