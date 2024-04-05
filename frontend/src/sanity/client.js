import { createClient } from 'next-sanity'
import {PortableText} from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'b5b78jvq',
    dataset: 'production',
    apiVersion: "2024-04-05",
    // unless you have caching for your front end, `useCdn` should be `true` for most production environments
    useCdn: false,
})


const builder = imageUrlBuilder(client)

export function urlFor(source) {
    return builder.image(source)
}
