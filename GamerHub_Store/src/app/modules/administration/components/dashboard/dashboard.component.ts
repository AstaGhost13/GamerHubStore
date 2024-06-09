import { Component, OnInit } from '@angular/core';
import {  RouterLink } from '@angular/router';
import { AggTareaService } from '../../services/agg-tarea.service';
import { TareasService } from '../../services/tareas.service';
import { Tarea } from '../../models/tarea';
import { Ventas } from '../../models/ventas';
import { VentasService } from '../../services/ventas.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  tasks: Tarea[] = [];
  pendingTasksCount: number = 0;
  sales: Ventas = new Ventas(0, 0, '', '');


  constructor(private taskService: TareasService, private salesService: VentasService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.updatePendingTasksCount();
    });

    this.salesService.getSales().subscribe(sales => {
      this.sales = sales;
    });
  }

  updatePendingTasksCount(): void {
    this.pendingTasksCount = this.tasks.filter(task => task.status === 'Pendiente').length;
  }
}
