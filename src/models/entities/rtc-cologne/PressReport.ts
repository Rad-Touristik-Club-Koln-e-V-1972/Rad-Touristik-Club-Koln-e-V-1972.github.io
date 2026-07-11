import AEntity from "@/models/entities/AEntity";
import type GalleryEntry from "@/models/entities/rtc-cologne/gallery/GalleryEntry";

export default class Contact extends AEntity {
  date!: Date;
  images: GalleryEntry[] = [];
  title!: string;
}
