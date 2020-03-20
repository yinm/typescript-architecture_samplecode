export class View {
  minusButton: HTMLButtonElement;
  plusButton: HTMLButtonElement;
  countLabel: HTMLElement;

  constructor() {
    this.minusButton = document.createElement("button");
    this.minusButton.setAttribute("id", "minus");
    this.minusButton.textContent = "-";

    this.plusButton = document.createElement("button");
    this.plusButton.setAttribute("id", "plus");
    this.plusButton.textContent = "+";

    this.countLabel = document.createElement("p");
    this.countLabel.setAttribute("id", "count");
  }

  createElement() {
    const container = document.createElement("div") as HTMLElement;
    container.appendChild(this.countLabel);
    container.appendChild(this.plusButton);
    container.appendChild(this.minusButton);

    return container;
  }
}
