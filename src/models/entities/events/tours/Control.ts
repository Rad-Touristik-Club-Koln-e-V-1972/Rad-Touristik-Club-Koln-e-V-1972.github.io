import AEntity from "@/models/entities/AEntity";

export default class Control extends AEntity {
  city!: string;
  street!: string;
  url?: URL | undefined;
  title!: string;
  zipCode!: string;
}
