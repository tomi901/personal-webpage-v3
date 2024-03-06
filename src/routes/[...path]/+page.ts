import { fileWithIdExists } from "$lib/program/files/all";
import { error } from "@sveltejs/kit";

export function load({ params }: import("./$types").PageLoadEvent) {
	const path: string = params.path;
	if (path && !fileWithIdExists(path)) {
		throw error(404, "Not found");
	}

	return {
		startWithFile: params.path
	};
}
