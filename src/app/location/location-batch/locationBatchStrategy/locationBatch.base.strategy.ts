import {Location} from "../../location.type";

export interface LocationBatchBaseStrategy {
  submit(location: Location, id?: number): void;
}
