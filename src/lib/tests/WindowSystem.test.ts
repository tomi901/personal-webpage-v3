import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom"
import { render } from "@testing-library/svelte";

import WindowSystem from "$components/WindowSystem.svelte";
import type { ExecutableFile } from "$lib/program/File";
import type { OperativeSystem } from "$lib/program/system";

describe("WindowSystem.svelte", () => {
    function createTestFile(onOpen?: (system: OperativeSystem) => void): ExecutableFile {
        return {
            id: "test",
            icon: "icon.png",
            name: "Test",
            onOpen,
        }
    }
    
    it("Opens a window to iframe", () => {
        const src = "https://www.google.com/";
        const file = createTestFile((system) => {
           system.openWindow(src);
        });
        
        const target = render(WindowSystem, { startWithFiles: [file] })

        const iframe = target.container.querySelector<HTMLIFrameElement>(".window iframe");
        expect(iframe).toBeInTheDocument();
        expect(iframe?.src).toBe(src);
    });
});
