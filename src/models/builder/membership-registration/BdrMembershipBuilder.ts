import ABuilder from "@/models/builder/ABuilder";
import BdrMembership from "@/models/entities/membership-registration/BdrMembership";

export default class BdrMembershipBuilder extends ABuilder {
  private bdrMembership = new BdrMembership();

  buildBdrMembership = () =>
    Object.assign(this.bdrMembership, this.buildAEntity());

  setIsMember = (value: boolean): this => {
    this.bdrMembership.isMember = value;

    return this;
  };

  setDate = (value: string): this => {
    this.bdrMembership.date = value;

    return this;
  };

  setNumber = (value: string): this => {
    this.bdrMembership.number = value;

    return this;
  };
}
