import { client } from "@/sanity/client";
import { PortableText } from "next-sanity";

const BlogContent = async(context) => {
    const id = context.params.id;
    // console.log(id)
    console.log(context)

    const response = await client.fetch(`*[_type == "blog" && slug.current == "debunking-the-Myth"]{blogDdescription}`)
    console.log(response)
  return (
    <div className="px-8 py-8">
      <PortableText value={response[0].blogDdescription}  />,
    </div>
  )
}

export default BlogContent;