import fs from "fs";
import { Tarea } from "../models/tarea";

const path = "./db/data.json";

export const guardarDB = (data: Tarea[]) => {
  fs.writeFileSync(path, JSON.stringify(data));
};

export const leerDB = (): Tarea[] | null => {
  if (!fs.existsSync(path)) return null;

  const data = fs.readFileSync(path, { encoding: "utf-8" });

  if (!data) return null;

  return JSON.parse(data);
};
