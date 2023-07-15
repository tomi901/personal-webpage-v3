import supabaseAdmin from '$lib/services/supabase/admin';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const PUT: RequestHandler = async (event) => {
    const id = event.params.id;
    const result = await supabaseAdmin.rpc("increment_visit", {
        visits_id: id,
    });

    return returnAmount(result.data);
};

export const GET: RequestHandler = async (event) => {
    const id = event.params.id;
    const { data } = await supabaseAdmin.from("visits")
        .select("amount")
        .limit(1)
        .eq("id", id);

    const amount: number | undefined = data?.at(0)?.amount;
    return returnAmount(amount);
};

function returnAmount(amount?: number) {
    if (amount === undefined || amount === null) {
        throw error(404);
    }
    return json(amount);
}
