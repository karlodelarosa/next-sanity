import {createClient} from 'next-sanity'

const projectId = "ikt4ndqv" // "pv8y60vp"
const dataset = "production"// "production"
const apiVersion = '2023-05-03'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
})