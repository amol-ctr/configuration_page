import React from 'react'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Field, Label, Switch } from '@headlessui/react'

import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'

import './Configuration.css'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Form1() {

    const [agreed, setAgreed] = useState(false)
    const [agreed2, setAgreed2] = useState(false)

    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    }

    const [type2, setType2] = useState('password');
    const [icon2, setIcon2] = useState(eyeOff);

    const handleToggle2 = () => {
        if (type2 === 'password') {
            setIcon2(eye);
            setType2('text')
        } else {
            setIcon2(eyeOff)
            setType2('password')
        }
    }

    return (
        <div>
            <form action="#" method="POST" className="mx-10 mt-0 sm:mt-0">
                
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="protocol" className="block text-sm font-semibold leading-6 text-gray-900">
                            Protocol
                        </label>
                        <div className="relative mt-2.5">
                            <div className="absolute inset-y-0 left-0 flex items-center my-5 w-full">
                                <select
                                    id="protocol"
                                    name="protocol"
                                    className="block w-full border-1 px-3.5 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                >
                                    <option>HTTP</option>
                                    <option>HTTPS</option>
                                    {/* <option>EU</option> */}
                                </select>
                                <ChevronDownIcon
                                    className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </div>

                        </div>
                    </div>

                    <div>
                        <label htmlFor="node_uri" className="block text-sm font-semibold leading-6 text-gray-900">
                            Enter Node URI
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="node_uri"
                                id="node_uri"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <hr className=" my-6 " />
                        <label htmlFor="port" className="block text-sm font-semibold leading-6 text-gray-900">
                            Enter PORT
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="port"
                                id="port"
                                autoComplete="organization"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <hr className=" my-6 " />
                        <label htmlFor="API_key" className="block text-sm font-semibold leading-6 text-gray-900">
                            Admin API Key
                        </label>

                        <div className="mt-2.5">
                            <span className="flex justify-end items-baseline" onClick={handleToggle}>
                                <Icon className="absolute mr-10" icon={icon} size={25} />
                            </span>
                            <input
                                type={type}
                                name="API_key"
                                id="API_key"
                                disabled="disabled"
                                // autoComplete="email"
                                className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value="HELLO"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <hr className=" my-6 " />
                        <label htmlFor="Search_API" className="block text-sm font-semibold leading-6 text-gray-900">
                            Search API Key
                        </label>
                        <div className="relative mt-2.5">
                            <span className="flex justify-end items-baseline" onClick={handleToggle2}>
                                <Icon className="absolute mr-10" icon={icon2} size={25} />
                            </span>
                            <input
                                type={type2}
                                name="Search_API"
                                id="Search_API"
                                disabled="disabled"
                                // autoComplete="tel"
                                value="HELLO"
                                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />

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
                            Enable Debug Log
                        </Label>
                    </Field>

                    <div className="sm:col-span-2 text-xs">Enabling Debug Log will ~ log information about the requests being made,which may help in identifying issues</div>

                    <Field as="div" className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <Switch
                                checked={agreed2}
                                onChange={setAgreed2}
                                className={classNames(
                                    agreed2 ? 'bg-indigo-600' : 'bg-gray-200',
                                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                )}
                            >
                                {/* <span className="sr-only">Agree to policies</span> */}
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        agreed2 ? 'translate-x-3.5' : 'translate-x-0',
                                        'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                        </div>
                        <Label className="block text-sm font-semibold leading-6 text-gray-900">
                            Enable Error Log
                        </Label>
                    </Field>
                    <div className="sm:col-span-2 text-xs">Enabling Error Log will ~ log errors which may help in identifying issues</div>
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

export default Form1;
