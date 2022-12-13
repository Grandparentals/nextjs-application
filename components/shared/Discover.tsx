import { faLightbulbOn, faExclamationTriangle } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CheckCircleIcon, ChevronRightIcon } from '@heroicons/react/solid'
import Link from 'next/link';
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

function discover({ list }: { list: Array<Object> }) {
    const { t } = useTranslation();

    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-md">
            <ul role="list" className="divide-y divide-gray-200">
                {
                    list.length > 0 ? 
                    list.map((application: any) => (
                    <li key={application.slug}>
                        <Link href={`/discover/detail/${application.slug}`}>
                            <a  className="block hover:bg-gray-50">
                                <div className="flex items-center px-4 py-4 sm:px-6">
                                    <div className="flex min-w-0 flex-1 items-center">
                                        <div className="flex-shrink-0">
                                            <Image
                                                src={application?.imgUrl || '/logo/logo-128.png'}
                                                alt="Picture of the author"
                                                width={64}
                                                height={64}
                                                className="h-16 w-16 rounded-full"
                                            />
                                        </div>
                                        <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                            <div>
                                                <p className="truncate text-sm font-medium text-indigo-600">{application.fullName}</p>
                                                <p className="mt-2 flex items-center text-sm text-gray-500">
                                                    <FontAwesomeIcon icon={faLightbulbOn} className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                    <span className="truncate">{application.skills[0]}</span>
                                                </p>
                                            </div>
                                            <div className="hidden md:block">
                                                <div>
                                                    <p className="text-sm text-gray-900">
                                                            {t('page.discoverPeople.appliedOn')} <time dateTime={application.date}>{application.date}</time>
                                                    </p>
                                                    <p className="mt-2 flex items-center text-sm text-gray-500">
                                                        <CheckCircleIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400" aria-hidden="true" />
                                                        {application.location}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </li>
                    )) 
                    : 
                    <li>
                        <div className="rounded-md bg-yellow-50 p-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <FontAwesomeIcon icon={faExclamationTriangle} className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm font-medium text-yellow-800">No register found</h3>
                                    <div className="mt-2 text-sm text-yellow-700">
                                        <p>
                                            Sorry but at the moment we didn't found any grandparent to connect with you, come back soon we promise that we'll found someone to create bonds with you.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                }
                
            </ul>
        </div>
    )
}

export default discover;