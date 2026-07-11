import AEntity from "@/models/entities/AEntity";
import EEvent from "@/models/enums/EEvent";

export default class Event extends AEntity {
  allDay = true;
  category = EEvent.RTC;
  color = "primary";
  contact!: string;
  end?: Date | undefined;
  kilometer = 0;
  name!: string;
  start!: Date;
  url?: URL | undefined;
}
