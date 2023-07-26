import { v4 as uuidv4 } from "uuid";

export class Tarea {
  public id: string = "";
  public description: string = "";
  public completedDate = null;

  constructor(desc: string) {
    this.id = uuidv4();
    this.description = desc;
    this.completedDate = null;
  }
}
