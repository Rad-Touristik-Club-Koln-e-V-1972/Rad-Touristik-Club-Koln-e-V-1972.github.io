import AEntity from "@/models/entities/AEntity";

export default class Donation extends AEntity {
  icon?: string | undefined;
  text?: string | undefined;
  title!: string;
  url?: URL | undefined;
}
