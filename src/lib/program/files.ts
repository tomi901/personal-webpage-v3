import type { ExecutableFile } from "./File";
import type { OperativeSystem } from "./system";

export const files: ExecutableFile[] = [
    {
        id: "tomas_rinaldi.html",
        name: "Tomas Rinaldi.html",
        xPos: 0,
        yPos: 0,
        icon: "/Icons/html-2.png",
        onOpen(system: OperativeSystem) {
            system.openWindow("/programs/tomas_rinaldi.html", {
                title: this.name,
                width: 800,
                height: 600,
            });
        },
    },
    {
        id: "games",
        name: "Games",
        xPos: 0,
        yPos: 2,
        icon: "/Icons/directory.png",
        onOpen(system: OperativeSystem) {
            system.openWindow("/programs/games", {
                title: this.name,
            });
        },
    },
];

export default files;
