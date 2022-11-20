import { AcademicCapIcon, ClockIcon, ReceiptRefundIcon, UsersIcon } from "@heroicons/react/outline"
import { CheckIcon, ViewListIcon } from "@heroicons/react/solid"
import Link from "next/link"
import Patients from "./Patients"
import { useAuth } from '../../context/AuthContext';
import { useEffect, useState } from "react";


function Dashboard() {

    const { useSession } = useAuth() as { useSession: user };

    const [ author, setAuthor ] = useState() as any;

    useEffect(() => {
        if(useSession)
            setAuthor(useSession);
    }, [useSession])
    
    const user = {
        name: 'Kristen Ramos',
        email: 'kristen.ramos@example.com',
        role: 'Clínico Geral',
        imageUrl:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    }

    const stats = [
        { label: 'Vacation days left', value: 12 },
        { label: 'Sick days left', value: 4 },
        { label: 'Personal days left', value: 2 },
    ]

    const actions = [
        {
            icon: ClockIcon,
            name: 'Request time off',
            href: '#',
            iconForeground: 'text-teal-700',
            iconBackground: 'bg-teal-50',
        },
        {
            icon: CheckIcon,
            name: 'Benefits',
            href: '#',
            iconForeground: 'text-purple-700',
            iconBackground: 'bg-purple-50',
        },
        {
            icon: UsersIcon,
            name: 'Schedule a one-on-one',
            href: '#',
            iconForeground: 'text-sky-700',
            iconBackground: 'bg-sky-50',
        },
        {
            icon: ViewListIcon,
            name: 'Payroll',
            href: '#',
            iconForeground: 'text-yellow-700',
            iconBackground: 'bg-yellow-50',
        },
        {
            icon: ReceiptRefundIcon,
            name: 'Submit an expense',
            href: '#',
            iconForeground: 'text-rose-700',
            iconBackground: 'bg-rose-50',
        },
        {
            icon: AcademicCapIcon,
            name: 'Training',
            href: '#',
            iconForeground: 'text-indigo-700',
            iconBackground: 'bg-indigo-50',
        },
    ]

    const announcements = [
        {
            id: 1,
            title: 'Office closed on July 2nd',
            href: '#',
            preview:
                'Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.',
        },
        {
            id: 2,
            title: 'New password policy',
            href: '#',
            preview:
                'Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.',
        },
        {
            id: 3,
            title: 'Office closed on July 2nd',
            href: '#',
            preview:
                'Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.',
        },
    ]

    const recentHires = [
        {
            name: 'Leonard Krasner',
            handle: 'leonardkrasner',
            imageUrl:
                'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
        },
        {
            name: 'Floyd Miles',
            handle: 'floydmiles',
            imageUrl:
                'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
        },
        {
            name: 'Emily Selman',
            handle: 'emilyselman',
            imageUrl:
                'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
        },
        {
            name: 'Kristin Watson',
            handle: 'kristinwatson',
            imageUrl:
                'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
        },
    ]

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }
  
    return (
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:py-6">
            <h1 className="sr-only">Profile</h1>
            {/* Main 3 column grid */}
            <div className="grid grid-cols-1 items-start gap-4  lg:gap-8">
                {/* Left column */}
                <div className="grid grid-cols-1 gap-4">
                    {/* Welcome panel */}
                    <section aria-labelledby="profile-overview-title">
                        <div className="overflow-hidden rounded-lg bg-white shadow">
                            <h2 className="sr-only" id="profile-overview-title">
                                Profile Overview
                            </h2>
                            <div className="bg-white p-6">
                                <div className="sm:flex sm:items-center sm:justify-between">
                                    <div className="sm:flex sm:space-x-5">
                                        <div className="flex-shrink-0">
                                            <img className="mx-auto h-20 w-20 rounded-full" src={author?.photoURL} alt="" />
                                        </div>
                                        <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                                            <p className="text-sm font-medium text-gray-600">Welcome back,</p>
                                            <p className="text-xl font-bold text-gray-900 sm:text-2xl">{author?.displayName}</p>
                                            <p className="text-sm font-medium text-gray-600">{author?.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </section>

                    {/* Actions panel */}
                    <section aria-labelledby="quick-links-title">
                        <Patients></Patients>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;