import ABuilder from "@/models/builder/ABuilder";
import MembershipRegistration from "@/models/entities/MembershipRegistration";
import type BdrMembership from "@/models/entities/membership-registration/BdrMembership";
import type MembershipFee from "@/models/entities/membership-registration/MembershipFee";
import type PersonalData from "@/models/entities/membership-registration/PersonalData";
import type Signature from "@/models/entities/membership-registration/Signature";

export default class MembershipRegistrationBuilder extends ABuilder {
  private membershipRegistration = new MembershipRegistration();

  buildMembershipRegistration = () =>
    Object.assign(this.membershipRegistration, this.buildAEntity());

  setBdrMembership = (value: BdrMembership): this => {
    this.membershipRegistration.bdrMembership = value;

    return this;
  };

  setConsentPrivacyPolicy = (value: Signature): this => {
    this.membershipRegistration.consentPrivacyPolicy = value;

    return this;
  };

  setMembershipFee = (value: MembershipFee): this => {
    this.membershipRegistration.membershipFee = value;

    return this;
  };

  setPersonalData = (value: PersonalData): this => {
    this.membershipRegistration.personalData = value;

    return this;
  };

  setSignature = (value: Signature): this => {
    this.membershipRegistration.signature = value;

    return this;
  };
}
