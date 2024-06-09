import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { verificacionClase } from '../models/verificacionClase';

@Injectable({
  providedIn: 'root'
})
export class VerificacionService {

  private verificationsSubject: BehaviorSubject<verificacionClase[]> = new BehaviorSubject<verificacionClase[]>([]);
  public verifications$: Observable<verificacionClase[]> = this.verificationsSubject.asObservable();

  constructor() {
    this.loadInitialVerifications();
  }

  private loadInitialVerifications(): void {
    this.verificationsSubject.next([
      new verificacionClase(1, 'Verificación 1', 'Pendiente'),
      new verificacionClase(2, 'Verificación 2', 'Pendiente'),
      new verificacionClase(3, 'Verificación 3', 'Pendiente'),
      new verificacionClase(4, 'Verificación 4', 'Pendiente')
    ]);
  }

  getVerifications(): Observable<verificacionClase[]> {
    return this.verifications$;
  }

  updateVerification(id: number, status: string): void {
    const currentVerifications = this.verificationsSubject.value.map(verification => {
      if (verification.id === id && verification.status === 'Pendiente') {
        return { ...verification, status };
      }
      return verification;
    });
    this.verificationsSubject.next(currentVerifications);
  }

  loadVerifications(): void {
    const currentVerifications = this.verificationsSubject.value;
    const newVerifications = [
      new verificacionClase(5, 'Verificación 5', 'Pendiente'),
      new verificacionClase(6, 'Verificación 6', 'Pendiente'),
      new verificacionClase(7, 'Verificación 7', 'Pendiente'),
      new verificacionClase(8, 'Verificación 8', 'Pendiente'),
      new verificacionClase(9, 'Verificación 9', 'Pendiente'),
      new verificacionClase(10, 'Verificación 10', 'Pendiente'),
      new verificacionClase(9, 'Verificación 11', 'Pendiente'),
      new verificacionClase(10, 'Verificación 12', 'Pendiente')
    ];

    // Filtrar las nuevas verificaciones para no agregar duplicados
    newVerifications.forEach(newVerification => {
      if (!currentVerifications.some(v => v.id === newVerification.id)) {
        currentVerifications.push(newVerification);
      }
    });

    this.verificationsSubject.next([...currentVerifications]);
  }

  getVerificationsByStatus(status: string): Observable<verificacionClase[]> {
    return this.verifications$.pipe(
      map(verifications => verifications.filter(v => v.status === status))
    );
  }

}
