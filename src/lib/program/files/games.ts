import type { ExecutableFile } from "../File";

export const files: ExecutableFile[] = [
    game("https://floppa-adventure.web.app/", {
        id: "floppa_adventure.exe",
        icon: "floppa_adventure.png",
        name: "Floppa Adventure.exe",
        windowTitle: "Floppa Adventure",
    }),
    game("https://urban-explorers.web.app/", {
        id: "urban_explorers.exe",
        icon: "urban_explorers.png",
        name: "Urban Explorers.exe",
        windowTitle: "Urban Explorers",
    }),
];

function game(url: string, options: { id: string, name: string, icon: string, windowTitle: string }): ExecutableFile {
    const id = `games/${options.id}`;
    return {
        id,
        name: options.name,
        icon: `/Icons/Games/${options.icon}`,
        onOpen(system) {
            system.openWindow(url, {
                programId: id,
                title: options.windowTitle,
                width: 800,
                height: 600,
                maximized: true,
            });
        },
    };
}

export default files;