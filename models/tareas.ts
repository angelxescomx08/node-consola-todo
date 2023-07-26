import { Tarea } from "./tarea";

export class Tareas {
  private _listado: Map<string, Tarea>;
  constructor() {
    this._listado = new Map<string, Tarea>();
  }

  crearTarea(description: string) {
    const tarea = new Tarea(description);
    this._listado.set(tarea.id, tarea);
  }

  get tareasArr(): Tarea[] {
    return Array.from(this._listado.values());
  }
}
