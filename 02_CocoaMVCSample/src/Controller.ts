import { Model } from "./Model";
import { View } from "./View";

export class Controller {
  constructor(private model: Model, private view: View) {}

  onMinusClicked() {
    this.model.countDown();
  }

  onPlusClicked() {
    this.model.countUp();
  }

  mount() {
    this.view.minusButton.addEventListener("click", () => {
      this.onMinusClicked();
    });
    this.view.plusButton.addEventListener("click", () => {
      this.onPlusClicked();
    });

    this.model.onChange(() => {
      this.view.countLabel.textContent = this.model.getCount().toString();
    });

    this.view.countLabel.textContent = this.model.getCount().toString();

    const containerElement = document.getElementById("app") as HTMLElement;
    containerElement.appendChild(this.view.createElement());
  }
}
