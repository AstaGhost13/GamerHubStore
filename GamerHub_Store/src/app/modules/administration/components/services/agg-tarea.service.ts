import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AggTareaService {

  private tareas: Tarea[] = [];
  private tasksSubject: BehaviorSubject<Tarea[]> = new BehaviorSubject(this.tareas);

  constructor() {}

  getTasks(): Observable<Tarea[]> {
    return this.tasksSubject.asObservable();
  }

  addTask(tarea: Tarea): void {
    this.tareas.push(tarea);
    this.tasksSubject.next(this.tareas);
  }

  getPendingTasksCount(): number {
    return this.tareas.filter(tarea => tarea.status === 'Pendiente').length;
  }

}
