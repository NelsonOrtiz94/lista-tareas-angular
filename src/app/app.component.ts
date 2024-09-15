import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  
  listatareas : string[] = [];
  nuevaTarea: string = ''; 
  
  private _tareasService = inject(TareasService)
  
  ngOnInit(): void {
    this.listatareas = this._tareasService.getTareas(); 
  }
  
  agregarTarea() {
    this._tareasService.agregarTarea(this.nuevaTarea);
    this.nuevaTarea = '';
    this.listatareas = this._tareasService.getTareas(); 
  }

  eliminarTarea(index: number){
    this._tareasService.eliminarTarea(index);
    this.listatareas = this._tareasService.getTareas();
  }
}

