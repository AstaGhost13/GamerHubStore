import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { VerificacionService } from '../services/verificacion.service';
import { verificacionClase } from '../models/verificacionClase';

@Component({
  selector: 'app-verificaciones',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './verificaciones.component.html',
  styleUrl: './verificaciones.component.css'
})
export class VerificacionesComponent implements OnInit, OnDestroy {

  verifications: verificacionClase[] = [];
  subscription: Subscription = new Subscription();

  constructor(private verificationService: VerificacionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadVerifications();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  updateVerification(id: number, status: string): void {
    this.verificationService.updateVerification(id, status);
  }

  loadVerifications(): void {
    this.subscription = this.verificationService.getVerificationsByStatus('Pendiente').subscribe(data => {
      this.verifications = data;
    });
  }

  reloadVerifications(): void {
    this.verificationService.loadVerifications();
  }

  
  goBack(): void {
    this.router.navigate(['/dashboard']);  // Navega a la ruta deseada, por ejemplo, '/admin'
  }
}

