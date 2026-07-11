import AEntity from "@/models/entities/AEntity";
import type Gallery from "@/models/entities/rtc-cologne/gallery/Gallery";

export default class NewsEntry extends AEntity {
  gallery?: Gallery | undefined;
  showUntil?: Date | undefined;
  text?: string | undefined;
  url?: URL | undefined;
  youtubeVideoId?: string | undefined;
}
