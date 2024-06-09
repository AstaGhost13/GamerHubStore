import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-verificacion-detalles',
  standalone: true,
  imports: [],
  templateUrl: './verificacion-detalles.component.html',
  styleUrl: './verificacion-detalles.component.css'
})
export class VerificacionDetallesComponent implements OnInit {

   // Simular datos de detalle de verificación
   verificationDetail = {
    verifierName: 'Juan Pérez',
    date: '2024-05-30',
    result: 'Aprobado',
    // Agregar más detalles según sea necesario
  };

  constructor() { }

  ngOnInit(): void {
  }

}
