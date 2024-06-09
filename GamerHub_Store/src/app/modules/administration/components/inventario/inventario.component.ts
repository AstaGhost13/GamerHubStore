import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Inventario } from '../../models/inventario';
import { InventarioService } from '../../services/inventario.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css'
})
export class InventarioComponent {

  newItem: Inventario = new Inventario(0, '', 0, 'Disponible');
  inventory: Inventario[] = [];
  itemIdCounter: number = 1;

  constructor(private inventoryService: InventarioService) { }

  ngOnInit(): void {
    this.inventoryService.getInventory().subscribe(inventory => {
      this.inventory = inventory;
    });
  }

  addItem(): void {
    this.newItem.id = this.itemIdCounter++;
    this.inventoryService.addItem(this.newItem);
    this.newItem = new Inventario(0, '', 0, 'Disponible');
  }

}
