import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  task:string = '';
  tarea:string[] = []

  title = 'proyecto';

  // constructor() {
  //   this.cambiarTexto();
  // }

  cambiarTexto() {
    this.title = 'nuevo titulo'
  }

  agregarTarea(tarea: string) {
    this.tarea.push(tarea);
  }
}
