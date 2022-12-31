import type { File } from "./File";
import type { OperativeSystem } from "./system";

export function open(program: string | File, system: OperativeSystem) {
    const id = typeof(program) === "string" ? program : program.id;
    const file = system.getFileById(id);

    return file.onOpen && file.onOpen(system);
}
