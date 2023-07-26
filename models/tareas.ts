import { Tarea } from "./tarea";

export class Tareas {
  private _listado: Map<any, any> | null = null;

  constructor() {
    this._listado = new Map<string, Tarea>();
  }
}
