import { faGroupArrowsRotate, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faCompass, faIdCardAlt } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Trans, useTranslation } from 'react-i18next'

function Features() {

    const { t } = useTranslation();

    const incentives = [
        {
            name: t('components.features.icons.one.name'),
            description: t('components.features.icons.one.description'),
            imageSrc: faCompass,
        },
        {
            name: t('components.features.icons.two.name'),
            description: t('components.features.icons.two.description'),
            imageSrc: faIdCardAlt,
        },
        {
            name: t('components.features.icons.three.name'),
            description: t('components.features.icons.three.description'),
            imageSrc: faGroupArrowsRotate,
        },
        {
            name: t('components.features.icons.four.name'),
            description: t('components.features.icons.four.description'),
            imageSrc: faPeopleGroup,
        },
    ]

    return (
        <div className="relative overflow-hidden pt-3 pb-32">
            <div className="relative">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-1 lg:gap-24 lg:px-8">
                    <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                        <div className="bg-gray-50">
                            <div className="mx-auto max-w-2xl py-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                                <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
                                    {incentives.map((incentive) => (
                                        <div key={incentive.name}>
                                            <FontAwesomeIcon icon={incentive.imageSrc} className="h-16 w-16 text-pelorous-500 mx-auto"  aria-hidden="true" />
                                            <h3 className="mt-6 text-xl font-bold tracking-tight text-pelorous-600">{incentive.name}</h3>
                                            <p className="mt-2 text-lg text-gray-500">{incentive.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">

                    <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                        <div>

                            <div className="mt-6">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900">{t('components.features.section.first.title')}</h2>
                                <p className="mt-4 text-lg text-gray-500">
                                    <Trans i18nKey="multiline">
                                        {t('components.features.section.first.text')}
                                    </Trans>
                                </p>
                                <div className="mt-6">
                                    <div className="mt-6">
                                        {<a
                                            href="#"
                                            className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-pelorous-600 to-pelorous-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-pelorous-700 hover:to-pelorous-700"
                                        >
                                            {t('components.features.section.first.tag')}
                                        </a>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 border-t border-gray-200 pt-6">
                            <blockquote>
                                <div>
                                    <p className="text-base text-gray-500">
                                        &ldquo;
                                        {t('components.features.section.quote.text')}
                                        &rdquo;
                                    </p>
                                </div>
                                <footer className="mt-3">
                                    <div className="flex items-center space-x-3">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-6 w-6 rounded-full"
                                                src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=20"
                                                alt=""
                                            />
                                        </div>
                                        <div className="text-base font-medium text-gray-700">
                                            {t('components.features.section.quote.person')}
                                        </div>
                                    </div>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:mt-0">
                        <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                            <img
                                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                src="https://images.unsplash.com/photo-1613147474738-b988fa947e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=20"
                                alt="Second start"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-24">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                    <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
                        <div>

                            <div className="mt-6">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                                    {t('components.features.section.second.title')}
                                </h2>
                                <p className="mt-4 text-lg text-gray-500">
                                    <Trans i18nKey="multiline">
                                        {t('components.features.section.second.text')}
                                    </Trans>
                                </p>
                                <div className="mt-6">
                                    {<a
                                        href="#"
                                        className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-pelorous-600 to-pelorous-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-pelorous-700 hover:to-pelorous-700"
                                    >
                                        {t('components.features.section.second.tag')}
                                    </a>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                        <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                            <img
                                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                src="https://images.unsplash.com/photo-1494438043283-22a3c46831a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=20"
                                alt="Customer profile user interface"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;