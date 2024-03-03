import React from 'react'

export default function NaveModal({status='false'}) {
  return (
    <div className={`w-full h-full bg-secondary ${!status && 'hidden'} md:flex`}>
    <div>
      <ul className="flex justify-between font-Raleway">
        <li>Reservation</li>
        <li>Menu</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  </div>
  )
}
