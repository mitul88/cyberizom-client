import { Link } from "react-router-dom"

const AuthNavigation = () => {
  return (
    <div className='container mx-auto flex justify-end'>
        <div className="flex gap-5">
            <Link to="account/signin" className="hover:underline transition ease-out duration-300 px-5 py-2">login</Link>        
            <Link className="rounded border-2 hover:border-white ease-out duration-300 border-gray-400 px-5 py-2 font-bold text-green-400">Contacted by a Hacker</Link>        
            <Link className="rounded border-2 hover:border-white ease-out duration-300 border-gray-400 px-5 py-2 font-bold">ContactUs</Link>        
        </div>
    </div>
  )
}

export default AuthNavigation