import { defineType, defineField, defineArrayMember } from 'sanity'

export const tutorial = defineType({
    title: "Tutorials",
    name: "tutorials",
    type: "document",
    fields: [
        {
           name: "tutorial",
           type: "string",
           title: "Name"
        },
        {
           name: "description",
           type: "string",
           title: "Discription"
        },
        {
           name: "views",
           type: "string",
           title: "Views"
        },
        {
           name: "comments",
           type: "number",
           title: "Comments"
        },
        {
           name: "image",
           type: "image",
           title: "Image",
           options : {
            hotspot: true
           }
        },
    ]
})  