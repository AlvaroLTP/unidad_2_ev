import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PacienteComponent } from './components/paciente-component/paciente-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PacienteComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('unidad_2_ev');
}
