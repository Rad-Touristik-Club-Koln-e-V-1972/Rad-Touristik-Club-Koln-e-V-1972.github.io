import AEntity from "@/models/entities/AEntity";
import EEvent from "@/models/enums/EEvent";

// noinspection JSClassNamingConvention
export default class Fee extends AEntity {
  category = EEvent.RTF_RTC;
  group: string = "";
  name!: string;
  price?: number | undefined;
}
