import { fileWithIdExists } from '$lib/program/files/all';
import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    const path: string = params.path;
    if (path && !fileWithIdExists(path)) {
        throw error(404, 'Not found');
    }
}
