import { createClient } from "@supabase/supabase-js";
import { PUBLIC_SUPABASE_URL } from "$env/static/public";
import { PRIVATE_SUPABASE_KEY } from "$env/static/private";

const supabaseAdmin = createClient(PUBLIC_SUPABASE_URL, PRIVATE_SUPABASE_KEY, {
    auth: {
        persistSession: false,
    },
});

export default supabaseAdmin;
