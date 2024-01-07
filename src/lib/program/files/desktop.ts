import FileExplorer from "$components/FileExplorer.svelte";
import AboutPage from "$components/pages/AboutPage.svelte";
import { SOURCE_CODE } from "$lib/constants";
import { ICON_DIRECTORY, ICON_EXTERNAL_PAGE as ICON_SOURCE_CODE, ICON_HTML } from "$lib/constants/icons";
import type { ExecutableFile } from "../File";
import { componentWithProps } from "../system";
import games from "./games";
import PersonalAbout from "../../components/pages/PersonalAbout.svelte";

export const files: ExecutableFile[] = [
    {
        id: "tomas_rinaldi.html",
        name: "Tomas Rinaldi.html",
        xPos: 0,
        yPos: 0,
        icon: ICON_HTML,
        onOpen(system) {
            system.openWindow(AboutPage, {
                programId: this.id,
                title: this.name,
                width: 800,
                height: 600,
                maximized: true,
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
            system.openWindow(componentWithProps(FileExplorer, { files: games }), {
                programId: this.id,
                title: this.name,
            });
        },
    },
    {
        id: "cool_webpage.html",
        name: "My Cool Webpage.html",
        xPos: -3,
        yPos: 2,
        icon: ICON_HTML,
        onOpen(system) {
            system.openWindow(PersonalAbout, {
                programId: this.id,
                title: this.name,
                width: 800,
                height: 600,
                maximized: true,
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
