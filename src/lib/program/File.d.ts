import type { OperativeSystem, URLString } from "./system-types";

export interface File {
    id: string;
    name: string;
    icon: string;
    
    xPos?: number;
    yPos?: number;
}

export interface ExecutableFile extends File {
    onOpen?: ((system: OperativeSystem) => void) | URLString;
}
