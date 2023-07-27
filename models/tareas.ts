import { Tarea } from "./tarea";
import colors from "colors";

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

  cargarTareasFromArr(tareas: Tarea[]) {
    tareas.forEach((tarea) => {
      this._listado.set(tarea.id, tarea);
    });
  }

  listadoCompleto() {
    this.tareasArr.forEach((tarea, index) => {
      console.log(
        `${colors.green(`${index+1}.`)} ${tarea.description} :: ${
          tarea.completedDate
            ? colors.green("Completada")
            : colors.yellow("Pendiente")
        }`
      );
    });
  }

  listarTareasPorStatus(completadas: boolean) {
    const tareas = this.tareasArr.filter(
      (tarea) => !!tarea.completedDate === completadas
    );

    tareas.forEach((tarea, index) => {
      console.log(
        `${colors.green(`${index+1}.`)} ${tarea.description} :: ${
          tarea.completedDate
            ? colors.green("Completada")
            : colors.yellow("Pendiente")
        }`
      );
    });
  }

  borrarTarea(id: string) {
    if (this._listado.get(id)) {
      this._listado.delete(id);
    }
  }
}
