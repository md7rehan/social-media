import React from 'react'

const Navbar = () => {
  return (
    <nav className='p-10 bg-gray-100'>
        <div className='mx-auto flex justify-between items-center '>

            <div className="text-lg font-semibold flex items-center space-x-4 pl-15">

              {/* Image wrapped in its own link */}
              
              <a href="#" className="flex items-center border rounded-full w-[120px] h-[120px] justify-center">
                    <img 
                        src="smiley.gif" 
                        alt="profile photo" 
                        className="w-[100px] h-[100px] md:w-[100px] md:h-[100px] rounded-full"
                    />
              </a>

              {/* text wrapped in its own link */}

              <div className="text-md">
                <div className='text-sm opacity-50 italic'>Welcome back</div>

                <a href="#" className="hover:underline">profile name</a>
              </div>

            </div>
          
        </div>
    </nav>
  )
}

export default Navbar