import {createClient} from '@sanity/client'

export const client=createClient({
    projectId:'zvbwol8j',
    useCdn:false,
    dataset:'production',
    apiVersion:'2023-04-17',
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN
})