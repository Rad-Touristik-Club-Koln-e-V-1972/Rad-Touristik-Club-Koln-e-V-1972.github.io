import AEntity from "@/models/entities/AEntity";
import EProfile from "@/models/enums/events/EProfile";

export default class Track extends AEntity {
  controls!: number;
  end!: Date;
  height!: number;
  important = false;
  length!: number;
  name!: string;
  profile = EProfile.Normal;
  start!: Date;
  subname?: string | undefined;
  text!: string;
  urls: Record<string, URL> = {};
}
