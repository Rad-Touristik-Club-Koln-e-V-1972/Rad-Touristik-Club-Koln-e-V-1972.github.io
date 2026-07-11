import ABuilder from "@/models/builder/ABuilder";
import PressReport from "@/models/entities/rtc-cologne/PressReport";
import type GalleryEntry from "@/models/entities/rtc-cologne/gallery/GalleryEntry";

export default class PressReportBuilder extends ABuilder {
  private pressReport = new PressReport();

  buildPressReport = () => Object.assign(this.pressReport, this.buildAEntity());

  setDate = (value: string): this => {
    this.pressReport.date = new Date(value);

    return this;
  };

  setImages = (...value: GalleryEntry[]): this => {
    this.pressReport.images = value;

    return this;
  };

  setTitle = (value: string): this => {
    this.pressReport.title = value;

    return this;
  };
}
