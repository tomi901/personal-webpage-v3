import type { ExecutableFile } from "../File";

export const files: ExecutableFile[] = [
    {
        id: "games/floppa_adventure.exe",
        name: "Floppa Adventure.exe",
        icon: "/Icons/Games/floppa_adventure.png",
        onOpen(system) {
            system.openWindow("https://floppa-adventure.web.app/", {
                programId: this.id,
                title: "Floppa Adventure",
                width: 800,
                height: 600,
                maximized: true,
            });
        },
    },
];

export default files;