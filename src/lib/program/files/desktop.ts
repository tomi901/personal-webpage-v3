import { SOURCE_CODE } from "$lib/constants";
import { ICON_DIRECTORY, ICON_EXTERNAL_PAGE as ICON_SOURCE_CODE, ICON_HTML } from "$lib/constants/icons";
import type { ExecutableFile } from "../File";

export const files: ExecutableFile[] = [
    {
        id: "tomas_rinaldi.html",
        name: "Tomas Rinaldi.html",
        xPos: 0,
        yPos: 0,
        icon: ICON_HTML,
        onOpen(system) {
            system.openWindow("/programs/tomas_rinaldi.html", {
                programId: this.id,
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
        icon: ICON_DIRECTORY,
        onOpen(system) {
            system.openWindow("/programs/games", {
                programId: this.id,
                title: this.name,
            });
        },
    },
    {
        id: "source_code",
        name: "Page Source Code",
        xPos: 0,
        yPos: 3,
        icon: ICON_SOURCE_CODE,
        onOpen: SOURCE_CODE,
    },
];

export default files;