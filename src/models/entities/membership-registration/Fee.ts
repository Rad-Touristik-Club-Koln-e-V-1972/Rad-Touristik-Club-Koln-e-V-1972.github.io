import AEntity from "@/models/entities/AEntity";

// noinspection JSClassNamingConvention
export default class Fee extends AEntity {
  name!: string;
  price?: string | undefined;
}
