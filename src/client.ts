import {createClient} from 'next-sanity'

const projectId = "ikt4ndqv" // "pv8y60vp"
const dataset = "production"// "production"
const apiVersion = 'v2021-10-21'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    perspective: 'raw',
})