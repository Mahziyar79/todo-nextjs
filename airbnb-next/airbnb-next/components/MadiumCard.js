import React from 'react'

function MadiumCard({img,title}) {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition durition-300'>
        <div className='relative w-80 h-80'>
            <img src={img} alt="mediumCard-img" className='rounded-xl'/>
        </div>
        <h3 className='text-2xl mt-3'>{title}</h3>
    </div>
  )
}

export default MadiumCard