import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TareasService } from '../../services/tareas.service';
import { Tarea } from '../../models/tarea';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarea-pendiente',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './tarea-pendiente.component.html',
  styleUrl: './tarea-pendiente.component.css'
})
export class TareaPendienteComponent {


  newTask: Tarea = new Tarea(0, '', '', 'Pendiente');
  tasks: Tarea[] = [];
  taskIdCounter: number = 1;

  constructor(private taskService: TareasService,
    private router: Router) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addTask(): void {
    this.newTask.id = this.taskIdCounter++;
    this.taskService.addTask(this.newTask);
    this.newTask = new Tarea(0, '', '', 'Pendiente');
  }

  updateTaskStatus(id: number, status: string): void {
    this.taskService.updateTaskStatus(id, status);
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);  // Navega a la ruta deseada, por ejemplo, '/admin'
  }
}
