import type EEvent from "@/models/enums/EEvent";

export default interface Filter {
  categories: EEvent[];
  dateRange: string | { from: string; to: string };
  search: string;
}
