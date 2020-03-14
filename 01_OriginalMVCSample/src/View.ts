import { Model } from "./Model";
import { Controller } from "./Controller";

export class View {
  constructor(private model: Model, private controller: Controller) {}

  registerModel() {
    const minusButton = document.getElementById("minus") as HTMLButtonElement;
    const plusButton = document.getElementById("plus") as HTMLButtonElement;
    const count = document.getElementById("count") as HTMLElement;

    minusButton.addEventListener("click", () => {
      this.controller.onMinusClicked();
    });
    plusButton.addEventListener("click", () => {
      this.controller.onPlusClicked();
    });

    this.model.onChange(() => {
      count.textContent = this.model.getCount().toString();
    });

    count.textContent = this.model.getCount().toString();
  }
}
