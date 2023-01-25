import { fileWithIdExists } from '$lib/program/files/all';
import { error } from '@sveltejs/kit';

export const load: import('./$types').PageLoad = function ({ params }) {
    const path: string = params.path;
    if (path && !fileWithIdExists(path)) {
        throw error(404, 'Not found');
    }

    return {
        startWithFile: params.path,
    };
}
