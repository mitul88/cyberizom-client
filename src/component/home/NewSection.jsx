import React from 'react'

const NewSection = () => {
  return (
    <section className='px-48 py-20'>
      <h2 className="text-4xl text-center font-bold">What's new at Cyberizom</h2>
      <div className="flex justify-between items-center gap-3 w-full mt-10">
        <div className="rounded-lg w-[340px] h-[500px]">
          <img 
            src="https://www.hackerone.com/sites/default/files/styles/medium/public/aa82926f8f904a8cb4cd35ce8f73e159.png.webp?itok=RUbEu5SH" 
            alt="" 
            className="rounded-t-lg w-full h-[250px]" 
          />
          <div className="border-b border-x border-gray-300 rounded-b-lg h-[250px]"></div>
        </div>
        <div className="rounded-lg w-[340px] h-[500px]">
          <img 
              src="https://www.hackerone.com/sites/default/files/styles/medium/public/3721d02b17a24cb9b933ebc726755715.png.webp?itok=JrVI8-dR" 
              alt="" 
              className="rounded-t-lg w-full h-[250px]" 
            />
          <div className="border-b border-x border-gray-300 rounded-b-lg h-[250px]"></div>
        </div>
        <div className="rounded-lg w-[340px] h-[500px]">
          <img 
                src="https://www.hackerone.com/sites/default/files/styles/medium/public/09c5cde5f2784d98b15d5aa7a7212d40.png.webp?itok=3JJGSsFo   " 
                alt="" 
                className="rounded-t-lg w-full h-[250px]" 
          />
          <div className="border-b border-x border-gray-300 rounded-b-lg h-[250px]"></div>
        </div>
      </div>
      
    </section>
  )
}

export default NewSection