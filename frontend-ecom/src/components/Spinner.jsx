import React from 'react'

const Spinner = () => {
  return (
    <div className="flex items-center justify-center"
    
  >
    <div aria-label="Loading..." role="status">
      <svg
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin w-6 h-6 stroke-white"
      >
        <path d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12"></path>
      </svg>
    </div>
    <span className=' ml-2'>Processing...</span>
  </div>
  
  )
}

export default Spinner