export class EventEmitter {
  private listeners: Map<string, Set<Function>>;

  constructor() {
    this.listeners = new Map();
  }

  protected addEventListener(type: string, listener: Function) {
    if (!this.listeners.has(type)) {
      this.listeners.set(type, new Set());
    }

    const listenerSet = this.listeners.get(type) as Set<Function>;
    listenerSet.add(listener);
  }

  protected emit(type: string) {
    const listenerSet = this.listeners.get(type);
    if (!listenerSet) {
      return;
    }

    listenerSet.forEach(listener => {
      listener.call(this);
    });
  }
}
