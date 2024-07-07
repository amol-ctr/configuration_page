import React from 'react'

function Shortcodes() {
  return (
    <div>
      <h1 className=' mx-16 text-3xl'>Shortcodes</h1>
    
      <div className=' block border-l-2 border-l-black h-72 w-auto mx-10 my-10'>
        <div className=' flex h-12'>
            <div></div>
            <div className='text-xl font-bold'></div>
        </div>
        <div className=' block border border-black h-60 w-auto px-4 py-4'>
            <div className=' block bg-slate-100 h-52 w-auto py-10'>
            <h5 className=' mx-6 text-xl font-bold'>[/] Shortcode</h5>
            <input type="text" className=' mx-6 my-6 w-8/12'/>
            </div>
        </div>
      </div>
      <h5 className=' my-2 mx-20 text-xl font-semibold text-slate-500'>Start Writing or type / to choose a block</h5>
    </div>
  )
}

export default Shortcodes
