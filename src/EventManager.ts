import { ClickButtonParameter } from "./types";

export class EventManager {
  private eventTarget = new EventTarget();

  public on(eventName: string, listener: (param: ClickButtonParameter) => void): void {
    this.eventTarget.addEventListener(eventName, (event: Event) => {
      listener((event as CustomEvent<ClickButtonParameter>).detail);
    });
  }

  public emit(eventName: string, param: ClickButtonParameter): void {
    const event = new CustomEvent<ClickButtonParameter>(eventName, {
      detail: param,
    });
    this.eventTarget.dispatchEvent(event);
  }
}
