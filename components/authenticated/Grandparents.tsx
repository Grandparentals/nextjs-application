import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

function Grandparents() {
    const { t } = useTranslation();

    const { useSession } = useAuth() as { useSession: user };

    const [people, setPeople] = useState([]);

    useEffect(() => {
        if (useSession){
            const axiosRequest = async () => {
                const res = await axios.get(`/api/offer/list`);
                const data = res.data?.offersData;
                setPeople(data)
            };
            axiosRequest();
        }
    }, [useSession])

    

    return (
        <div className="px-2">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">{t('components.grandparents.title')}</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        {t('components.grandparents.subtitle')}
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link href={'/user/offer/create'}>
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-pelorous-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-pelorous-700 focus:outline-none focus:ring-2 focus:ring-pelorous-500 focus:ring-offset-2 sm:w-auto"
                        >
                            {t('components.grandparents.actions.add')}
                        </button>
                    </Link>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                             {t('components.grandparents.list.title')}
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">{t('components.grandparents.actions.edit')}</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {people.map((person: any, index) => (
                                        <tr key={index}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 flex-shrink-0">
                                                        <Image
                                                            src={person.imgUrl}
                                                            alt="Picture of the author"
                                                            width={64}
                                                            height={64}
                                                            className="h-16 w-16 rounded-full"
                                                        />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="font-medium text-gray-900">{person.fullName}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <a href="#" className="text-red-600 hover:text-red-900">
                                                    {t('components.grandparents.actions.delete')}
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grandparents;