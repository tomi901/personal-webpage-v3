import type { ExecutableFile } from "../File";

export const files: ExecutableFile[] = [
    {
        id: "games/floppa_adventure.exe",
        name: "Floppa Adventure.exe",
        icon: "/Icons/Games/floppa_adventure.png",
        onOpen(system) {
            system.openWindow("https://v6p9d9t4.ssl.hwcdn.net/html/7156942/floppa_adventure/index.html", {
                programId: this.id,
                title: "Floppa Adventure",
                width: 800,
                height: 600,
            });
        },
    },
];

export default files;