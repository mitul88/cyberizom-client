import React from 'react'

const ContactForm = () => {
  return (
    <>
        <form>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                <div className="flex flex-col gap-3">
                    <label className='font-bold' htmlFor="">First Name: *</label>
                    <input type="text" className="px-5 py-2" />
                </div>
                <div className="flex flex-col gap-3">
                    <label className='font-bold' htmlFor="">Last Name: *</label>
                    <input type="text" className="px-5 py-2" />
                </div>
                <div className="flex flex-col gap-3">
                    <label className='font-bold' htmlFor="">Business Email: *</label>
                    <input type="text" className="px-5 py-2" />
                </div>
                <div className="flex flex-col gap-3">
                    <label className='font-bold' htmlFor="">Company: *</label>
                    <input type="text" className="px-5 py-2" />
                </div>
                <div className="flex flex-col gap-3">
                    <label className='font-bold' htmlFor="">Job Title: *</label>
                    <input type="text" className="px-5 py-2" />
                </div>
                <div className="flex flex-col gap-3">
                    <label className='font-bold' htmlFor="">What is your security objective? *</label>
                    <select name="cars" className="px-5 py-2 text-black">
                        <option value={1}>Identify and remediate vulnerabilities faster</option>
                        <option value={2}>Fix security issues during development</option>
                        <option value={3}>Scale my organizations security states</option>
                        <option value={4}>Eliminate cloud misconfigurations</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <label className='font-bold' htmlFor="">Country *</label>
                <select name="cars" className="px-5 py-2 text-black">
                    <option value={1}>Bangladesh</option>
                    <option value={2}>Nepal</option>
                    <option value={3}>Bhutan</option>
                    <option value={4}>Srilanka</option>
                </select>
            </div>
            <div className="flex justify-center p-5">
                <button className="mx-auto bg-blue-600 shadow-sm px-5 py-2 rounded-lg border-0">Submit</button>
            </div>
        </form>
    </>
  )
}

export default ContactForm