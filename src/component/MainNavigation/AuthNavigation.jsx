const AuthNavigation = () => {
  return (
    <div className='container mx-auto flex justify-end'>
        <div className="flex gap-5">
            <button className="hover:underline transition ease-out duration-300 px-5">login</button>        
            <button className="rounded border-2 hover:border-white ease-out duration-300 border-gray-400 px-5 py-2 font-bold text-green-400">Contacted by a Hacker</button>        
            <button className="rounded border-2 hover:border-white ease-out duration-300 border-gray-400 px-5 py-2 font-bold">ContactUs</button>        
        </div>
    </div>
  )
}

export default AuthNavigation