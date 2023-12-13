export const prerender = true
/** @type {import('./$types').LayoutLoad} */
export async function load({route}) {

    return {route};
}