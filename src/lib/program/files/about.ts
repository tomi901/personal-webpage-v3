import type { SvelteComponent } from "svelte";
import UrbanExplorers from "$components/pages/about/UrbanExplorers.svelte";
import FloppaAdventure from "$components/pages/about/FloppaAdventure.svelte";
import RatDystopia from "$components/pages/about/RatDystopia.svelte";
import Zone170 from "$components/pages/about/Zone170.svelte";
import { ICON_HTML } from "$lib/constants/icons";
import type { ExecutableFile } from "../File";

export const files: ExecutableFile[] = [
	gameSection("urban_explorers", "Urban explorers", UrbanExplorers),
	gameSection("floppa_adventure", "Floppa Adventure", FloppaAdventure),
	gameSection("rat_dystopia", "Rat Dystopia", RatDystopia),
	gameSection("zone_1_70", "Zone 1-70", Zone170)
];

function gameSection(
	slug: string,
	title: string,
	component: typeof SvelteComponent
): ExecutableFile {
	const id = `tomas_rinaldi.html/${slug}`;
	return {
		id,
		name: title,
		icon: ICON_HTML,
		onOpen(system) {
			system.openWindow(component, {
				programId: id,
				title,
				width: 800,
				height: 600,
				maximized: true
			});
		}
	};
}

export default files;
