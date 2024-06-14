import React from 'react'

function HeroBanner({title='Headphones'}) {
  return (
    <section className='bg-pBlack text-pWhite h-48 w-full '>
        <div className='container mx-auto h-full  flex p-4 justify-center items-center lg:px-10 '>
            <h2 className='text-3xl uppercase'>{title}</h2>
        </div>
        
    </section>
  )
}

export default HeroBanner