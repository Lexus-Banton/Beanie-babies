const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getBeanies(name) {
    let query = await client
        .from('beanie_babies')
        .select('*', { count: 'exact' })
        .order('releaseYear')
        .limit(100);
    console.log(name);
    if (name) {
        query = query.ilike('title', `%${name}%`);
    }
    console.log(query);
    const response = await query;
    return response;
}

export async function getAstroSigns() {
    const response = await client.from('beanie_baby_astro_signs').select();
    return response;
}
