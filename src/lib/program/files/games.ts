import type { ExecutableFile } from "../File";
import type { OperativeSystem } from "../system";

export const files: ExecutableFile[] = [
    {
        id: "games/floppa_adventure.exe",
        name: "Floppa Adventure.exe",
        icon: "/Icons/directory.png",
        onOpen(system: OperativeSystem) {
            system.openWindow("programs/games/floppa_adventure.exe", {
                title: "Floppa Adventure",
            });
        },
    },
];

export default files;