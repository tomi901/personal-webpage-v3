import type { ExecutableFile } from "../File";
import type { OperativeSystem } from "../system";

export const files: ExecutableFile[] = [
    {
        id: "games/floppa_adventure.exe",
        name: "Floppa Adventure.exe",
        icon: "/Icons/directory.png",
        onOpen(system: OperativeSystem) {
            system.openWindow("https://v6p9d9t4.ssl.hwcdn.net/html/7156938/floppa_adventure/index.html", {
                title: "Floppa Adventure",
                width: 800,
                height: 600,
            });
        },
    },
];

export default files;