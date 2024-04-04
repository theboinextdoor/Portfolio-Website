import React from 'react'
import BlogCard from '../components/BlogCard'

const Blog = () => {
  return (
    <>

      <section className="text-gray-600 body-font overflow-hidden bg-[#f3f4f6]">
        <div className='flex flex-col items-center '>
          <h2 className="pt-10 text-3xl font-medium title-font text-gray-900 text-center mb-4"> Blogs</h2>
          <div class="h-1 w-28 bg-indigo-500 rounded  "></div>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          
            
          </div>
        </div>
      </section>

    </>


  )
}

export default Blog