import { ClickButtonParameter } from "./types";
export declare class EventManager {
    private eventTarget;
    on(eventName: string, listener: (param: ClickButtonParameter) => void): void;
    emit(eventName: string, param: ClickButtonParameter): void;
}
