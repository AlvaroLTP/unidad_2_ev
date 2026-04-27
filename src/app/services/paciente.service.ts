import { Injectable, signal } from '@angular/core';
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private _pacientes = signal<Paciente[]>([]);

  readonly listaPacientes = this._pacientes.asReadonly();

  agregarPaciente(paciente: Paciente) {

    if (this._pacientes().length >= 10) {
      alert("Máximo 10 pacientes");
      return;
    }

    let nuevoId = this._pacientes().length + 1;

    this._pacientes.update(arr => [
      ...arr,
      { ...paciente, id: nuevoId }
    ]);
  }

  eliminarPaciente(id: number) {
    this._pacientes.update(arr => arr.filter(p => p.id !== id));
  }
}