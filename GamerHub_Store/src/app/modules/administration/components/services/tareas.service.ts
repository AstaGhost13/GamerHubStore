import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private tasks: Tarea[] = [];
  private tasksSubject: BehaviorSubject<Tarea[]> = new BehaviorSubject(this.tasks);

  constructor() {}

  getTasks(): Observable<Tarea[]> {
    return this.tasksSubject.asObservable();
  }

  addTask(task: Tarea): void {
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks);
  }

  updateTaskStatus(id: number, status: string): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.status = status;
      this.tasksSubject.next(this.tasks);
    }
  }
}
