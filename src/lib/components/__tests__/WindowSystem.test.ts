import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render } from "@testing-library/svelte";

import WindowSystem from "$components/WindowSystem.svelte";
import type { ExecutableFile } from "$lib/program/File";
import type { Content, OperativeSystem } from "$lib/program/system-types";
import TestElement from "./TestElement.svelte";
import { componentWithProps } from "$lib/program/system";

describe("WindowSystem.svelte", () => {
    function testFile(onOpen?: (system: OperativeSystem) => void): ExecutableFile {
        return {
            id: "test",
            icon: "icon.png",
            name: "Test",
            onOpen,
        }
    }

    function testFileOpen(content: Content) {
        return testFile((system) => {
            system.openWindow(content);
        });
    }
    
    it("Opens a window to iframe", () => {
        const src = "https://www.google.com/";
        const file = testFileOpen(src);
        
        const target = render(WindowSystem, { startWithFiles: [file] });

        const iframe = target.container.querySelector<HTMLIFrameElement>(".window iframe");
        expect(iframe).toBeInTheDocument();
        expect(iframe?.src).toBe(src);
    });

    it("Opens with svelte simple component", () => {
        const file = testFileOpen(TestElement);

        const target = render(WindowSystem, { startWithFiles: [file] });

        expect(target.getByText("TEST ELEMENT")).toBeInTheDocument();
    });

    it("Opens with svelte component with props", () => {
        const file = testFileOpen(componentWithProps(TestElement, { name: "John" }));

        const target = render(WindowSystem, { startWithFiles: [file] });

        expect(target.getByText("TEST ELEMENT")).toBeInTheDocument();
        expect(target.getByText("Hello John")).toBeInTheDocument();
    });
});
