import { CheckIcon, PaperClipIcon, QuestionMarkCircleIcon, ThumbUpIcon, UserIcon } from "@heroicons/react/outline";
import Image from 'next/image'

const user = {
    name: 'Whitney Francis',
    email: 'whitney@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
}

const attachments = [
    { name: 'cirurgias_em_coração_harvard.pdf', href: '#' },
    { name: 'coverletter_medical_clinic_oxford.pdf', href: '#' },
]

const comments = [
    {
        id: 1,
        name: 'Leslie Alexander',
        date: '4d ago',
        imageId: '1494790108377-be9c29b29330',
        body: 'Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.',
    },
    {
        id: 2,
        name: 'Michael Foster',
        date: '4d ago',
        imageId: '1519244703995-f4e0f30006d5',
        body: 'Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia accusamus veniam id explicabo et aut.',
    },
    {
        id: 3,
        name: 'Dries Vincent',
        date: '4d ago',
        imageId: '1506794778202-cad84cf45f1d',
        body: 'Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.',
    },
]

const eventTypes = {
    applied: { icon: UserIcon, bgColorClass: 'bg-gray-400' },
    advanced: { icon: ThumbUpIcon, bgColorClass: 'bg-teal-500' },
    completed: { icon: CheckIcon, bgColorClass: 'bg-green-500' },
}

const timeline = [
    {
        id: 1,
        type: eventTypes.applied,
        content: 'Aplicou para',
        target: 'Teste clínicos',
        date: 'Sep 20',
        datetime: '2020-09-20',
    },
    {
        id: 2,
        type: eventTypes.advanced,
        content: 'Consulta realizada',
        target: 'Bethany Blake',
        date: 'Sep 22',
        datetime: '2020-09-22',
    },
    {
        id: 3,
        type: eventTypes.completed,
        content: 'Completou 600 consultas com',
        target: 'Martha Gardner',
        date: 'Sep 28',
        datetime: '2020-09-28',
    },
    {
        id: 4,
        type: eventTypes.advanced,
        content: 'Inicio novo tratamento de',
        target: 'Bethany Blake',
        date: 'Sep 30',
        datetime: '2020-09-30',
    },
    {
        id: 5,
        type: eventTypes.completed,
        content: 'Completou cirurgia no ombro de',
        target: 'Katherine Snyder',
        date: 'Oct 4',
        datetime: '2020-10-04',
    },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

function Profile(data : any) {

    

    return (
        <div>
            <div className="mx-auto md:flex md:items-center md:justify-between">
                <div className="flex items-center space-x-5">
                    <div className="flex-shrink-0">
                        <div className="relative">
                                <Image
                            src={data.data.imgUrl}
                            alt="Picture of the author"
                            width={150}
                            height={150}
                            className ="h-16 w-16 rounded-full"
                            />
                        <span className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">{data.fullName}</h1>
                        <p className="text-sm font-medium text-gray-500">
                            Qualificada em{' '}
                            <a href="#" className="text-gray-900">
                                Clínico Geral
                            </a>{' '}
                            em <time dateTime="2020-08-25">Agosto 25, 2020</time>
                        </p>
                    </div>
                </div>
                
            </div>

            <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-0 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-1">
                <div className="space-y-6 lg:col-span-1 lg:col-start-1">
                    {/* Description list*/}
                    <section aria-labelledby="applicant-information-title">
                        <div className="bg-white shadow sm:rounded-lg">
                            <div className="px-12 py-5">
                                <h2 id="applicant-information-title" className="text-lg font-medium leading-6 text-gray-900">
                                    Informações do Médico
                                </h2>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">Dados pessoais e profissionais.</p>
                            </div>
                            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Application for</dt>
                                        <dd className="mt-1 text-sm text-gray-900">Clínico Geral</dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Email address</dt>
                                        <dd className="mt-1 text-sm text-gray-900">kirsten@example.com</dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Anos de Atuação</dt>
                                        <dd className="mt-1 text-sm text-gray-900">5</dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Telefone</dt>
                                        <dd className="mt-1 text-sm text-gray-900">+55 11 999 555 555</dd>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <dt className="text-sm font-medium text-gray-500">About</dt>
                                        <dd className="mt-1 text-sm text-gray-900">
                                            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.
                                            Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                                            proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                                        </dd>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                                        <dd className="mt-1 text-sm text-gray-900">
                                            <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                                                {attachments.map((attachment) => (
                                                    <li
                                                        key={attachment.name}
                                                        className="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
                                                    >
                                                        <div className="flex w-0 flex-1 items-center">
                                                            <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                            <span className="ml-2 w-0 flex-1 truncate">{attachment.name}</span>
                                                        </div>
                                                        <div className="ml-4 flex-shrink-0">
                                                            <a href={attachment.href} className="font-medium text-teal-600 hover:text-teal-500">
                                                                Download
                                                            </a>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            
                        </div>
                    </section>

                    {/* Comments*/}
                    <section aria-labelledby="notes-title">
                        <div className="bg-white shadow sm:overflow-hidden sm:rounded-lg">
                            <div className="divide-y divide-gray-200">
                                <div className="px-4 py-5 sm:px-6">
                                    <h2 id="notes-title" className="text-lg font-medium text-gray-900">
                                        Comentários
                                    </h2>
                                </div>
                                <div className="px-4 py-6 sm:px-6">
                                    <ul role="list" className="space-y-8">
                                        {comments.map((comment) => (
                                            <li key={comment.id}>
                                                <div className="flex space-x-3">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            className="h-10 w-10 rounded-full"
                                                            src={`https://images.unsplash.com/photo-${comment.imageId}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm">
                                                            <a href="#" className="font-medium text-gray-900">
                                                                {comment.name}
                                                            </a>
                                                        </div>
                                                        <div className="mt-1 text-sm text-gray-700">
                                                            <p>{comment.body}</p>
                                                        </div>
                                                        <div className="mt-2 space-x-2 text-sm">
                                                            <span className="font-medium text-gray-500">{comment.date}</span>{' '}
                                                            <span className="font-medium text-gray-500">&middot;</span>{' '}
                                                            <button type="button" className="font-medium text-gray-900">
                                                                Reply
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-6 sm:px-6">
                                <div className="flex space-x-3">
                                    <div className="flex-shrink-0">
                                        <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <form action="#">
                                            <div>
                                                <label htmlFor="comment" className="sr-only">
                                                    About
                                                </label>
                                                <textarea
                                                    id="comment"
                                                    name="comment"
                                                    rows={3}
                                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                                                    placeholder="Add a note"
                                                    defaultValue={''}
                                                />
                                            </div>
                                            <div className="mt-3 flex items-center justify-between">
                                                <a
                                                    href="#"
                                                    className="group inline-flex items-start space-x-2 text-sm text-gray-500 hover:text-gray-900"
                                                >
                                                    <QuestionMarkCircleIcon
                                                        className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                                        aria-hidden="true"
                                                    />
                                                    <span>Some HTML is okay.</span>
                                                </a>
                                                <button
                                                    type="submit"
                                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                                                >
                                                    Comment
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

           
            </div>
        </div>
    )
}

export default Profile;