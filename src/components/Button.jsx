import React from 'react'

function Button({value="text"}) {
  return (
    <button className="w-3/4 h-14 bg-[#ECA64E] hover:bg-[#f6c384] rounded-xl text-white ">
    {value}
  </button>
  )
}

export default Button