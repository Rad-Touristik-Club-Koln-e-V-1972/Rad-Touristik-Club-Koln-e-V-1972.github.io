import ABuilder from "@/models/builder/ABuilder";
import Fee from "@/models/entities/membership-registration/Fee";

export default class FeeBuilder extends ABuilder {
  private fee = new Fee();

  buildFee = () => Object.assign(this.fee, this.buildAEntity());

  setName = (value: string): this => {
    this.fee.name = value;

    return this;
  };

  setPrice = (value: string): this => {
    this.fee.price = value;

    return this;
  };
}
