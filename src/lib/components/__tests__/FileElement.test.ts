import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/svelte";
import "@testing-library/jest-dom/vitest";

import FileElement from "$components/FileElement.svelte";
import type { ExecutableFile } from "$lib/program/File";
import { getContextKeyValue } from "$lib/program/system";
import type { OperativeSystem } from "$lib/program/system-types";

describe("FileElement.svelte", () => {
    const testFile = Object.freeze({
        id: "test",
        icon: "icon-test",
        name: "test-name",
    } as ExecutableFile);

    function createFile(override?: Partial<ExecutableFile>): ExecutableFile {
        const obj = {} as ExecutableFile;
        Object.assign(obj, testFile, override);
        return obj;
    }

    function stubContextSystem(): [symbol, OperativeSystem] {
        return getContextKeyValue({
            openWindow() { /**/ },
            goto() { return Promise.resolve(); }
        });
    }

    it("Has an icon", () => {
        const icon = "test-src-image";
        const file = createFile({ icon });
        const element = render(FileElement, { file });

        const image = element.getByRole("img") as HTMLImageElement;
        expect(image).toBeInTheDocument();
        expect(image.src).to.include(icon);
    });

    it("Executes on click", async () => {
        let called = 0;
        const file = createFile({
            onOpen() { called++; },
        });
        const element = render(FileElement, {
            props: { file },
            context: new Map([stubContextSystem()]),
        });

        const result = await fireEvent.click(element.getByRole("img"));

        expect(result).toBeTruthy();
        expect(called).toBe(1);
    });

    it("Displays name", async () => {
        const name = "Trust me, I'm a dolphin.exe";
        const file = createFile({ name });

        const element = render(FileElement, { file });

        expect(element.getByText(name)).toBeInTheDocument();
    });
});
