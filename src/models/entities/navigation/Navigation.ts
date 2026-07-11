import AEntity from "@/models/entities/AEntity";

export default class Navigation extends AEntity {
  children: Navigation[] = [];
  color: string | undefined;
  icon: string | undefined;
  target = "";
  title?: string | undefined;
  to?: string | undefined;
  url?: URL | undefined;
}
