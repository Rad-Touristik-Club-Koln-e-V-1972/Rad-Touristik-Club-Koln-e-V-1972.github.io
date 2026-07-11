import { date } from "quasar";
import AEntity from "@/models/entities/AEntity";

export default class Signature extends AEntity {
  date: string = date.formatDate(new Date(), "YYYY/MM/DD");
  location = "";
  signature = "";
}
