import AEntity from "@/models/entities/AEntity";
import type Donation from "@/models/entities/Donation";
import type Control from "@/models/entities/events/tours/Control";
import EEvent from "@/models/enums/EEvent";

export default class Tour extends AEntity {
  active = true;
  albumIDs: Record<string, string> = {};
  category = EEvent.Vereinsfahrt;
  controls: Control[] = [];
  donations: Donation[] = [];
  lastChange!: Date;
  location!: Control;
  text!: string;
  title!: string;
  urls: Record<string, URL> = {};
}
