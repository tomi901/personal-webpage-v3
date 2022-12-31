import type { OperativeSystem } from "./system";

export interface File {
    id: string;
    name: string;
    icon: string;
    
    xPos?: number;
    yPos?: number;
}

export interface ExecutableFile extends File {
    onOpen?: (system: OperativeSystem) => void;
}
