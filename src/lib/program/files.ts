import type { ExecutableFile } from "./File";
import type { OperativeSystem } from "./system";

export const files: ExecutableFile[] = [
    {
        id: "tomas_rinaldi.html",
        name: "Tomas Rinaldi.html",
        xPos: 0,
        yPos: 0,
        icon: "https://icons.iconarchive.com/icons/hopstarter/soft-scraps/256/Web-HTML-icon.png",
        onOpen(system: OperativeSystem) {
            system.openWindow("/programs/tomas_rinaldi.html", {
                title: "Tomas Rinaldi.html",
            });
        },
    },
    {
        id: "projects",
        name: "Projects",
        xPos: 0,
        yPos: 2,
        icon: "https://icons.iconarchive.com/icons/hopstarter/soft-scraps/256/Web-HTML-icon.png",
    },
    {
        id: "games",
        name: "Games",
        xPos: 0,
        yPos: 3,
        icon: "https://icons.iconarchive.com/icons/hopstarter/soft-scraps/256/Web-HTML-icon.png",
    },
];

export default files;
