import React from 'react'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Field, Label, Switch } from '@headlessui/react'
import Multiselect from 'multiselect-react-dropdown'
import CreatableSelect from 'react-select/creatable'

import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'

import './Configuration.css'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Search_Configuration() {

    const [agreed, setAgreed] = useState(false)

    const state = {
        options: [{ label:'Posts',value: 'Posts'}, { label:'Pages',value: 'Pages'}]
    };

    const handleNewField = (value) => ({
        label: value,
        value: value.toUpperCase(),
    });

    // const createOption = (label) => ({
    //     // label,
    //     name: label,
    // });

    return (
        <div>
            <form action="#" method="POST" className="mx-10 mt-0 sm:mt-0 mr-10">

                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label htmlFor="protocol" className="block text-sm font-semibold leading-6 text-gray-900">
                            Select Posts Type to Enable
                        </label>


                        {/* <ChevronDownIcon
                            className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                            aria-hidden="true"
                        /> */}

                        <Multiselect
                            options={state.options} // Options to display in the dropdown
                            selectedValues={state.selectedValue} // Preselected value to persist in dropdown
                            // onSelect={onSelect} // Function will trigger on select event
                            // onRemove={onRemove} // Function will trigger on remove event
                            displayValue="value" // Property name to display in the dropdown options
                            className=' border-black border-2'
                            isCreatable={true}
                            onCreateOption={handleNewField} 
                        />

                    </div>

                    <span className="sm:col-span-2 text-sm"><span className='font-semibold text-base'>Max Suggestions: </span>This option determines how many results are shown in autocomplete dropdown</span>
                    <span className="sm:col-span-2 text-sm"><span className='font-semibold text-base'>Indexing: </span> Please do not navigate away from the page when indexing-it takes approx 1 minute to index 1000 posts</span>

                    <div>
                        <div className=' flex gap-48 text-sm font-bold my-2'>
                            <h6>Post_Type:</h6>
                            <h6>Label</h6>
                            <h6 className='mx-20'>Max_Suggestions</h6>
                            <h6>Actions</h6>
                        </div>

                        <div className=' flex gap-40 text-sm font-semibold my-4'>
                            <h6>Posts Index_Name:post</h6>
                            <input type="text" value='Blog Posts' className=' w-40 h-10 rounded-md text-sm' />
                            <input type="number" value='5' className=' w-20 h-10 rounded-md' />
                            <div className='flex gap-x-8'>

                                <button
                                    type="submit"
                                    className="h-10 rounded-md bg-indigo-600 px-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Index
                                </button>
                                <button
                                    type="submit"
                                    className="w-100 h-10 rounded-md bg-red-500 px-3.5 py-0.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Delete_and_Re_Index
                                </button>
                            </div>
                        </div>

                        <div className=' flex gap-40 text-sm font-semibold my-4'>
                            <h6>Pages Index_Name:page</h6>
                            <input type="text" value='Pages' className=' w-40 rounded-md text-sm' />
                            <input type="number" value='5' className=' w-20 rounded-md' />
                            <div className='flex gap-x-8'>

                                <button
                                    type="submit"
                                    className="h-10 rounded-md bg-indigo-600 px-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Index
                                </button>
                                <button
                                    type="submit"
                                    className="w-100 h-10 rounded-md bg-red-500 px-3.5 py-0.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Delete_and_Re_Index
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <hr className=" my-6 " />
                        <label htmlFor="Autocomplete_placeholder" className="block text-md font-semibold leading-6 text-gray-900">
                            Autocomplete Placeholder
                        </label>

                        <div className="mt-2.5">
                            {/* <span className="flex justify-end items-baseline" onClick={handleToggle}>
                                <Icon className="absolute mr-10" icon={icon} size={25} />
                            </span> */}
                            <input
                                type="text"
                                name="Autocomplete_placeholder"
                                id="Autocomplete_placeholder"
                                placeholder='Search for Blog Posts'
                                // disabled="disabled"
                                // autoComplete="email"
                                className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            // value="HELLO"
                            />
                            <div className="sm:col-span-2 text-sm">This will be the default placeholder for autocomplete fields</div>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <hr className=" my-6 " />
                        <label htmlFor="INPUT_DELAY" className="block text-md font-semibold leading-6 text-gray-900">
                            Autocomplete Input Delay
                        </label>
                        <div className="relative mt-2.5">
                            {/* <span className="flex justify-end items-baseline" onClick={handleToggle2}>
                                <Icon className="absolute mr-10" icon={icon2} size={25} />
                            </span> */}
                            <input
                                type="number"
                                name="INPUT_DELAY"
                                id="INPUT_DELAY"
                                // disabled="disabled"
                                // autoComplete="tel"
                                value="300"
                                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <div className="sm:col-span-2 text-sm">Change delay for search result,in millisecond</div>
                        </div>
                    </div>

                    <hr className=" my-6 " />
                    <Field as="div" className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <Switch
                                checked={agreed}
                                onChange={setAgreed}
                                className={classNames(
                                    agreed ? 'bg-indigo-600' : 'bg-gray-200',
                                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                )}
                            >
                                {/* <span className="sr-only">Agree to policies</span> */}
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        agreed ? 'translate-x-3.5' : 'translate-x-0',
                                        'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                        </div>
                        <Label className="block text-sm font-semibold leading-6 text-gray-900">
                            Replace WordPress Search
                        </Label>
                    </Field>

                    <div className="sm:col-span-2 text-sm">Enabling this will replace all default WordPress search widgets and forms to display autocomplete</div>
                </div>
                <hr className=" my-6 " />
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-20 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Search_Configuration
