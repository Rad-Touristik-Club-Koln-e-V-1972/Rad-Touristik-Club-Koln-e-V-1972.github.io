import AEntity from "@/models/entities/AEntity";

export default class Sponsor extends AEntity {
  imageUrl?: URL | undefined;
  text?: string | undefined;
  url?: URL | undefined;
}
