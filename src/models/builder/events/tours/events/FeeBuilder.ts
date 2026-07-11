import ABuilder from "@/models/builder/ABuilder";
import Fee from "@/models/entities/events/tours/events/Fee";
import type EEvent from "@/models/enums/EEvent";

export default class FeeBuilder extends ABuilder {
  private fee = new Fee();

  buildFee = () => Object.assign(this.fee, this.buildAEntity());

  setCategory = (value: EEvent): this => {
    this.fee.category = value;

    return this;
  };

  setGroup = (value: string): this => {
    this.fee.group = value;

    return this;
  };

  setName = (value: string): this => {
    this.fee.name = value;

    return this;
  };

  setPrice = (value: number): this => {
    this.fee.price = value;

    return this;
  };
}
