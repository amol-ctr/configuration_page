import React from 'react'

function Logs() {
    return (
        <div className='mx-12 font-bold border-2 px-3 pb-6'>
            <h3 className='my-5'>Error Logs</h3>
            <button
                type="submit"
                className="h-10 rounded-md bg-indigo-600 px-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Fetch Logs
            </button>
            <h3 className='my-5'>Debug Logs</h3>
            <button
                type="submit"
                className="h-10 rounded-md bg-indigo-600 px-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Fetch Logs
            </button>
            <h3 className='my-5'>Site Info</h3>
            <button
                type="submit"
                className="h-10 rounded-md bg-indigo-600 px-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Get Site Info
            </button>
        </div>
    )
}

export default Logs
