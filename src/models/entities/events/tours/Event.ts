import Tour from "@/models/entities/events/tours/Tour";
import type Fee from "@/models/entities/events/tours/events/Fee";
import type Time from "@/models/entities/events/tours/events/Time";
import type Track from "@/models/entities/events/tours/events/Track";

export default class Event extends Tour {
  fees: Fee[] = [];
  times: Time[] = [];
  tracks: Track[] = [];
}
