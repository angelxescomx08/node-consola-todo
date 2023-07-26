import { v4 as uuidv4 } from "uuid";

export class Tarea {
  public id: string = "";
  public desc: string = "";
  public completadoEn = null;

  constructor(desc: string) {
    this.id = uuidv4();
    this.desc = desc;
    this.completadoEn = null;
  }
}
