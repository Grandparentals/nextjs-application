import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import { faFileMedical, faHistory, faInbox, faUser } from "@fortawesome/free-solid-svg-icons";
import { faChartCandlestick, faChartLineUp, faClockDesk, faMailbox, faPersonCane, faSave, faSportsball, faTimer, faTrash, faUserGroup, faUserTie } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeartIcon, InboxIcon, SparklesIcon, TrashIcon, UsersIcon } from "@heroicons/react/outline";

interface Feature {
    name: string
    description: string
    icon: IconProp
}

const features: Array<Feature> = [
    {
        name: 'Spontaneus activieties',
        description: 'Regular spontaneous activities like buying groceries or walking the dog drastically decrease the probability of heart issues.',
        icon: faSportsball,
    },
    {
        name: 'Aging environment',
        description: 'Based on the 2019 United Nations World Population Prospects 2019, until the year 2050 number of people over 65 will increase by 48%. We have to reuse their potential to make the world a better place.',
        icon: faChartLineUp,
    }
    ,
    {
        name: 'Proffessionals in many areas',
        description: 'People have a lot of talents. From carpentery through fixing things to writing. Let\'s not let their skills waste!',
        icon: faUserTie,
    }
]

function FeaturesGradient() {

    return (
        <div className="bg-gradient-to-r from-pelorous-800 to-pelorous-700">
            <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
                <h2 className="text-3xl font-bold tracking-tight text-white">Zero waste mean not to waste people potential!</h2>
                <p className="mt-4 max-w-3xl text-lg text-pelorous-200">
                    
                </p>
                <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                    {features.map((feature) => (
                        <div key={feature.name}>
                            <div>
                                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10">
                                    <FontAwesomeIcon icon={feature.icon} className="h-6 w-6 text-white" aria-hidden="true" />
                                </span>
                            </div>
                            <div className="mt-6">
                                <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                                <p className="mt-2 text-base text-pelorous-200">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturesGradient;