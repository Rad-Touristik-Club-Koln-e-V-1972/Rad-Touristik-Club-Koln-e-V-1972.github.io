import Tour from "@/models/entities/events/tours/Tour";
import EEvent from "@/models/enums/EEvent";
import EProfile from "@/models/enums/events/EProfile";

export default class Permanent extends Tour {
  override category = EEvent.Permanente;
  height!: number;
  length!: number;
  profile = EProfile.Wellig;
}
