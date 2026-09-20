import AEntity from "@/models/entities/AEntity";

export default abstract class ABuilder {
  private aEntity = new AEntity();

  setId = (value: string): this => {
    this.aEntity.id = value;

    return this;
  };

  setActive = (value: boolean): this => {
    this.aEntity.isActive = value;

    return this;
  };

  setVisible = (value: boolean): this => {
    this.aEntity.isVisible = value;

    return this;
  };

  buildAEntity() {
    return this.aEntity;
  }
}
