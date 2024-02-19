import { Instance } from "tippy.js";
import { PopOverPlacement } from "./types";
export declare class Popover {
    protected instance: Instance;
    constructor(container: HTMLDivElement, button: Element, placement?: PopOverPlacement, theme?: string);
    hide(): void;
    setTheme(theme: string): void;
}
