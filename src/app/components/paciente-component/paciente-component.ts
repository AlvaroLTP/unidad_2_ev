import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../models/paciente';

@Component({
  selector: 'app-paciente-component',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './paciente-component.html',
  styleUrl: './paciente-component.css'
})
export class PacienteComponent {

  private fb = inject(FormBuilder);
  private pacienteService = inject(PacienteService);

  listaPacientes = this.pacienteService.listaPacientes;

  pacienteFormulario = this.fb.group({
    nombres: [''],
    apellidos: [''],
    edad: [0],
    sexo: [''],
    atencion: [''],
    direccion: ['']
  });

  paciente = signal<Paciente>({
    nombres: '',
    apellidos: '',
    edad: 0,
    sexo: '',
    direccion: ''
  });

  guardar() {
    this.pacienteService.agregarPaciente(this.paciente());
    
    // limpiar
    this.paciente.set({
      nombres: '',
      apellidos: '',
      edad: 0,
      sexo: '',
      direccion: ''
    });
  }

  eliminar(id: number) {
    this.pacienteService.eliminarPaciente(id);
  }
}