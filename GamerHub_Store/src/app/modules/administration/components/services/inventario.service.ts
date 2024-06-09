import { Injectable } from '@angular/core';
import { Inventario } from '../models/inventario';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

 

  private inventory: Inventario[] = [];
  private inventorySubject: BehaviorSubject<Inventario[]> = new BehaviorSubject(this.inventory);

  constructor() {}

  getInventory(): Observable<Inventario[]> {
    return this.inventorySubject.asObservable();
  }

  addItem(item: Inventario): void {
    this.inventory.push(item);
    this.inventorySubject.next(this.inventory);
  }


}
