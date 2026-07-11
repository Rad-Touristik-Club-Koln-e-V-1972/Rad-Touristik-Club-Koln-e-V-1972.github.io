import AEntity from "@/models/entities/AEntity";

export default class Time extends AEntity {
  end?: string | undefined;
  name!: string;
  start!: string;
}
