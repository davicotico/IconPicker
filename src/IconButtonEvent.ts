export class IconButtonEvent {
  private eventTarget = new EventTarget();

  public on(eventName: string, listener: (param: string) => void): void {
    this.eventTarget.addEventListener(eventName, (event: Event) => {
      listener((event as CustomEvent<string>).detail);
    });
  }

  public emit(eventName: string, param: string): void {
    const event = new CustomEvent<string>(eventName, {
      detail: param,
    });
    this.eventTarget.dispatchEvent(event);
  }
}
