import React from 'react'

const AddSpaceCard = (props) => {
  return (
    <div className='w-[40%] h-[25vh] border rounded border-gray-300 flex flex-col items-center justify-center gap-1'>
            <div className='w-[90%] h-[20%]'>
              <h1 className='text-2xl'>{props.Title}</h1>
            </div>
            
            <div className='w-[90%] h-[60%] text-sm'>
                <span>{props.Description}</span>
            </div>
        </div>
  )
}

export default AddSpaceCard