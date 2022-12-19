import { CheckIcon, PaperClipIcon, QuestionMarkCircleIcon, ThumbUpIcon, UserIcon } from "@heroicons/react/outline";
import Image from 'next/image'

// const user = {
//     name: 'Whitney Francis',
//     email: 'whitney@example.com',
//     imageUrl:
//         'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
// }

// const attachments = [
//     { name: 'cirurgias_em_coração_harvard.pdf', href: '#' },
//     { name: 'coverletter_medical_clinic_oxford.pdf', href: '#' },
// ]

// const comments = [
//     {
//         id: 1,
//         name: 'Leslie Alexander',
//         date: '4d ago',
//         imageId: '1494790108377-be9c29b29330',
//         body: 'Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.',
//     },
//     {
//         id: 2,
//         name: 'Michael Foster',
//         date: '4d ago',
//         imageId: '1519244703995-f4e0f30006d5',
//         body: 'Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia accusamus veniam id explicabo et aut.',
//     },
//     {
//         id: 3,
//         name: 'Dries Vincent',
//         date: '4d ago',
//         imageId: '1506794778202-cad84cf45f1d',
//         body: 'Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.',
//     },
// ]

const eventTypes = {
    applied: { icon: UserIcon, bgColorClass: 'bg-gray-400' },
    advanced: { icon: ThumbUpIcon, bgColorClass: 'bg-pelorous-500' },
    completed: { icon: CheckIcon, bgColorClass: 'bg-green-500' },
}

// const timeline = [
//     {
//         id: 1,
//         type: eventTypes.applied,
//         content: 'Aplicou para',
//         target: 'Teste clínicos',
//         date: 'Sep 20',
//         datetime: '2020-09-20',
//     },
//     {
//         id: 2,
//         type: eventTypes.advanced,
//         content: 'Consulta realizada',
//         target: 'Bethany Blake',
//         date: 'Sep 22',
//         datetime: '2020-09-22',
//     },
//     {
//         id: 3,
//         type: eventTypes.completed,
//         content: 'Completou 600 consultas com',
//         target: 'Martha Gardner',
//         date: 'Sep 28',
//         datetime: '2020-09-28',
//     },
//     {
//         id: 4,
//         type: eventTypes.advanced,
//         content: 'Inicio novo tratamento de',
//         target: 'Bethany Blake',
//         date: 'Sep 30',
//         datetime: '2020-09-30',
//     },
//     {
//         id: 5,
//         type: eventTypes.completed,
//         content: 'Completou cirurgia no ombro de',
//         target: 'Katherine Snyder',
//         date: 'Oct 4',
//         datetime: '2020-10-04',
//     },
// ]

// function classNames(...classes: string[]) {
//     return classes.filter(Boolean).join(' ')
// }




function Profile({ data }: any) {
    const { t } = useTranslation();

    let createdDate = new Date(data.created);
    return (
        <div>
            <div className="mx-auto md:flex md:items-center md:justify-between">
                <div className="flex items-center space-x-5">
                    <div className="flex-shrink-0">
                        <div className="relative">
                            <Image
                                src={data.imgUrl}
                                alt="Picture of the author"
                                width={150}
                                height={150}
                                className="h-16 w-16 rounded-full"
                            />
                            <span className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">{data.fullName}</h1>
                        <p className="text-sm font-medium text-gray-500">
                            {t('page.personalInformation.joinedOn')}{' '}
                            <time>{createdDate.getMonth() + '.' + createdDate.getFullYear()} </time>
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
                                    {t('page.personalInformation.personalInformation')}
                                </h2>
                            </div>
                            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">

                                    <div className="sm:col-span-2">
                                        <dt className="text-sm font-medium text-gray-500">{t('page.personalInformation.about')}</dt>
                                        <dd className="mt-1 text-sm text-gray-900">
                                            {data.about}
                                        </dd>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <dt className="text-sm font-medium text-gray-500">{t('page.personalInformation.professionalSummary')}</dt>
                                        <dd className="mt-1 text-sm text-gray-900">
                                            {data.professionalSkills}
                                        </dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">{t('page.personalInformation.telephone')}</dt>
                                        <dd className="mt-1 text-sm text-gray-900">{data.cellphone}</dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">{t('page.personalInformation.location')}</dt>
                                        <dd className="mt-1 text-sm text-gray-900">{data.location}</dd>
                                    </div>
                                    <div>
                                    {
                                        data.skills.map((element: any) => {
                                            return (
                                                <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                                                    {element}
                                                </span>
                                        )})
                                    }
                                    </div>
                                    
                                    
                                </dl>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Profile;