
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ArrowRightIcon } from "@heroicons/react/solid";
import { saveAs } from "file-saver";
import findFocusedElem from 'find-focused-element';
const navigation = [
    { name: 'About', href: '#about', current: true },
    { name: 'Skills', href: '#skills', current: false },
    { name: 'Projects', href: '#projects', current: false },
    { name: 'Testimonials', href: '#testimonials', current: false },
    { name: 'Download My CV', href: '#download', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NewNavbar() {
    // const [hasFocus, setFocus] = useState(false);
    const saveFile = () => {
        saveAs(
            "./yaqubadesolacv.pdf",
            "yaqub.pdf"
        );
    };

    const elem = findFocusedElem(window.document);
    console.log("focused elem ", elem)
    return (
        <Disclosure as="nav" className="bg-green-800">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden" >
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"  >
                                <div className="flex-shrink-0 flex items-center" style={{ margin: "-5px", }}>
                                    <a href="#about" className="ml-3 text-xl">
                                        <img alt="Yaqub Signature"
                                            style={{ borderRadius: "20px", border: "2px solid black" }}
                                            src="./yaqub_logo5.jpg"
                                        />
                                    </a>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a id={item.href === "#download" ? "download" : ""}
                                                onClick={item.href === "#download" ? saveFile : ""}
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                                    HIRE ME
                                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                                </a>

                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1" >
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}