import { EventEmitter } from "./EventEmitter";

export class Model extends EventEmitter {
  private count: number;

  constructor(count = 0) {
    super();
    this.count = count;
  }

  getCount() {
    return this.count;
  }

  countDown() {
    this.count--;
    this.emitChange();
  }

  countUp() {
    this.count++;
    this.emitChange();
  }

  onChange(listener: Function) {
    this.addEventListener("change", listener);
  }

  private emitChange() {
    this.emit("change");
  }
}
