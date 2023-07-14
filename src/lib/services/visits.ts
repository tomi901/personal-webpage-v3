import supabase from "$lib/supabase";

export async function incrementVisit(visitId: string): Promise<number> {
    const result = await supabase.rpc("increment_visit", {
        increment_id: visitId,
    });

    if (result.error) {
        throw result.error;
    }
    return result.data;
}
