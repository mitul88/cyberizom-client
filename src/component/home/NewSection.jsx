import React from 'react'
import NewServiceItem from './NewServiceItem'
import { serviceItem } from '../../mock/serviceData'


const NewSection = () => {
  return (
    <section className='px-48 py-20'>
      <h2 className="text-4xl text-center font-bold">What's new at Cyberizom</h2>
      <div className="flex justify-between items-center gap-3 w-full mt-10">
        {serviceItem.map(service => (
          <NewServiceItem key={service.id} service={service} />
        ))}
      </div>    
    </section>
  )
}

export default NewSection