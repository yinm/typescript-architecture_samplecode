import { Model } from "./Model";

export class Controller {
  constructor(private model: Model) {}

  onMinusClicked() {
    this.model.countDown();
  }

  onPlusClicked() {
    this.model.countUp();
  }
}
