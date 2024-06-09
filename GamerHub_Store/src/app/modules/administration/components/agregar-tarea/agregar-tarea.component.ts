import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { Tarea } from '../../models/tarea';
import { AggTareaService } from '../../services/agg-tarea.service';

@Component({
  selector: 'app-agregar-tarea',
  standalone: true,
  imports: [RouterLink,FormsModule ],
  templateUrl: './agregar-tarea.component.html',
  styleUrl: './agregar-tarea.component.css'
})

export class AgregarTareaComponent implements OnInit{

  newTask: Tarea = new Tarea(0, '', '', 'Pendiente');
  tasks: Tarea[] = [];

  constructor(private taskService: AggTareaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addTask(): void {
    const newTaskCopy = { ...this.newTask, id: Date.now() }; // Create a copy with a unique id
    this.taskService.addTask(newTaskCopy);
    this.newTask = new Tarea(0, '', '', 'Pendiente'); // Reset the form
  }
  

  goBack(): void {
    this.router.navigate(['/dashboard']);  // Navega a la ruta deseada, por ejemplo, '/admin'
  }

}
