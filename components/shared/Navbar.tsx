/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { faConnectdevelop, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useAuth } from '../../context/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    BookmarkAltIcon,
    BriefcaseIcon,
    ChartBarIcon,
    CheckCircleIcon,
    ClockIcon,
    CursorClickIcon,
    DesktopComputerIcon,
    GlobeAltIcon,
    InformationCircleIcon,
    MenuIcon,
    NewspaperIcon,
    OfficeBuildingIcon,
    PhoneIcon,
    PlayIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon, PaperAirplaneIcon, PaperClipIcon, WifiIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { faClose, faKitMedical, faStarshipFreighter } from '@fortawesome/pro-solid-svg-icons';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../lib/firebase';


const solutions = [
    {
        name: 'Agendamento',
        description: 'Agendamento de consulta com os melhores médicos, acomopanhamento total de todo o processo online.',
        href: '#',
        icon: ClockIcon,
    },
    {
        name: 'Exames',
        description: 'Após todos os exames anossa carteira digital mantem tudo organixzado para você e para seus médicos.',
        href: '#',
        icon: PaperAirplaneIcon,
    },
    { 
        name: 'Remédios', 
        description: "Além de manter tudo organizado para você, também auxiliamos que você não esqueca da hora do remédio.", 
        href: '#', 
        icon: ShieldCheckIcon 
    },
    {
        name: 'Dentistas',
        description: "Além de contar com toda a gama dos melhores médicos do pais, também mantemos os melhores dentistas em nossa base.",
        href: '#',
        icon: ViewGridIcon,
    },
]
const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '+55333333333', icon: PhoneIcon },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

function Navbar({page}: {page: string}) {

    const { login, logout } = useAuth();
    
    const [loading, setLoading] = useState(false);

    const [ isLogged, setIsLogged ] = useState(false)

    useEffect( () => {
        setLoading(true)
        onAuthStateChanged(auth, (user) => {
            setLoading(false)
            if (user) {
                setIsLogged(true)
            } 
        });
    }, []);
    
    return (
        <header>
            <Popover className="relative bg-white">
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true" />
                <div className="relative z-20">
                    <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-7 md:justify-start md:space-x-10">
                        <Link href={'/'}>
                            <a className="flex font-bold text-teal-600 text-lg group">
                                <span className="sr-only">Medicine</span>
                                <FontAwesomeIcon icon={faKitMedical} className="h-7 w-7 mr-1 group-hover:animate-spin-fast" aria-hidden="true" />
                                GrandpaRentals
                            </a>
                        </Link>
                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                            <Popover.Group as="nav" className="flex space-x-10 align-middle items-center">
                                
                                {!loading && isLogged &&
                                    <Link href={'/user'}>
                                        <a className={
                                            `
                                        text-base
                                        font-medium
                                        px-3
                                        ${page == 'user' ? "text-teal-500 hover:text-teal-900" : "text-gray-500 hover:text-gray-900"}
                                        `
                                        }>
                                            Dashboard
                                        </a>
                                    </Link>
                                } 

                                <Link href={'/professional/list'}>
                                    <a className={
                                        `
                                        text-base
                                        font-medium
                                        px-3
                                        ${page == 'professionals' ? "text-teal-500 hover:text-teal-900" : "text-gray-500 hover:text-gray-900"}
                                        `
                                    }>
                                        TODO
                                    </a>
                                </Link>
                                {/* <Link href={'/offer/list'}>
                                    <a className={
                                        `
                                        text-base
                                        font-medium
                                        px-3
                                        ${page == 'offers' ? "text-teal-600 hover:text-teal-900" : "text-gray-500 hover:text-gray-900" }
                                        `
                                    }>
                                        Empresas
                                    </a>
                                </Link> */}
                                <Popover>
                                    {({ open }) => (
                                        <>
                                            <Popover.Button
                                                className={classNames(
                                                    open ? 'text-gray-900' : 'text-gray-500',
                                                    'px-3 group bg-white rounded-md inline-flex items-center text-base font-medium border-2 border-transparent hover:text-gray-900 focus:text-white focus:bg-teal-600 focus:outline-none focus:border-teal-600 focus:rounded-md'
                                                )}
                                            >
                                                <span>TODO category 2</span>
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open ? 'text-gray-600' : 'text-gray-400',
                                                        'ml-2 h-5 w-5 group-hover:text-gray-500 group-focus:text-white'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 -translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 -translate-y-1"
                                            >
                                                <Popover.Panel className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white">
                                                    <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                                                        {solutions.map((item) => (
                                                            <a
                                                                key={item.name}
                                                                href={item.href}
                                                                className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50"
                                                            >
                                                                <div className="flex md:h-full lg:flex-col">
                                                                    <div className="flex-shrink-0">
                                                                        <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-teal-500 text-white sm:h-12 sm:w-12">
                                                                            <item.icon className="h-6 w-6" aria-hidden="true" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                                                        <div>
                                                                            <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                            <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                                        </div>
                                                                        <p className="mt-2 text-sm font-medium text-teal-600 lg:mt-4">
                                                                            Saiba mais <span aria-hidden="true">&rarr;</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        ))}
                                                    </div>
                                                    <div className="bg-gray-50">
                                                        <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                                                            {callsToAction.map((item) => (
                                                                <div key={item.name} className="flow-root">
                                                                    <a
                                                                        href={item.href}
                                                                        className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                                                    >
                                                                        <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                                                        <span className="ml-3">{item.name}</span>
                                                                    </a>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>
                            </Popover.Group>
                            <div className="flex items-center md:ml-12">
                                <button
                                    onClick={!loading && isLogged ? logout : login}
                                    className={`
                                        group
                                        ml-8
                                        px-4
                                        py-2
                                        border
                                        border-transparent
                                        rounded-md
                                        shadow-sm
                                        text-base
                                        font-medium
                                        text-white
                                        ${!loading && isLogged ? "bg-red-600 hover:bg-red-700" : "bg-teal-600 hover:bg-teal-700"}
                                    `}
                                >
                                 
                                {!loading && isLogged ? 
                                    <span className='
                                            inline-flex
                                            items-center
                                            justify-center'>
                                        <FontAwesomeIcon
                                            icon={faClose}
                                            className="w-4 h-4 mr-2 group-hover:animate-spin" />
                                        Logout
                                    </span>
                                    :
                                        <span className="
                                            inline-flex
                                            items-center
                                            justify-center 
                                            group-hover:text-yellow-400
                                            group-hover:animate-pulse" >
                                        <FontAwesomeIcon
                                            icon={faGoogle}
                                            className="w-4 h-4 mr-2" />
                                        Login via Google
                                    </span>
                                }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    >
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5 sm:pb-8">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark-teal-600.svg"
                                            alt="Workflow"
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                                            <span className="sr-only">Close menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="mt-6 sm:mt-8">
                                    <nav>
                                        <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                                            {solutions.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50"
                                                >
                                                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-500 text-white sm:h-12 sm:w-12">
                                                        <item.icon className="h-6 w-6" aria-hidden="true" />
                                                    </div>
                                                    <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                                                </a>
                                            ))}
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div className="py-6 px-5">
                                <div className="grid grid-cols-1 gap-4">
                                    {!loading && isLogged &&
                                        <Link href={'/user'}>
                                            <a className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                TODO
                                            </a>
                                        </Link>
                                    } 
                                    <Link href={'/professional/list'}>
                                        <a className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                            TODO
                                        </a>
                                    </Link>
                                </div>
                                <div className="mt-6">
                                    <a
                                        href="#"
                                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700"
                                    >
                                        <FontAwesomeIcon icon={faGoogle} />
                                        Sign up
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </header>
    )
}

export default Navbar;