import { defineType, defineField, defineArrayMember } from 'sanity'

export const blogs = defineType({
    title: "Blog",
    name: "blog",
    type: "document",
    fields: [
        {
           name: "blog",
           type: "string",
           title: "Title"
        },
        {
           name: "description",
           type: "string",
           title: "Discription"
        },
        {
           name: "date",
           type: "datetime",
           title: "Posted at"
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
        },{
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 200, // will be ignored if slugify is set
              slugify: input => input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)
            }
          },{
            title: 'Bloag Description', 
            name: 'blogdescription',
            type: 'array', 
            of: [{type: 'block'}]
          }
    ]
})  