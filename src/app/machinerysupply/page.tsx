import { constructionmeterials, constructionmetions } from '@/lib/data'
import React from 'react'

export default function page() {
  return (
    <section className=' my-24 grid gap-7 px-3 lg:grid-cols-3 max-w-7xl mx-auto'>
      {
        constructionmetions.map((material) => (
          <div
         
          className=' h-[25rem] relative flex flex-col justify-end   overflow-hidden rounded-xl border shadow-md' key={material.id}>
            <h2 className=' mx-6 mb-10 text-2xl z-10 font-medium underline text-center '>{material.name}</h2>
            <img 
             style={{
              maskImage: `linear-gradient(to top, transparent, black 60%)`,
            }}
            className=' w-full h-full absolute top-0 left-0 object-cover' src={material.image} alt={material.name} />
          </div>
        ))
      }
    </section>
  )
}
