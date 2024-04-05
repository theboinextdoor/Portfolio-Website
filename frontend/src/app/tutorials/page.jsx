
import { client } from "@/sanity/client"
import Cards from "../components/Cards"


const Tutorials = async () => {
  const EVENTS_QUERY = await client.fetch(`*[_type == "tutorials"]`)
  console.log(EVENTS_QUERY)
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto " bis-skin-checked={1}>
        <div className="flex flex-col items-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-center text-gray-900 ">Some of my Hardworks</h1>
          <div className="h-1 w-64 bg-indigo-500 rounded"></div>
        </div>
        <div className="flex flex-wrap -m-4 mt-10" bis-skin-checked={1}>
          {
            EVENTS_QUERY.map((val) => {
              return (
                <Cards 
                views={val.views} 
                comments={val.comments} 
                description={val.description} 
                title={val.tutorial} 
                image={val.image}
                />
              )
            })
          }

          {/* <Cards />
          <Cards />
          <Cards />
          <Cards /> */}

        </div>
      </div>
    </section>

  )
}

export default Tutorials