import { faEnvelope } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CheckCircleIcon, ChevronRightIcon } from '@heroicons/react/solid'
import Link from 'next/link';

function discover({ list }: { list: Array<Object> }) {
  
    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-md">
            <ul role="list" className="divide-y divide-gray-200">
                {list.map((application: any) => (
                    <li key={application.slug}>
                        <Link href={`/discover/detail/${application.slug}`}>
                            <a  className="block hover:bg-gray-50">
                                <div className="flex items-center px-4 py-4 sm:px-6">
                                    <div className="flex min-w-0 flex-1 items-center">
                                        <div className="flex-shrink-0">
                                            <img className="h-12 w-12 rounded-full" src={application.imgUrl} alt="" />
                                        </div>
                                        <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                            <div>
                                                <p className="truncate text-sm font-medium text-indigo-600">{application.fullName}</p>
                                                <p className="mt-2 flex items-center text-sm text-gray-500">
                                                    <FontAwesomeIcon icon={faEnvelope} className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                    <span className="truncate">{application.cellphone}</span>
                                                </p>
                                            </div>
                                            <div className="hidden md:block">
                                                <div>
                                                    <p className="text-sm text-gray-900">
                                                        Applied on <time dateTime={application.date}>{application.date}</time>
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
                ))}
            </ul>
        </div>
    )
}

export default discover;